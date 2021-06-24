import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth/auth.service';
import { Tags } from './shared/shopping-list.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService){}
  ngOnInit(){
    this.authService.autoLogin()
  }
 
}
