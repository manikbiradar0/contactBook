import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponce, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isLoginMode:boolean = true;
  isError:string = null
  isLoading: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  loginForm: FormGroup;
  emailInvalidText: string = null;

  authObs: Observable<AuthResponce>

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email,]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }
  switchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  get password() {
    return this.loginForm.get('password');
  }
  get email() {
    return this.loginForm.get('email');
  }
 
  get isPassInvalid() {
    return this.password.invalid && (this.password.dirty || this.password.touched);
  }
  get isEmailInvalid() {
    return (
      this.emailInvalidText ||
      (this.email.invalid && (this.email.dirty || this.email.touched))
    );
  }
  

  submitLogin(){

    if(!this.loginForm.get('email').value && !this.loginForm.get('password').value) return;
    this.isError = null;
    this.isLoading = true;
    if(this.isLoginMode){
      this.authObs =  this.authService.singIn({ email:this.loginForm.get('email').value, password: this.loginForm.get('password').value})      
    }
    else{
      this.authObs = this.authService.signUp({ email:this.loginForm.get('email').value, password: this.loginForm.get('password').value})      
    }

    this.authObs.subscribe((responce) =>{
      console.log(responce);
      this.isLoading = false;
      this.router.navigate(['./contact'])
    }, error =>{
      console.log(error);
      this.isLoading = false;
      this.isError = error
    })
  }

}
