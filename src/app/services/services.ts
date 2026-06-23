import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    const title = 'Our Services';
    const desc = 'FourNova Healthcare offers product supply, distribution, pharmaceutical consultation, quality assurance, and innovative healthcare solutions.';
    const img = 'https://fournova.in/assets/services-hero.jpg';
    this.seo.setTitle(title);
    this.seo.updateDescription(desc);
    this.seo.setOpenGraph({ title, description: desc, image: img });
    this.seo.setTwitter({ title, description: desc, image: img });
  }
}

