import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { VehicleModule } from './features/vehicle/vehicle.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { BrandFormPageComponent } from './pages/brand-form-page/brand-form-page.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent, AboutPageComponent, ContactPageComponent, BrandFormPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    VehicleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
