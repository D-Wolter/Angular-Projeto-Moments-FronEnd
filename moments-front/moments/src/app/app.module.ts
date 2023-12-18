import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.modules';// Importe o AppRoutingModule

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // Seus componentes aqui
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Adicione o AppRoutingModule aos imports
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}