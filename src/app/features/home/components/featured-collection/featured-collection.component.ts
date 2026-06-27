import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../../../../core/services/product.service';
import { Product } from '../../../../core/models/product';


@Component({
  selector: 'app-featured-collection',
  imports: [],
  templateUrl: './featured-collection.component.html',
  styleUrl: './featured-collection.component.css'
})
export class FeaturedCollectionComponent implements OnInit {
  private productService = inject(ProductService);

  products: Product[] = [];

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }


}
