import { Routes } from '@angular/router';
import { Products } from './products/products';
import { Services } from './services/services';
import { HomeComponent } from './home/home';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: Products },
  { path: 'services', component: Services }
];
