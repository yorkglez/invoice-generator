import {Routes} from '@angular/router';
import {InvoiceComponent} from './components/landing/components/invoice/invoice.component';

export const routes: Routes = [
  {
    component: InvoiceComponent,
    path: 'invoice-generator'
  },
  {path: '**', redirectTo: 'invoice-generator'}

];
