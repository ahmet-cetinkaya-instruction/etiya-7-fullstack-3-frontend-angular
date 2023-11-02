import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandListGroupComponent } from './components/brand-list-group/brand-list-group.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BrandListGroupComponent],
  exports: [BrandListGroupComponent],
  imports: [CommonModule, HttpClientModule, FormsModule],
})
export class VehicleModule {}
