import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandListGroupComponent } from './components/brand-list-group/brand-list-group.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrandFormComponent } from './components/brand-form/brand-form.component';
import { BrandsService } from './services/abstracts/brands-service';
import { BrandsMockService } from './services/concretes/brands-mock.service';

@NgModule({
  declarations: [BrandListGroupComponent, BrandFormComponent],
  exports: [BrandListGroupComponent, BrandFormComponent],
  imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [
    {
      provide: BrandsService,
      useClass: BrandsMockService,
    }, // Singleton
  ],
})
export class VehicleModule {}
