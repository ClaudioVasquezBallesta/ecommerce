import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from './modules/material.module';

const components = [
  BannerComponent,
  ProductCardComponent,
  FooterComponent,
  NavbarComponent
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [...components]
})
export class SharedModule { }
