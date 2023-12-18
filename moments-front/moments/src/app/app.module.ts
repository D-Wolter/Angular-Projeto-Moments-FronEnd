import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.modules';

@NgModule({
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule, 
    CommonModule, 
    RouterModule, 
    AppRoutingModule
], // Adicione outros módulos necessários
  bootstrap: [
    AppComponent
],
})
export class AppModule {}