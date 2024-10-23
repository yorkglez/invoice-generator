import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {ColorTwitterModule} from 'ngx-color/twitter';
import {jsPDF} from 'jspdf';

@Component({
  selector: 'invoice-generator',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf,
    FormsModule,
    NgIf,
    NgClass,
    ColorTwitterModule
  ],
  templateUrl: './invoice-generator.component.html',
  styleUrl: './invoice-generator.component.scss'
})
export class InvoiceGeneratorComponent {
  protected colorSelected = '#425B76';
  protected infoForm: FormGroup;
  protected errorsList: any;
  protected colors = [
    '#FCB900',
    '#7BDCB5',
    '#00D084',
    '#8ED1FC',
    '#0693E3',
    '#9900EF',
  ];
  protected itemsList = [
    {
      id: '01',
      description: '',
      quantity: 1,
      price: '$0.00'
    }
  ];
  protected file: any;

  protected tax: number = 0;
  protected discount: number = 0;
  private subtotal: number = 0;
  protected hoveredRowIndex: number = -1;

  protected selectedImage: string | ArrayBuffer | null = null;

  protected showAddMoreRows: boolean = false;
  protected showRemoveRowButton: boolean = false;
  protected showColorPicker: boolean = false;
  protected showConfig: boolean = false;
  protected downloadMode: boolean = false;
  protected invalidForm: boolean = false;
  private total: number = 0;

  @ViewChild('template', {static: false}) template!: ElementRef;

  constructor(private fb: FormBuilder) {
    this.infoForm = this.fb.group({
      company: ['', Validators.required],
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
    });
  }

  /**
   * Handle the file drop event
   * @param event
   */
  onFileDropped(event: DragEvent) {
    event.preventDefault();
    const files = event.dataTransfer?.files;
    this.renderImage(files)
  }

  /**
   * Handle the drag over event
   * @param event
   */
  public onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  /**
   * Handle the file selected event
   * @param event
   */
  public onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const files = input.files;
    this.renderImage(files)
  }

  /**
   * Render the image selected
   * @param files
   */
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

  /**
   * Add more rows to the invoice
   */
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

  /**
   * Remove a row from the invoice
   * @param index
   */
  public removeRow(index: number) {
    this.itemsList.splice(index, 1);
  }

  /**
   * Show the remove row button
   */
  showRemoveRow(index: number) {
    this.hoveredRowIndex = index;
    // this.showRemoveRowButton = true;
    this.showAddMoreRowsButton();
  }

  /**
   * Hide the remove row button
   */
  showAddMoreRowsButton() {
    this.showAddMoreRows = true;
  }

  /**
   * Hide the remove row button
   */
  hiddAddmoreRows() {
    this.showAddMoreRows = false;
  }

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
    this.total = total - discount;
    return total - discount;
  }

  public getAllErrors(): string[] {
    const errors: string[] = [];
    Object.keys(this.infoForm.controls).forEach(controlName => {
      const controlError = this.getControlErrors(controlName);
      errors.push(...controlError);
    });
    return errors;
  }

  getControlErrors(controlName: string): string[] {
    const control = this.infoForm.get(controlName);
    if (!control) return [];

    const errors: string[] = [];

    if (control.errors) {
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
    }

    return errors;
  }


  /**
   * Reset the form to its initial state
   */
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
    this.selectedImage = null;
    this.file = null;
  }

  /**
   * Change the color of the invoice
   * @param $event
   * @protected
   */
  protected changeComplete($event: any) {
    this.colorSelected = $event.color.hex;
  }

  /**
   * Toggle the color picker
   */
  protected toggleColorPicker() {
    this.showColorPicker = !this.showColorPicker;
  }

  /**
   * Toggle the configuration
   */
  showDownloadMode() {
    if (this.infoForm.valid) {
      this.downloadMode = true
    } else {
      this.invalidForm = true;
      setTimeout(() => {
        this.invalidForm = false;
      }, 4000);
    }
  }

  /**
   * Toggle the configuration
   */
  generatePDF() {
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(this.template.nativeElement, {
      callback: (pdf) => {
        pdf.save('invoice.pdf');
      },
      x: 10,
      y: 10,
      width: 2000
    })
  }

}
