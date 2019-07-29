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
        path: "",
        loadChildren: "./trang-chu/trang-chu.module#TrangChuModule"
      },

      //List Movie
      {
        path: "list-movie/:malichchieu",
        loadChildren: "./list-movie/list-movie.module#ListMovieModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
