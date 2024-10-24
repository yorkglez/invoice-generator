import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'navigation',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgClass
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  protected readonly navItems = [
    {
      name: 'Products',
      url: '/'
    },
    {
      name: 'Solutions',
      url: '/about'
    },
    {
      name: 'Pricing',
      url: '/services'
    },
    {
      name: 'Resources',
      url: '/contact'
    }
  ];
  protected brandImage: string = '/images/logos/hubspot.svg';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const nav = document.getElementById('nav-content') as HTMLElement;
    if (window.scrollY > 0) {
      nav.classList.add('scrolled');
      this.brandImage = '/images/logos/short-logo.svg';
    } else {
      nav.classList.remove('scrolled');
      this.brandImage = '/images/logos/hubspot.svg';
    }
  }
}
