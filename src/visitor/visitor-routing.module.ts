import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitorLandingComponent } from './pages/visitor-landing/visitor-landing.component';

const routes: Routes = [
  {
    path: '',
    component: VisitorLandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule { }
