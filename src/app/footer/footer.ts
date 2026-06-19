import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-footer',
  imports: [NgFor, MatGridListModule, MatCardModule, MatToolbarModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  coreValues = [
    {
      label: 'Quality',
      text: 'We maintain the highest standards in product selection and quality assurance.',
    },
    {
      label: 'Integrity',
      text: 'We conduct business with honesty, transparency, and accountability.',
    },
    {
      label: 'Innovation',
      text: 'We continuously seek advanced healthcare solutions for better patient outcomes.',
    },
    {
      label: 'Commitment',
      text: 'We remain dedicated to serving healthcare professionals and patients.',
    },
    {
      label: 'Excellence',
      text: 'We strive for excellence in every aspect of our operations.',
    },
  ];

  activeValueIndex: number | null = null;

  toggleValueTooltip(index: number) {
    this.activeValueIndex = this.activeValueIndex === index ? null : index;
  }
}
