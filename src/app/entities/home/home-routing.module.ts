import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      //Trang chủ
      {
        path: "trangchu",
        loadChildren: "./trang-chu/trang-chu.module#TrangChuModule"
      },

      { path: "", redirectTo: "trangchu", pathMatch: 'full' },


      //List Movie
      {
        path: "list-movie/:malichchieu",
        loadChildren: "./list-movie/list-movie.module#ListMovieModule"
      },

       //Trang đặt vé thành công
      {
        path: "datvethanhcong",
        loadChildren: "./dat-ve-thanh-cong/dat-ve-thanh-cong.module#DatVeThanhCongModule"
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
