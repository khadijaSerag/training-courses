import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedRoutingModule } from './shared-routing.module';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule,
  ],
  exports:[
    NavbarComponent,
    HeaderComponent,
  ]
})
export class SharedModule { }
