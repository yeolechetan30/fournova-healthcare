import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero/hero';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Hero],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent { }
