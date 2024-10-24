import {Component, Input} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'invoice-head',
  standalone: true,
  imports: [],
  templateUrl: './invoice-head.component.html',
  styleUrl: './invoice-head.component.scss'
})
export class InvoiceHeadComponent {
  @Input() content?: any;

  constructor(private sanitizer: DomSanitizer) {
  }

  get safeHtml() {
    return this.sanitizer.bypassSecurityTrustHtml(this.content?.descriptionContent.description);
  }
}
