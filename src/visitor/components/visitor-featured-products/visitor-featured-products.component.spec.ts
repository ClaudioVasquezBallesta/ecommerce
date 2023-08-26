import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorFeaturedProductsComponent } from './visitor-featured-products.component';

describe('VisitorFeaturedProductsComponent', () => {
  let component: VisitorFeaturedProductsComponent;
  let fixture: ComponentFixture<VisitorFeaturedProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisitorFeaturedProductsComponent]
    });
    fixture = TestBed.createComponent(VisitorFeaturedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
