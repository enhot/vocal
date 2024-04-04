import { NgClass } from '@angular/common';
import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public isShow: boolean = false;
  constructor(private elem: ElementRef, private render: Renderer2) {}

  showMenu(): void {
    this.isShow = !this.isShow;
  }
}
