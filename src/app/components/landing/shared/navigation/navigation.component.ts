import {Component, HostListener} from '@angular/core';
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
  protected scrollTop: boolean = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.scrollTop = scrollPosition <= 100;
  }
}