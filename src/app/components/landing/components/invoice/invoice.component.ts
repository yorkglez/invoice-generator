import {Component} from '@angular/core';
import {SectionCardComponent} from '../../shared/section-card/section-card.component';
import {NgForOf} from '@angular/common';
import {InvoiceFaqComponent} from './invoice-faq/invoice-faq.component';
import {InvoiceGeneratorComponent} from './invoice-generator/invoice-generator.component';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [
    SectionCardComponent,
    NgForOf,
    InvoiceFaqComponent,
    InvoiceGeneratorComponent
  ],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss'
})
export class InvoiceComponent {
  sectionInfo = {
    textColor: '#FFF',
    width: '60%',
    height: 'auto',
    padding: 'py-24',
    titleContent: {
      title: 'Invoice Generator',
      size: '48px',
      align: 'center',
    },
    logo: 'logo-invoice.svg',
    logoPosition: 'left',
    descriptionContent: {
      description: 'Tired of manually creating invoices? Say hello to HubSpot\'s free online Invoice Generator! Make' +
        ' professional invoices that showcase your brand and impress your customers. Then, manage your invoice with the HubSpot invoice integration. ',
      image: 'invoice',
      imagePosition: 'right',
    }
  }

  sectionHowToUse = {
    textColor: '#FFF',
    width: '40%',
    titleContent: {
      title: 'How to Use HubSpot\'s Free Online Invoice Generator',
      size: '32px',
    },
    descriptionContent: {
      description: '<p>Use this free online invoice generator to create your very own professional invoice. Once you\'re done,' +
        ' upload the invoice to HubSpot to effectively manage it and distribute it to customers. </p>' +
        '<ul><li>1. Create your professional invoice by filling out each field in the template above.</li>' +
        '<li>2. Download the PDF or upload your invoice to HubSpot\'s revenue tools.</li>' +
        '<li>3. Manage this invoice and any future invoices with the HubSpot invoice integration. You can send it to customers, process payments, and analyze your revenue – all within the CRM. \n</li>' +
        '</ul>' +
        '<p>Make full use of HubSpot\'s Commerce Hub to streamline your business billing. Unlock other easy-to-use features such as quotes, billing automation, and revenue reporting, and more. </p>',
      icon: 'invoice',
      iconPosition: 'left',
      image: 'https://www.hubspot.com/hs-fs/hubfs/Copy%20of%20Company%20News%20Blog%20Hero%20(3).png?width=1220&height=686&name=Copy%20of%20Company%20News%20Blog%20Hero%20(3).png',
      imagePosition: 'bottom',
      imageSize: '100%'
    }
  }
  customInvoice = {
    backgroundColor: '#FFF',
    textColor: '#000',
    width: '60%',
    buttons:
      {
        backgroundColor: '#FF5C35',
        textColor: '#FFF',
        text: 'Create my invoice',
        href: 'https://www.hubspot.com/products/invoice-generator',
      },
    titleContent: {
      title: 'A custom invoice for your business',
      size: '22px',
    },
    descriptionContent: {
      description: '<p>Customize your invoice by adding your business details, logo, and changing the colors to fit your business branding.' +
        ' Stand out from the competition with tailored invoices that reflect your professional identity.</p> <br>' +
        '<p>Whether you\'re a small business owner or an enterprise, Invoice Generator allows you to effortlessly generate professional' +
        ' invoices to impress your clients. Focus on what you do best and leave the invoicing design to us.</p>',
      image: 'https://www.hubspot.com/hs-fs/hubfs/screenshot_2024-09-09_at_3.40.09___pm.png?width=380&height=399&name=screenshot_2024-09-09_at_3.40.09___pm.png',
      imagePosition: 'left',
      imageSize: '100%',
    }
  }
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
