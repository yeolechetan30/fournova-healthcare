import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, RouterModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    const title = 'Our Products';
    const desc = 'Explore FourNova Healthcare’s product portfolio, including speciality medicines, therapeutic segments, and innovative pharmaceutical solutions.';
    const img = 'https://fournova.in/assets/products-hero.jpg';
    this.seo.setTitle(title);
    this.seo.updateDescription(desc);
    this.seo.setOpenGraph({ title, description: desc, image: img });
    this.seo.setTwitter({ title, description: desc, image: img });
  }

  products = [
    { name: 'Pain Relief Tablets', price: '₹120', image: 'assets/images/product-pain.png' },
    { name: 'Cough Syrup', price: '₹85', image: 'assets/images/product-cough.png' },
    { name: 'Immunity Booster', price: '₹150', image: 'assets/images/product-immunity.png' },
    { name: 'Diabetes Care', price: '₹110', image: 'assets/images/product-diabetes.png' }
  ];
}