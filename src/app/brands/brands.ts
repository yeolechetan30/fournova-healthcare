import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brands.html',
  styleUrl: './brands.css',
})
export class Brands implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    const title = 'Brand - FourNova Healthcare';
    const desc =
      'Dailyxa 60K by FourNova Healthcare is a Vitamin D3 oral solution with 60,000 IU for immunity, bone health, and daily wellness.';
    const keywords = [
      'Dailyxa 60K',
      'Dailyxa vitamin D3',
      'Vitamin D3 oral solution',
      'Vitamin D3 60000 IU',
      'Dailyxa 60K price',
      'Dailyxa orange flavour',
      'Vitamin D3 supplement',
      'Bone health supplement',
      'Immunity booster supplement',
      'FourNova Healthcare Dailyxa',
    ].join(', ');
    const img = 'https://fournova.in/assets/logo.png';

    this.seo.setTitle(title);
    this.seo.updateDescription(desc);
    this.seo.updateKeywords(keywords);
    this.seo.setOpenGraph({ title, description: desc, image: img });
    this.seo.setTwitter({ title, description: desc, image: img });
    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Dailyxa 60K',
      image: img,
      description: desc,
      brand: {
        '@type': 'Brand',
        name: 'FourNova Healthcare',
      },
      category: 'Vitamin D3 Oral Solution ',
      sku: 'DNV-D3-60K',
      mpn: 'D3-60K-001',
      keywords,
      offers: {
        '@type': 'Offer',
        priceCurrency: 'INR',
        price: '65.00',
      },
    });
  }

  featuredBrand = {
    name: 'Dailyxa 60K',
    category: 'Vitamin D3 Oral Solution',
    description:
      'Dailyxa 60K is a doctor-trusted Vitamin D3 oral solution formulated to support immunity, bone strength, and overall wellness in a convenient daily format.',
    image: 'assets/images/daily_xa-60k.png',
    dosage: '60,000 IU',
    flavour: 'Orange Flavour',
    size: '5 ml',
  };
}
