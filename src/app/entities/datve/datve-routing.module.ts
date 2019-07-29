import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DatveComponent } from './datve.component';

const routes: Routes = [
    { path: "", component: DatveComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatveRoutingModule { }
