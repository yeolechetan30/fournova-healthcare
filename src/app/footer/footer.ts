import { Component, ElementRef, HostListener } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-footer',
  imports: [NgFor, NgIf, RouterModule, MatGridListModule, MatCardModule, MatToolbarModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  constructor(private elementRef: ElementRef<HTMLElement>) {}
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

  toggleValueTooltip(index: number, event: Event) {
    event.stopPropagation();
    this.activeValueIndex = this.activeValueIndex === index ? null : index;
  }

  closeValueTooltip() {
    this.activeValueIndex = null;
  }

  @HostListener('document:click', ['$event'])
  closeTooltipOnClickOutside(event: Event) {
    const target = event.target as HTMLElement;

    if (!this.elementRef.nativeElement.contains(target)) {
      this.activeValueIndex = null;
      return;
    }

    const clickedValueItem = target.closest('.value-item');
    if (!clickedValueItem) {
      this.activeValueIndex = null;
    }
  }
}
