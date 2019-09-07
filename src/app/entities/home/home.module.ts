import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { HeaderComponent } from "src/app/layouts/header/header.component";
import { FooterComponent } from "src/app/layouts/footer/footer.component";
import { ListMovieModule } from './list-movie/list-movie.module';
import { DatVeThanhCongModule } from './dat-ve-thanh-cong/dat-ve-thanh-cong.module';
import { ShareModulesModule } from 'src/app/shared/share-modules/share-modules.module';
import { DemoMaterialModule } from 'src/app/shared/material/material.module';
import { SideHeaderComponent } from 'src/app/layouts/header/side-header/side-header.component';


@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent, SideHeaderComponent],
  imports: [CommonModule, HomeRoutingModule, ListMovieModule, DatVeThanhCongModule, ShareModulesModule, DemoMaterialModule]
})
export class HomeModule { }
