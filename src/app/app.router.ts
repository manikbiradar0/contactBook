import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth/auth.component";
import { AuthGuard } from "./auth/auth/auth.guard";
import { AddEditContactComponent } from "./contact-book/add-edit-contact/add-edit-contact.component";
import { ContactDetailComponent } from "./contact-book/contact-detail/contact-detail.component";
import { ContactsComponent } from "./contact-book/contacts.component";
import { ResolverContactService } from "./shared/services/resolver-contact.service";

const approutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: 'login',
        component: AuthComponent,

    },
    { 
        path: 'contact', 
        component: ContactsComponent,
        canActivate: [AuthGuard],
        children:[
            {
                path: '',
                component: ContactDetailComponent
            },
            {
                path: 'add',
                component: AddEditContactComponent
            },
            {
                path: ':id/edit',
                resolve: [ResolverContactService],
                component: AddEditContactComponent
            },
            {
                path: ':id',
                resolve: [ResolverContactService],
                component: ContactDetailComponent
            },
        ]
    },
]

@NgModule({
    imports: [
        RouterModule.forRoot(approutes)
    ],
    exports: [RouterModule]
})
export class AppRouterModule { }