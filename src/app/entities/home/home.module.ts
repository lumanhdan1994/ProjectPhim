import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { HeaderComponent } from "src/app/layouts/header/header.component";
import { FooterComponent } from "src/app/layouts/footer/footer.component";
import { ListMovieModule } from './list-movie/list-movie.module';
import { DatVeThanhCongModule } from './dat-ve-thanh-cong/dat-ve-thanh-cong.module';


@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, HomeRoutingModule, ListMovieModule, DatVeThanhCongModule]
})
export class HomeModule { }
