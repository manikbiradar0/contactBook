import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppRouterModule } from "../app.router";
import { SharedModule } from "../shared/shared.module";
import { HeaderComponent } from "./header.component";

@NgModule({
    imports:[
        CommonModule,
        SharedModule,
        AppRouterModule
    ],
    declarations:[
        HeaderComponent
    ],
    exports:[
        HeaderComponent
    ],
    providers:[]
})
export class HeaderModule{}