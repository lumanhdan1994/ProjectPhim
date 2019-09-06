import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TrangChuComponent } from "./trang-chu.component";
import { TrangChuRoutingModule } from "./trang-chu-routing.module";
import { CarouselComponent } from './carousel/carousel.component';
import { PhimDangChieuComponent, SafePipe } from './phim-dang-chieu/phim-dang-chieu.component';
import { ItemPhimComponent } from './phim-dang-chieu/item-phim/item-phim.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CumrapComponent } from './cumrap/cumrap.component';
import { AppComponent } from './app/app.component';
import { ReviewComponent } from './review/review.component';


@NgModule({
  declarations: [TrangChuComponent, CarouselComponent, PhimDangChieuComponent,
     ItemPhimComponent, CumrapComponent, AppComponent, ReviewComponent, SafePipe],
  // exports: [TrangChuComponent, CarouselComponent, PhimDangChieuComponent, ItemPhimComponent],

  imports: [CommonModule, TrangChuRoutingModule, SlickCarouselModule]
})
export class TrangChuModule { }
