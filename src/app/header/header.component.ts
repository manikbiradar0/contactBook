import { HttpErrorResponse } from "@angular/common/http";
import { error } from "@angular/compiler/src/util";
import { Component, OnInit } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { AuthService } from "../auth/auth/auth.service";
import { DataService } from "../shared/services/data.service";
import { ContactService } from "../shared/services/contact.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    // private dataService: 

    isLogged: boolean = false;
    showToggle: boolean = false;
    
    constructor(private dataService: DataService, private authService:AuthService) { }
    ngOnInit() {
        this.authService.user.subscribe(user =>{
            this.isLogged = !!user;           
        })        
    }

    saveData() {
        this.dataService.storeContactData()
    }
    fetchData() {
        this.dataService.getContactData().subscribe(responce => {
            console.log(responce)
        })
    }
    logout(){
        this.authService.logout()
    }
}