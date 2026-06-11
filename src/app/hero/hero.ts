import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MatCardModule, MatGridListModule, MatButtonModule, MatIconModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class Hero { }
