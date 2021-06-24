import { EventEmitter, Injectable, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Contact } from "src/app/contact-book/contact.model";
import { Tags } from "../shopping-list.model";
import { DataService } from "./data.service";

@Injectable({
    providedIn: 'root'
})
export class ContactService implements OnInit {

    contacts: Contact[] = [];

    contactEmit = new Subject<Contact>();

    constructor() { }
    ngOnInit() { }

    setNewContact(contactsNew:Contact[]){
        this.contacts = contactsNew
        this.contactEmit.next();
    }
    getContacts() {
        return this.contacts.slice()
    }
    getContactByIndex(index: number) {
        return this.contacts[index]
    }
    addContact(newContact: Contact) {
        this.contacts.push(newContact)
    }
    updateContact(id: number, contactUpdated: Contact) {
        this.contacts[id] = contactUpdated
    }
    deleteContact(index: number) {
        this.contacts.splice(index, 1)
    }
}