import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { ManagmentLayoutComponent as ManagementLayoutComponent } from './shared/layouts/management-layout/management-layout.component';
import { BrandFormPageComponent } from './pages/brand-form-page/brand-form-page.component';

const routes: Routes = [
  // 1. kademede route'lar için ilk karşılacağı router-outlet'in altına path'lara karşılık gelen componenti yerleştirir.
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      // 2. kademede route'lar için ikinci karşılacağı -MainLayoutComponent içindeki templatelere ve componentlere göre-
      // router-outlet'in altına path'lara karşılık gelen componenti yerleştirir.
      {
        path: '',
        pathMatch: 'full',
        // Angular'ın eski sürümlerinde boş bir path vermek her sayfada HomePageComponent'in açılmasına sebep olabilir.
        // Çünkü path eşleme yöntemi olan "pathMatch", varsayılan değeri "prefix" olarak gelir.
        component: HomePageComponent,
      },
      {
        path: 'home',
        redirectTo: '',
      },
      {
        path: 'about',
        component: AboutPageComponent,
      },
      {
        path: 'contact',
        component: ContactPageComponent,
      },
    ],
  },
  {
    path: 'management',
    component: ManagementLayoutComponent,
    children: [
      {
        path: 'brands/add',
        component: BrandFormPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
