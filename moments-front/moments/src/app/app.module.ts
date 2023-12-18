import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.modules';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // Seus componentes aqui
 
  ],
  imports: [
    AppRoutingModule,
    BrowserModule // Adicione o AppRoutingModule aos imports
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}