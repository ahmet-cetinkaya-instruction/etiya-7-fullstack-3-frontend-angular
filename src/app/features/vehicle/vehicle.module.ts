import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandListGroupComponent } from './components/brand-list-group/brand-list-group.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrandFormComponent } from './components/brand-form/brand-form.component';

@NgModule({
  declarations: [BrandListGroupComponent, BrandFormComponent],
  exports: [BrandListGroupComponent, BrandFormComponent],
  imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
})
export class VehicleModule {}
