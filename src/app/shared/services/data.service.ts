import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { exhaustMap, map, take, tap } from "rxjs/operators";
import { AuthService } from "src/app/auth/auth/auth.service";
import { Contact } from "src/app/contact-book/contact.model";
import { ContactService } from "./contact.service";

@Injectable({
    providedIn: 'root'
})
export class DataService implements OnInit {

    constructor(private http: HttpClient, private contactSer: ContactService, private authService: AuthService) { }
    ngOnInit() { }

    getContactData() {
        return this.http.get<Contact[]>('https://recipe-book-70db1-default-rtdb.firebaseio.com/contact-book.json'            
        ).pipe(
            map(responce => {
                return responce.map(responce => {
                    return { ...responce}
                })
            }),
            tap(responce => {
                this.contactSer.setNewContact(responce)
            })
        )
    }
    storeContactData() {
        let data: Contact[] = this.contactSer.getContacts();
        this.http.put<Contact[]>('https://recipe-book-70db1-default-rtdb.firebaseio.com/contact-book.json', data)
            .subscribe(responce => {
                console.log(responce)
            }, error => {
                console.log(error.message)
            })
    }
}