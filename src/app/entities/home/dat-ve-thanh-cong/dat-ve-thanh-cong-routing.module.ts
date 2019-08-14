import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DatVeThanhCongComponent } from './dat-ve-thanh-cong.component';

const routes: Routes = [
  {
    path: "",
    component: DatVeThanhCongComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatVeThanhCongRoutingModule { }
