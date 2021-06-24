import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactsComponent } from './contacts.component';
import { ContactComponent } from './contact-list/recipe-item/contact.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { SharedModule } from '../shared/shared.module';
import { AppRouterModule } from '../app.router';
import { AddEditContactComponent } from './add-edit-contact/add-edit-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContactListComponent,
    ContactComponent,
    ContactDetailComponent,
    ContactsComponent,
    AddEditContactComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouterModule,
    SharedModule,
  ],
  exports:[
    ContactListComponent,
    ContactComponent,
    ContactDetailComponent,
    ContactsComponent
  ]
})
export class ContactsModule { }
