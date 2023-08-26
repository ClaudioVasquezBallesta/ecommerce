import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorCurratedProductsComponent } from './visitor-currated-products.component';

describe('VisitorCurratedProductsComponent', () => {
  let component: VisitorCurratedProductsComponent;
  let fixture: ComponentFixture<VisitorCurratedProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisitorCurratedProductsComponent]
    });
    fixture = TestBed.createComponent(VisitorCurratedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
