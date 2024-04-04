import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header/header.component';
import { FooterComponent } from '../footer/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
