import { Contact } from './contact/contact';
import { HomeComponent } from './home/home';
import { Products } from './products/products';
import { Brands } from './brands/brands';
import { Services } from './services/services';
import { About } from './about/about';
import { Mission } from './mission/mission';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: Products },
  { path: 'brands', component: Brands },
  { path: 'dailyxa-60k', component: Brands },
  { path: 'services', component: Services },
  { path: 'about', component: About },
  { path: 'mission', component: Mission },
  { path: 'contact', component: Contact }
];
