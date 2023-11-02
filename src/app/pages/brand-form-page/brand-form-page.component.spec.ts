import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandFormPageComponent } from './brand-form-page.component';

describe('BrandFormPageComponent', () => {
  let component: BrandFormPageComponent;
  let fixture: ComponentFixture<BrandFormPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandFormPageComponent]
    });
    fixture = TestBed.createComponent(BrandFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
