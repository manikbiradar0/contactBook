import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ContactService } from 'src/app/shared/services/contact.service';
import { DataService } from 'src/app/shared/services/data.service';
import { Tags } from 'src/app/shared/shopping-list.model';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-add-edit-contact',
  templateUrl: './add-edit-contact.component.html',
  styleUrls: ['./add-edit-contact.component.scss']
})
export class AddEditContactComponent implements OnInit {


  contactForm: FormGroup;

  mode: boolean = true;
  id: number;
  emailInvalidText: string = null;
  phoneInvalidText: string = null;




  constructor(private contactService: ContactService, private activeRoute: ActivatedRoute, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {

    let contact: Contact;

    this.activeRoute.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.activeRoute.queryParams.subscribe((params: Params) => {
        this.mode = params['mode'] === 'add' ? true : false;
        if (!this.mode) {
          contact = this.contactService.getContactByIndex(this.id);
        }
      })

    })

    this.contactForm = new FormGroup({
      fname: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      lname: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required, Validators.minLength(8), this.phoneValidator()]),
      status: new FormControl(false),
    })

    if (!this.mode) this.contactForm.patchValue(contact)

  }

  get name() {
    return this.contactForm.get('fname');
  }
  get lname() {
    return this.contactForm.get('lname');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get phone() {
    return this.contactForm.get('phone');
  }
  get isNameInvalid() {
    return this.name.invalid && (this.name.dirty || this.name.touched);
  }
  get isLameInvalid() {
    return this.name.invalid && (this.name.dirty || this.name.touched);
  }
  get isEmailInvalid() {
    return (
      this.emailInvalidText ||
      (this.email.invalid && (this.email.dirty || this.email.touched))
    );
  }
  get isPhoneInvalid() {
    return (
      this.phoneInvalidText ||
      (this.phone.invalid && (this.phone.dirty || this.phone.touched))
    );
  }


  // only accepts numbers, white space, "+" and "-"
  phoneValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let phoneRegex: RegExp = new RegExp(/^[-+\s/0-9]*$/);
      const forbidden = !phoneRegex.test(control.value);
      return forbidden ? { invalidPhone: { value: control.value } } : null;
    };
  }

  onSubmit() {
    console.log(this.contactForm)

    if (this.mode) {
      this.contactService.addContact(this.contactForm.value);
      this.contactService.contactEmit.next();
      this.dataService.storeContactData()
      this.contactForm.reset()
      this.router.navigate(['../'], { relativeTo: this.activeRoute })
    }
    else {
      this.contactService.updateContact(this.id, this.contactForm.value);
      this.contactService.contactEmit.next();
      this.dataService.storeContactData()

      this.router.navigate(['../'], { relativeTo: this.activeRoute })
    }

  }

}