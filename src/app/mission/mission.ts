import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [MatCardModule, RouterModule],
  templateUrl: './mission.html',
  styleUrl: './mission.css',
})
export class Mission {}
