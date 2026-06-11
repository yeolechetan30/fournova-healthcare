import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-contact',
  imports: [MatCardModule,MatGridListModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {}
