import { Component } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    const title = 'About Us';
    const desc = 'Learn about FourNova Healthcare, our mission, values, and commitment to delivering high‑quality pharmaceutical marketing solutions.';
    const img = 'https://fournova.in/assets/about-hero.jpg';
    this.seo.setTitle(title);
    this.seo.updateDescription(desc);
    this.seo.setOpenGraph({ title, description: desc, image: img });
    this.seo.setTwitter({ title, description: desc, image: img });
  }
}
