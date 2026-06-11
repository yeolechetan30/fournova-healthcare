import { Contact } from './contact/contact';
import { HomeComponent } from './home/home';
import { Products } from './products/products';
import { Services } from './services/services';
import { About } from './about/about';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: Products },
  { path: 'services', component: Services },
  { path: 'about', component: About },
  { path: 'contact', component: Contact }
];
