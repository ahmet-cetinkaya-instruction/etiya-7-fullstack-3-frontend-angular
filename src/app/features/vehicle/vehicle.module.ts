import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandListGroupComponent } from './components/brand-list-group/brand-list-group.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [BrandListGroupComponent],
  exports: [BrandListGroupComponent],
  imports: [CommonModule, HttpClientModule],
})
export class VehicleModule {}
