import {Component, Input} from '@angular/core';
import {SectionCard} from '../../../../utils/interfaces/section-card.interface';
import {DomSanitizer} from '@angular/platform-browser';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'section-card',
  standalone: true,
  imports: [
    NgIf,
    NgClass
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
    if (this.content.descriptionContent.imagePosition === 'right') {

    }
    if (this.content.descriptionContent.imagePosition === 'left') {
      classString = 'flex flex-row-reverse justify-between items-center gap-36';
    } else {
      classString = 'flex flex-col justify-center items-center '
    }
    return classString;
  }

}
