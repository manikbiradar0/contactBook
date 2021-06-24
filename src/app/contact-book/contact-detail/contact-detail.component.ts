import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ContactService } from 'src/app/shared/services/contact.service';
import { DataService } from 'src/app/shared/services/data.service';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  contactDetails: Contact;
  id: number;

  constructor(private contactService: ContactService, private activeRoute: ActivatedRoute, private router: Router, private dataService: DataService) {
    this.contactService.contactEmit.subscribe((contact: Contact) => this.contactDetails = contact);
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((param: Params) => {
      this.id = + param['id'];
      this.contactDetails = this.contactService.getContactByIndex(this.id)
    })
  }
  editContact() {
    this.router.navigate(['edit'], { relativeTo: this.activeRoute, queryParamsHandling: "merge", queryParams: { mode: 'edit' } })
  }
  deleteContact(name: string) {
    if (confirm("Are you sure to delete " + name)) {
      this.contactService.deleteContact(this.id)
      this.contactService.contactEmit.next();
      this.dataService.storeContactData()
      this.router.navigate(['./contact'])
    }

  }

}
