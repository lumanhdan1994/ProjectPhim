import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListMovieComponent } from "./list-movie.component";

const routes: Routes = [
  {
    path: "",
    component: ListMovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListMovieRoutingModule {}
