import {Component, Input} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {JsonPipe, NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'section-card',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
  ],
  templateUrl: './section-card.component.html',
  styleUrl: './section-card.component.scss'
})
export class SectionCardComponent {
  @Input() content?: any;

  constructor(private sanitizer: DomSanitizer) {
  }

  get safeHtml() {
    return this.sanitizer.bypassSecurityTrustHtml(this.content?.descriptionContent.description);
  }

  get getClass(): string {
    let classString = '';
    let padding = this.content?.padding ? this.content?.padding : 'py-10';
    if (this.content?.descriptionContent?.imagePosition === 'left') {
      classString = 'flex flex-row-reverse justify-between items-center gap-36 ';
    } else {
      classString = 'flex flex-col justify-center items-center '
    }
    return classString + padding;
  }

  get getContainerClass(): string {
    let classString = '';
    if (this.content?.logoPosition === 'left') {
      classString = 'flex flex-row items-center justify-center items-center gap-36';
    }
    if (this.content?.logoPosition === 'top-left') {
      classString = 'flex flex-row items-center top-left justify-center items-center gap-36';
    }
    else {
      classString = 'flex flex-col justify-center items-center '
    }
    return classString;
  }
}
