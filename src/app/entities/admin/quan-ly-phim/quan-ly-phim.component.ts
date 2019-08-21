import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-quan-ly-phim',
  templateUrl: './quan-ly-phim.component.html',
  styleUrls: ['./quan-ly-phim.component.scss']
})
export class QuanLyPhimComponent implements OnInit {

  ListMovie: any = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getListMovie();
  }

  getListMovie() {
    const uri = "QuanLyPhim/LayDanhSachPhim?maNhom=GP08";
    this.dataService.get(uri).subscribe((data) => {
      console.log(data);
      this.ListMovie = data;
    })
  }
}
