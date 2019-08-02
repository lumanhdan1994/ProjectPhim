import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListMovieComponent } from "./list-movie.component";
import { ListMovieRoutingModule } from "./list-movie-routing.module";
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [ListMovieComponent, MovieComponent],
  exports: [ListMovieComponent],
  imports: [CommonModule, ListMovieRoutingModule]
})
export class ListMovieModule { }
