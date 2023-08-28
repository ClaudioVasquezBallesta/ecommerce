import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorRoutingModule } from './visitor-routing.module';
import { VisitorFeaturedProductsComponent } from './components/visitor-featured-products/visitor-featured-products.component';
import { VisitorAboutUsComponent } from './components/visitor-about-us/visitor-about-us.component';
import { VisitorBrandsComponent } from './components/visitor-brands/visitor-brands.component';
import { VisitorCurratedProductsComponent } from './components/visitor-currated-products/visitor-currated-products.component';
import { SharedModule } from 'src/shared/shared.module';
import { VisitorLandingComponent } from './pages/visitor-landing/visitor-landing.component';
import { VisitorBannerComponent } from './components/visitor-banner/visitor-banner.component';
import { MaterialModule } from 'src/shared/modules/material.module';


const components = [
  VisitorFeaturedProductsComponent,
  VisitorAboutUsComponent,
  VisitorBrandsComponent,
  VisitorCurratedProductsComponent,
  VisitorBannerComponent
];

@NgModule({
  declarations: [...components, VisitorLandingComponent],
  imports: [CommonModule, VisitorRoutingModule, SharedModule, MaterialModule],
})
export class VisitorModule {}
