import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TrangChuComponent } from "./trang-chu.component";
import { TrangChuRoutingModule } from "./trang-chu-routing.module";
import { CarouselComponent } from './carousel/carousel.component';
import { PhimDangChieuComponent } from './phim-dang-chieu/phim-dang-chieu.component';
import { ItemPhimComponent } from './phim-dang-chieu/item-phim/item-phim.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [TrangChuComponent, CarouselComponent, PhimDangChieuComponent, ItemPhimComponent],
  exports: [TrangChuComponent, CarouselComponent, PhimDangChieuComponent, ItemPhimComponent],

  imports: [CommonModule, TrangChuRoutingModule, SlickCarouselModule]
})
export class TrangChuModule {}
