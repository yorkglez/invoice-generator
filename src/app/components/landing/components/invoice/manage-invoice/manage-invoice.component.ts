import {Component} from '@angular/core';
import {NgForOf} from '@angular/common';

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
  manageCards = [
    {
      title: 'Invoices',
      content: 'Create, send, and monitor professional invoices within the HubSpot invoice integration.' +
        ' Consolidate invoicing, payments, and quoting in one place.',
      icon: 'https://www.hubspot.com/hs-fs/hubfs/2023_Pay_Slip-1.png?width=150&height=150&name=2023_Pay_Slip-1.png',
    },
    {
      title: 'Payments',
      content: 'Expedite payments by easily generating and distributing payment links. Share links across customer touchpoints like emails, websites, forms, and meetings.\n',
      icon: 'https://www.hubspot.com/hs-fs/hubfs/2023_SalesHub_Payments2-1.png?width=150&height=151&name=2023_SalesHub_Payments2-1.png',
    },
    {
      title: 'Quotes',
      content: 'Generate branded sales quotes, collect payments and electronic signatures within quotes, and automatically populate quotes with information from HubSpot’s Smart CRM.\n',
      icon: 'https://www.hubspot.com/hs-fs/hubfs/2023_CRM_Customer_Profiles1-1.png?width=150&height=150&name=2023_CRM_Customer_Profiles1-1.png',
    },
    {
      title: 'Revenue Reporting',
      content: 'Analyze total gross revenue, top products, and top-performing sales reps with comprehensive revenue reporting. Customize your reports for additional insights.\n',
      icon: 'https://www.hubspot.com/hs-fs/hubfs/2023_Data_Monitoring3-4.png?width=150&height=150&name=2023_Data_Monitoring3-4.png',
    }
  ]
}
