// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-movie',
//   templateUrl: './movie.component.html',
//   styleUrls: ['./movie.component.scss']
// })
// export class MovieComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit, Input } from '@angular/core';
import { ListMovieComponent } from '../list-movie.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() LichChieu;
  phimDetail:any;

  constructor(private listMovieComponent: ListMovieComponent,) { }

  ngOnInit() {
    this.phimDetail = this.listMovieComponent.phimDetail;
  }

}
