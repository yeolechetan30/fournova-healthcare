import { Contact } from './contact/contact';
import { HomeComponent } from './home/home';
import { Products } from './products/products';
import { Brands } from './brands/brands';
import { Services } from './services/services';
import { About } from './about/about';
import { Mission } from './mission/mission';
import { Routes } from '@angular/router';
import { BrandDetail } from './brands/brand-detail';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: Products },
  { path: 'dailyxa-60k', component: BrandDetail },
  { path: 'dailyxa-tablets', component: BrandDetail },
  { path: 'raft-go', component: BrandDetail },
  { path: 'sobinova-500', component: BrandDetail },
  { path: 'sobinova-forte', component: BrandDetail },
  { path: 'fourpraz-d-40', component: BrandDetail },
  { path: 'foursprin-av-75', component: BrandDetail },
  { path: 'foursprin-gold-10', component: BrandDetail },
  { path: 'hbfour-x', component: BrandDetail },
  { path: 'brands', component: Brands },
  { path: 'services', component: Services },
  { path: 'about', component: About },
  { path: 'mission', component: Mission },
  { path: 'contact', component: Contact }
];
