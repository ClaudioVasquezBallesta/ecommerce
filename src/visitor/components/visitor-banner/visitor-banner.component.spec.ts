import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorBannerComponent } from './visitor-banner.component';

describe('VisitorBannerComponent', () => {
  let component: VisitorBannerComponent;
  let fixture: ComponentFixture<VisitorBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisitorBannerComponent]
    });
    fixture = TestBed.createComponent(VisitorBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
