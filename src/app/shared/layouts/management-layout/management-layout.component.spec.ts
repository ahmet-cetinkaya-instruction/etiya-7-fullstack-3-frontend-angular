import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagmentLayoutComponent } from './management-layout.component';

describe('ManagmentLayoutComponent', () => {
  let component: ManagmentLayoutComponent;
  let fixture: ComponentFixture<ManagmentLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagmentLayoutComponent]
    });
    fixture = TestBed.createComponent(ManagmentLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
