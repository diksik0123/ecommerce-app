import { Component } from '@angular/core';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./layout/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce-app';
}
