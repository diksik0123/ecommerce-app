import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart, faCartShopping, faMagnifyingGlass  } from '@fortawesome/free-solid-svg-icons';
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  //icons
  faHeart: any = faHeart;
  faCartShopping: any = faCartShopping;
  faMagnifyingGlass: any = faMagnifyingGlass;
  
  mobileMenuOpen: boolean = false;

}
