import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './dropdown.directive';
import { ShortenPipe } from './shorten.pipe';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './components/loading.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    LoadingComponent,
    ShortenPipe,
    DropdownDirective,
    SearchPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ShortenPipe,
    DropdownDirective,
    LoadingComponent,
    SearchPipe
  ]
})
export class SharedModule { }
