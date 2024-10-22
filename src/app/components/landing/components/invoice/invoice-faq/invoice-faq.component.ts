import {Component} from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {ExpansionPanelComponent} from '../../../shared/expansion-panel/expansion-panel.component';

@Component({
  selector: 'invoice-faq',
  standalone: true,
  imports: [NgIf, NgForOf, NgClass, ExpansionPanelComponent],
  templateUrl: './invoice-faq.component.html',
  styleUrl: './invoice-faq.component.scss'
})
export class InvoiceFaqComponent {
  public faqs = [
    {
      title: 'What is an invoice?',
      content: `
<p>An invoice is a billing document issued by a seller to a customer.</p>
<p>The document typically:</p>
<ol style="list-style-type: disc; margin-left: 40px;">
    <li>Details the contact and billing information</li>
    <li>Quantifies an itemized list of goods or services sold</li>
    <li>Provides a clear total for the purchase</li>
    <li>Defines any discounts or specific payment terms</li>
    <li>Contains a unique invoice number and date</li>
</ol>
`
    },
    {
      title: 'What is an invoice number?',
      content: "<p>An invoice number is a unique number assigned to each new invoice you create. These numbers are then used to organize and track each invoice sent.</p>" +
        "<p>Your invoice numbers should be assigned in sequential order. For example, your very first invoice might be “invoice no. 1,” followed by “invoice no. 2,” and so on. Invoice numbers aren’t specific to one customer, so you should keep a running total across all of the invoices you send.</p>\n<p>That being said, some businesses choose to adapt their numbering system to meet their individual needs. This might mean that you choose to incorporate the date into your invoice number for filing purposes, like this: 20172711-001.</p>"
    },
    {
      title: 'How do I send an invoice?',
      content: "<p>Now that you've generated your invoice, you have a couple options when it comes to sending it off to the customer:</p>" +
        "<ol>\n    <li>1, Send the invoice electronically via email, website, or HubSpot.</li>\n    <li>2. Send the invoice via postal mail.</li>\n</ol>\n<p>For many businesses, electronic is the preferred sending method, as it allows you to deliver invoices to a customer in real time. Use HubSpot's Commerce Hub to quickly and seamlessly send invoices to your saved customers.</p>\n<p>When sending an invoice by postal mail, make sure that you consider the time it will take for your invoice to arrive. While this tends to be the slower of the two options, many businesses still send invoices via postal mail to meet the needs and demands of their specific audiences.</p>"
    },
    {
      title: 'Where can I find sample invoices for inspiration?',
      content: "<p>Having a well-designed, professional invoice can make a big difference in the eyes of your customer and help you get paid on time.</p>\n<p>If you need help organizing all of the must-have information that comes on an invoice, use our tool above or download HubSpot's free invoice templates!</p>"
    },
    {
      title: 'Where can I find sample invoices for inspiration?',
      content: "<p>Having a well-designed, professional invoice can make a big difference in the eyes of your customer and help you get paid on time.</p>\n<p>If you need help organizing all of the must-have information that comes on an invoice, use our tool above or download HubSpot's free invoice templates!</p>"
    },
    {
      title: 'What males an invoice legal?',
      content: "<p>An invoice is a legal document and must include certain key information in order to be considered legal. Generally, invoices should include the customer’s name, address and contact details; an invoice number; a description of the goods and/or services sold; the quantity of each item; the total amount due indicated in both numerical and written form; any applicable tax rates applied to the sale; and the date the invoice was issued. Depending on the jurisdiction, additional information such as terms of payment or a unique customer identifier may also be required for an invoice to be considered legal.</p>"
    },
    {
      title: 'Can I issue an invoice without a VAT?',
      content: "<p>In certain circumstances, it is possible to issue an invoice without VAT. This would generally be the case where the goods or services being invoiced are exempt from VAT, such as educational services or food products in some countries. Additionally, businesses which have an annual turnover below a certain threshold (which varies by country) may not be required to charge VAT on their invoices. It is important to check local laws and regulations when issuing an invoice so as to ensure that you are compliant with local tax requirements.</p>"
    }
  ];
}
