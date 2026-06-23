import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [MatCardModule, RouterModule],
  templateUrl: './mission.html',
  styleUrl: './mission.css',
})
export class Mission implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    const title = 'Our Mission';
    const desc = 'Discover FourNova Healthcare’s mission to deliver high‑quality, affordable pharmaceutical marketing solutions across India.';
    const img = 'https://fournova.in/assets/mission-hero.jpg';
    this.seo.setTitle(title);
    this.seo.updateDescription(desc);
    this.seo.setOpenGraph({ title, description: desc, image: img });
    this.seo.setTwitter({ title, description: desc, image: img });
  }
}
