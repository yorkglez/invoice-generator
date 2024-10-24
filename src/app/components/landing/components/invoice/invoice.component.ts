import {Component} from '@angular/core';
import {SectionCardComponent} from '../../shared/section-card/section-card.component';
import {NgForOf} from '@angular/common';
import {InvoiceFaqComponent} from './invoice-faq/invoice-faq.component';
import {InvoiceGeneratorComponent} from './invoice-generator/invoice-generator.component';
import {ManageInvoiceComponent} from './manage-invoice/manage-invoice.component';
import {ApiService} from '../../../../common/services/api.service';
import {SectionCardModel} from '../../../../models/section-card.model';
import {InvoiceHeadComponent} from './invoice-head/invoice-head.component';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [
    SectionCardComponent,
    NgForOf,
    InvoiceFaqComponent,
    InvoiceGeneratorComponent,
    ManageInvoiceComponent,
    InvoiceHeadComponent,
  ],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss'
})
export class InvoiceComponent {
  protected sectionInfo: any;
  protected sectionHowToUse: any;
  protected customInvoice: any;

  constructor(private apiService: ApiService) {

  }

  ngOnInit() {
    this.apiService.get('sections').subscribe((response) => {
      this.sectionInfo = new SectionCardModel(response[0]);
      this.sectionHowToUse = new SectionCardModel(response[1]);
      this.customInvoice = new SectionCardModel(response[2]);
    });
  }
}
