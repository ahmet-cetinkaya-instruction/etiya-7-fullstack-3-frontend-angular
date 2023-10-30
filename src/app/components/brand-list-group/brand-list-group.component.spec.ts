import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandListGroupComponent } from './brand-list-group.component';

describe('BrandListGroupComponent', () => {
  let component: BrandListGroupComponent;
  let fixture: ComponentFixture<BrandListGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandListGroupComponent]
    });
    fixture = TestBed.createComponent(BrandListGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
