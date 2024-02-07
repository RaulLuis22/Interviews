// // app.module.ts
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     // Other components, directives, or pipes
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule // Include AppRoutingModule in the imports array
//     // Other imported modules
//   ],
//   providers: [], // Add services/providers here if needed
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { AppRoutingModule } from './app.routes'; // Correct import

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule,AppComponent,AppRoutingModule],
  declarations: [  ],
  bootstrap:    [  ]
})
export class AppModule { }