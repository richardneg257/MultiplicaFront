import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { HttpService } from '../app/services';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyDatePickerModule } from 'mydatepicker';


@NgModule({
  imports: [
      BrowserModule,
      HttpModule,
      FormsModule,
      ReactiveFormsModule,
      AppRoutingModule,
      MyDatePickerModule
  ],
  declarations: [
      AppComponent,
  ],
  bootstrap: [ AppComponent ],
  schemas : [ NO_ERRORS_SCHEMA ],
  providers : [ HttpService ],
})
export class AppModule { }
