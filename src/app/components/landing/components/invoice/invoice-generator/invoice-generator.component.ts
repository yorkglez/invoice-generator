import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {File} from 'node:buffer';

@Component({
  selector: 'invoice-generator',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf,
    FormsModule,
    NgIf,
    NgClass
  ],
  templateUrl: './invoice-generator.component.html',
  styleUrl: './invoice-generator.component.scss'
})
export class InvoiceGeneratorComponent {
  public infoForm: FormGroup;
  public errorsList: any;
  public itemsList = [
    {
      id: '01',
      description: '',
      quantity: 1,
      price: '$0.00'
    }
  ];
  public showAddMoreRows: boolean = false;
  public file: any;
  public showRemoveRowButton: boolean = false;
  public tax: number = 0;
  public discount: number = 0;
  selectedImage: string | ArrayBuffer | null = null;
  private subtotal: number = 0;

  constructor(private fb: FormBuilder) {
    this.infoForm = this.fb.group({
      company: ['', Validators.required, Validators.minLength(3)],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      companySite: ['', Validators.required],
      companyAddress: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      clientInfo: new FormBuilder().group({
        company: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        companyAddress: ['', Validators.required],
        city: ['', Validators.required],
        country: ['', Validators.required],
        email: ['', Validators.required],
      }),
      invoiceInfo: new FormBuilder().group({
        invoiceNumber: ['', Validators.required],
        invoiceDate: ['', Validators.required],
        dueDate: ['', Validators.required],
      }),
      notes: [''],
      totals: new FormBuilder().group({
        subtotal: [0],
        tax: [0],
        discount: [0],
        total: [0]
      }),
    });
  }

  onFileDropped(event: DragEvent) {
    event.preventDefault();
    const files = event.dataTransfer?.files;
    this.renderImage(files)
  }

  public onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  public onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const files = input.files;
    this.renderImage(files)
  }

  public renderImage(files: any) {
    if (files) {
      const file = files[0]
      const reader = new FileReader();

      reader.onload = () => {
        this.selectedImage = reader.result;
      };

      reader.readAsDataURL(file);
    }
  }

  addMore() {
    const sizeList = this.itemsList.length + 1;
    const index = sizeList < 10 ? '0' + sizeList : sizeList;
    this.itemsList.push({
      id: index as any,
      description: '',
      quantity: 1,
      price: '$0.00'
    });
    this.showAddMoreRows = false;
  }

  public removeRow(index: number) {
    this.itemsList.splice(index, 1);
  }

  showRemoveRow() {
    this.showRemoveRowButton = true;
    this.showAddMoreRowsButton();
  }

  showAddMoreRowsButton() {
    this.showAddMoreRows = true;
  }

  hiddAddmoreRows() {
    this.showAddMoreRows = false;
  }

  protected readonly onmouseleave = onmouseleave;


  /*
    * Get the subtotal of the invoice
   */
  public get getSubTotal() {
    this.subtotal = this.itemsList.reduce((acc, item) => {
      const quantity = item.quantity || 0;
      const price = parseFloat(item.price) || 0;

      return acc + (quantity * price);
    }, 0);
    return this.subtotal;
  }

  /*
    * Get the total of the invoice
   */
  public get getTotal() {
    const tax = (this.subtotal / 100) * this.tax;
    let total = this.subtotal + tax;
    const discount = (total / 100) * this.discount;

    return total - discount;
  }

  public getAllErrors(): string[] {
    const errors: string[] = [];
    Object.keys(this.infoForm.controls).forEach(controlName => {
      const controlError = this.getControlErrors(controlName);
      console.log(controlError)
      errors.push(...controlError);
    });
    return errors;
  }


  // // Método para obtener los errores de un control
  showConfig: boolean = false;

  getControlErrors(controlName: string): string[] {
    const control = this.infoForm.get(controlName);
    if (!control) return [];

    const errors: string[] = [];

    if (control.errors) {
      // Manejar errores síncronos
      if (control.hasError('required')) {
        errors.push(`${controlName} es obligatorio.`);
      }
      if (control.hasError('minlength')) {
        const requiredLength = control.getError('minlength').requiredLength;
        errors.push(`${controlName} debe tener al menos ${requiredLength} caracteres.`);
      }
      if (control.hasError('maxlength')) {
        const maxLength = control.getError('maxlength').requiredLength;
        errors.push(`${controlName} debe tener como máximo ${maxLength} caracteres.`);
      }
      // Aquí puedes añadir más validadores según tus necesidades
    }

    return errors;
  }


  public resetForm() {
    this.infoForm.reset();
    this.itemsList = [
      {
        id: '01',
        description: '',
        quantity: 1,
        price: '$0.00'
      }
    ];
  }
}
