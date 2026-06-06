import { Component } from '@angular/core';
import { CategoryCardComponent } from '../../components/category-card/category-card.component';
import { FeaturedCollectionComponent } from '../../components/featured-collection/featured-collection.component';
import {HeroBannerComponent} from "../../components/hero-banner/hero-banner.component";

@Component({
  selector: 'app-home',
  imports: [CategoryCardComponent, FeaturedCollectionComponent, HeroBannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
