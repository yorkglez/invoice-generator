import {Component} from '@angular/core';
import {NgForOf} from '@angular/common';
import {ApiService} from '../../../../../common/services/api.service';
import {ManageCardsModel} from '../../../../../models/manage-cards.model';

@Component({
  selector: 'manage-invoice',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './manage-invoice.component.html',
  styleUrl: './manage-invoice.component.scss'
})
export class ManageInvoiceComponent {
  manageCards: ManageCardsModel[] = [];

  constructor(private apiService: ApiService) {

  }

  public ngOnInit() {
    this.apiService.get('cards').subscribe((response) => {
      this.manageCards = response.map((card: any) => new ManageCardsModel(card));
    });
  }
}
