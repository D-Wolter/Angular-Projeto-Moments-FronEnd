import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app.routes';




@Component({
  selector: 'app-root',
  standalone: true, // Adicione esta linha
  imports: [AppRoutingModule, CommonModule, RouterOutlet, HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']


})

export class AppComponent {
  title = 'moments';

}