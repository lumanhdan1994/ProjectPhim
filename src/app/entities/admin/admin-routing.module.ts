import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { QuanLyUserComponent } from './quan-ly-user/quan-ly-user.component';
import { AuthGuard } from 'src/app/common/guards/auth.guard';

const routes: Routes = [
  {
    path: "",
    component: AdminComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
