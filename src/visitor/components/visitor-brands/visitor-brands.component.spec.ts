import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorBrandsComponent } from './visitor-brands.component';

describe('VisitorBrandsComponent', () => {
  let component: VisitorBrandsComponent;
  let fixture: ComponentFixture<VisitorBrandsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisitorBrandsComponent]
    });
    fixture = TestBed.createComponent(VisitorBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
