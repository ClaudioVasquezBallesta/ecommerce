import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorLandingComponent } from './visitor-landing.component';

describe('VisitorLandingComponent', () => {
  let component: VisitorLandingComponent;
  let fixture: ComponentFixture<VisitorLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisitorLandingComponent]
    });
    fixture = TestBed.createComponent(VisitorLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
