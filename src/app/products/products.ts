import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, RouterModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
products = [
  { name: 'Pain Relief Tablets', price: '₹120', image: 'assets/images/product-pain.png' },
  { name: 'Cough Syrup', price: '₹85', image: 'assets/images/product-cough.png' },
  { name: 'Immunity Booster', price: '₹150', image: 'assets/images/product-immunity.png' },
  { name: 'Diabetes Care', price: '₹110', image: 'assets/images/product-diabetes.png' }
];
}