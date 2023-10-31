import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandListGroupComponent } from './components/brand-list-group/brand-list-group.component';

@NgModule({
  declarations: [BrandListGroupComponent],
  exports: [BrandListGroupComponent],
  imports: [CommonModule],
})
export class VehicleModule {}
