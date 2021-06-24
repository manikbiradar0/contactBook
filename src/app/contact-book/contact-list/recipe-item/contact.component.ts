import { AfterViewInit, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth/auth.service';
import { ContactService } from 'src/app/shared/services/contact.service';
import { DataService } from 'src/app/shared/services/data.service';
import { Contact } from '../../contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, AfterViewInit {

  contacts: Contact[] = [];
  selectedContact: number;
  search: any = '';
  query: any = '';
  isLogged: boolean = false;
  

  constructor(private contactService: ContactService, private router: Router, private activeRoute: ActivatedRoute, private authService: AuthService, private dataService: DataService) { }

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
    this.contactService.contactEmit.subscribe(() => {
      this.contacts = this.contactService.getContacts();
    })
    this.authService.user.subscribe(user => {
      this.isLogged = !!user;
    })

    if (this.isLogged) this.fetchData()
  }
  ngAfterViewInit() {

  }
  contactSelected(contact: Contact, index: number) {
    this.contactService.contactEmit.next(contact);
    this.selectedContact = index;
  }

  fetchData() {
    this.dataService.getContactData().subscribe(responce => {
      console.log(responce)
    })
  }
}
