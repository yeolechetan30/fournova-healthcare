import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatCardModule, MatGridListModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    const title = 'Contact Us';
    const desc = 'Get in touch with FourNova Healthcare for inquiries, support, and partnership opportunities across Maharashtra and Uttar Pradesh.';
    const img = 'https://fournova.in/assets/contact-hero.jpg';
    this.seo.setTitle(title);
    this.seo.updateDescription(desc);
    this.seo.setOpenGraph({ title, description: desc, image: img });
    this.seo.setTwitter({ title, description: desc, image: img });
  }
}
