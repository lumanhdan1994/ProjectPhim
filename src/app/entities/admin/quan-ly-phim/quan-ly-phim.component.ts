import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-quan-ly-phim',
  templateUrl: './quan-ly-phim.component.html',
  styleUrls: ['./quan-ly-phim.component.scss']
})
export class QuanLyPhimComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  // getMovieList() {
  //   this.dataService.get()
  // }
}
