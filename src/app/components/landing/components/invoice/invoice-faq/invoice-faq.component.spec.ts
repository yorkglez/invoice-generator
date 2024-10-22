import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceFaqComponent } from './invoice-faq.component';

describe('InvoiceFaqComponent', () => {
  let component: InvoiceFaqComponent;
  let fixture: ComponentFixture<InvoiceFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceFaqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
