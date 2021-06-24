import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Contact } from "src/app/contact-book/contact.model";
import { DataService } from "./data.service";
import { ContactService } from "./contact.service";

@Injectable({
    providedIn: 'root'
})
export class ResolverContactService implements Resolve<Contact[]>{

    constructor(private dataService:DataService, private contactService: ContactService){}
    resolve(snap: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const contacts = this.contactService.getContacts()
        if(!contacts.length){
            return this.dataService.getContactData()
        }
    }
}