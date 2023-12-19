import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { MomentService } from './services/moment.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [

    // Outros componentes aqui
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}