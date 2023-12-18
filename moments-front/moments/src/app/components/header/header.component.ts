import { Component } from '@angular/core';
import { AppRoutingModule } from '../../app.routes';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AppRoutingModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
