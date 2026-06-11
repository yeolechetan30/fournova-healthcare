import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Import all your custom components
import { Header } from './header/header';

import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,

    Footer
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('FourNova-Healthcare');
}
