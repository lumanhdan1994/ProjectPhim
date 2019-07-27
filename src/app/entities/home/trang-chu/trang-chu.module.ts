import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TrangChuComponent } from "./trang-chu.component";
import { TrangChuRoutingModule } from "./trang-chu-routing.module";

@NgModule({
  declarations: [TrangChuComponent],
  imports: [CommonModule, TrangChuRoutingModule]
})
export class TrangChuModule {}
