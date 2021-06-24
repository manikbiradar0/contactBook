import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from './header/header.component.module';
import { ContactsModule } from './contact-book/contacts.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { ContactService } from './shared/services/contact.service';
import { AppRouterModule } from './app.router';
import { DataService } from './shared/services/data.service';
import { AuthModule } from './auth/auth/auth.module';
import { AuthService } from './auth/auth/auth.service';
import { AuthInterceptorService } from './auth/auth/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRouterModule,
    AuthModule,
    HeaderModule,
    ContactsModule,
    SharedModule,
  ],
  exports: [],
  providers: [ContactService, DataService, AuthService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
