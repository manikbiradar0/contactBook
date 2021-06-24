import { HttpClient, HttpClientModule, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Subject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { User } from "./auth.model";

export interface AuthResponce {
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?: boolean
}

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    user = new BehaviorSubject<User>(null);
    logoutTimer: any;

    constructor(private http: HttpClient, private router: Router) { }

    signUp(userDetails: { email: string, password: string }) {
        console.log(userDetails)
        return this.http.post<AuthResponce>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB0wD51_fC1aDuOSk1U51BRIx1pApL_EFo',
            {
                'email': userDetails.email,
                'password': userDetails.password,
                'returnSecureToken': true
            })
            .pipe(catchError(this.errorHandle), tap(res => {
                this.handleAuth(res.email, res.localId, res.idToken, res.expiresIn)
            }))
    }
    singIn(userDetails: { email: string, password: string }) {
        return this.http.post<AuthResponce>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB0wD51_fC1aDuOSk1U51BRIx1pApL_EFo',
            {
                'email': userDetails.email,
                'password': userDetails.password,
                'returnSecureToken': true
            }).pipe(catchError(this.errorHandle), tap(res => {
                this.handleAuth(res.email, res.localId, res.idToken, res.expiresIn)
            }))
    }

    private handleAuth(email: string, localId: string, idToken: string, expiration: string) {
        const newDate = new Date(
            new Date().getTime() + +expiration * 1000
        )
        const user = new User(email, localId, idToken, newDate);
        localStorage.setItem('userData', JSON.stringify(user));
        this.autoLogout(+expiration * 1000 )
        this.user.next(user)
    }
    private errorHandle(error: HttpErrorResponse) {
        console.log(error);
        let message = "An unknown error accured!"
        if (!error.error || !error.error.error) return throwError(message)
        switch (error.error.error.message) {

            case "EMAIL_EXISTS":
                message = "Email already exist"
                break;
            case "EMAIL_NOT_FOUND":
                message = "There is no user record corresponding to this identifier. The user may have been deleted."
                break;
            case "INVALID_PASSWORD":
                message = "The password is invalid or the user does not have a password."
                break;
            case "USER_DISABLED":
                message = "The user account has been disabled by an administrator."
                break;
            default:
                message = "An unknown error accured!"
                break;

        }
        return throwError(message)
    }
    autoLogin() {
        const userToken: { email: string; id: string; _token: string; _tokenExpDate: string } = JSON.parse(localStorage.getItem('userData'));
        console.log(userToken)
        if (!userToken) return;
        const loadUser = new User(userToken.email, userToken.id, userToken._token, new Date(userToken._tokenExpDate))
        if (loadUser.token) { 
            this.user.next(loadUser) 
            const duration = new Date(userToken._tokenExpDate).getTime() - new Date().getTime();
            this.autoLogout(duration)
        }
    }
    logout() {
        this.user.next(null);
        this.router.navigate(['/login'])
        localStorage.removeItem('userData')
    }

    autoLogout(expirationDate: number){
        this.logoutTimer = setTimeout(() =>{
            this.logout()
        }, expirationDate)
    }
}