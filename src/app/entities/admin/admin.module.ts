import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { DemoMaterialModule } from 'src/app/shared/material/material.module';
import { AdminSidebarComponent } from 'src/app/layouts/admin-sidebar/admin-sidebar.component';
import { QuanLyUserComponent } from './quan-ly-user/quan-ly-user.component';
import { QuanLyPhimComponent } from './quan-ly-phim/quan-ly-phim.component';

@NgModule({
  declarations: [AdminComponent, AdminSidebarComponent, QuanLyUserComponent, QuanLyPhimComponent],
  imports: [CommonModule, AdminRoutingModule, DemoMaterialModule]
})
export class AdminModule {}
