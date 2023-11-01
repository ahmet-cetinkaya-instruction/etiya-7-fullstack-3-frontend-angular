import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ManagmentLayoutComponent } from './layouts/management-layout/management-layout.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, MainLayoutComponent, ManagmentLayoutComponent],
  exports: [NavbarComponent, FooterComponent, MainLayoutComponent], // Angular bileşenlerini SharedModule dışında kullanmak için export etmemiz gerekiyor.
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
