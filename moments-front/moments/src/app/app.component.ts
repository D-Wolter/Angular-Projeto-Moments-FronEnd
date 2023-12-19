import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagesComponent } from "./components/messages/messages.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [
        AppRoutingModule,
        CommonModule,
        RouterOutlet,
        HeaderComponent,
        FooterComponent,
        RouterOutlet,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MessagesComponent
    ]
})

export class AppComponent {
  title = 'moments';
}