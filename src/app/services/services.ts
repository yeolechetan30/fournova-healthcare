import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-services',
  imports: [MatGridListModule, MatCardModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {}
