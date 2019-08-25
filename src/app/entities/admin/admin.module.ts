import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { DemoMaterialModule } from 'src/app/shared/material/material.module';
import { AdminSidebarComponent } from 'src/app/layouts/admin-sidebar/admin-sidebar.component';
import { QuanLyUserComponent } from './quan-ly-user/quan-ly-user.component';
import { QuanLyPhimComponent } from './quan-ly-phim/quan-ly-phim.component';
import { ModalComponent, BottomSheetOverviewExampleSheet } from './modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [AdminComponent, AdminSidebarComponent, QuanLyUserComponent, QuanLyPhimComponent, ModalComponent, BottomSheetOverviewExampleSheet],
  exports: [QuanLyPhimComponent],
  imports: [CommonModule, AdminRoutingModule, DemoMaterialModule, FormsModule, ReactiveFormsModule, MatInputModule, MatTableModule],
  entryComponents: [ModalComponent, BottomSheetOverviewExampleSheet],
  bootstrap: [ModalComponent],
  providers: []
})
export class AdminModule {}
