import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero/hero';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Hero],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    const title = 'Home';
    const desc = 'Fast‑growing pharmaceutical marketing company delivering high‑quality, affordable healthcare solutions across Maharashtra & Uttar Pradesh.';
    const img = 'https://fournova.in/assets/hero.jpg';
    this.seo.setTitle(title);
    this.seo.updateDescription(desc);
    this.seo.setOpenGraph({ title, description: desc, image: img });
    this.seo.setTwitter({ title, description: desc, image: img });
  }
}

