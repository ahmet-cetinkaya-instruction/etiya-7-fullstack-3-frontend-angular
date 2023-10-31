import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  exports: [NavbarComponent, FooterComponent], // Angular bileşenlerini SharedModule dışında kullanmak için export etmemiz gerekiyor.
  imports: [CommonModule],
})
export class SharedModule {}
