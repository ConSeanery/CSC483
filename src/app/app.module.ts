import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';



@NgModule({
  providers: [DataService],
  declarations: [
    AppComponent
  ],
   imports: [
=======

import { AppComponent  } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from './data.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';


@NgModule({
  declarations: [
    AppComponent
	// Other arrays removed
  imports: [
>>>>>>> 10bc0cafe905e187fbc64d1531494f4b85d63b7f
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
<<<<<<< HEAD
=======
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
>>>>>>> 10bc0cafe905e187fbc64d1531494f4b85d63b7f
  bootstrap: [AppComponent]
})
export class AppModule { }
