import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'expansion-panel',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './expansion-panel.component.html',
  styleUrl: './expansion-panel.component.scss'
})
export class ExpansionPanelComponent {
  @Input() content: any;
  public panelOpenState = false;

  constructor(private sanitizer: DomSanitizer) {
  }

  get safeHtml() {
    return this.sanitizer.bypassSecurityTrustHtml(this.content?.content);
  }

  public togglePanel() {
    this.panelOpenState = !this.panelOpenState;
  }
}
