import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home/home.component';
import { CartComponent } from './features/cart/cart.component';
import { CheckoutComponent } from './features/checkout/checkout.component';
import { NotfoundComponent } from './features/notfound/notfound.component';
import { WishlistComponent } from './features/wishlist/wishlist.component';
import { ProductsComponent } from './features/products/products.component';
  

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'wishlist',
    component: WishlistComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];
