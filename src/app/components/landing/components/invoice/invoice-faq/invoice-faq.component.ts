import {Component} from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {ExpansionPanelComponent} from '../../../shared/expansion-panel/expansion-panel.component';
import {ApiService} from '../../../../../common/services/api.service';
import {FaqsModel} from '../../../../../models/faqs.model';

@Component({
  selector: 'invoice-faq',
  standalone: true,
  imports: [NgIf, NgForOf, NgClass, ExpansionPanelComponent],
  templateUrl: './invoice-faq.component.html',
  styleUrl: './invoice-faq.component.scss'
})
export class InvoiceFaqComponent {
  public faqs: FaqsModel[] = [];

  constructor(private apiService: ApiService) {

  }

  public ngOnInit() {
    this.apiService.get('faqs').subscribe((response) => {
      this.faqs = response.map((faq: any) => new FaqsModel(faq));
    });
  }
}
