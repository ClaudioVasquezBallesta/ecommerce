import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorAboutUsComponent } from './visitor-about-us.component';

describe('VisitorAboutUsComponent', () => {
  let component: VisitorAboutUsComponent;
  let fixture: ComponentFixture<VisitorAboutUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisitorAboutUsComponent]
    });
    fixture = TestBed.createComponent(VisitorAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
