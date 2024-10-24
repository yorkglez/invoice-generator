import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceHeadComponent } from './invoice-head.component';

describe('InvoiceHeadComponent', () => {
  let component: InvoiceHeadComponent;
  let fixture: ComponentFixture<InvoiceHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceHeadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
