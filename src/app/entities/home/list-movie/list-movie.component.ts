import { Component, OnInit } from "@angular/core";
import { DataService } from "./../../../shared/services/data.service";
import { Subscription } from "rxjs";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-list-movie",
  templateUrl: "./list-movie.component.html",
  styleUrls: ["./list-movie.component.scss"]
})
export class ListMovieComponent implements OnInit {
  subListMovie: Subscription;
  maPhim: any;
  phimDetail: any;
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getParamsUrl();
    this.getDetailMovie();
  }

  getParamsUrl() {
    this.maPhim = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.maPhim);
  }

  getDetailMovie() {
    const uri = `QuanLyPhim/LayThongTinPhim?MaPhim=${this.maPhim}`;
    this.dataService.get(uri).subscribe((data: any) => {
      this.phimDetail = data;
      console.log(this.phimDetail);
    });
  }





  // getListMovie() {
  //   const uri = "QuanLyPhim/LayDanhSachPhim?maNhom=GP01";
  //   this.subListMovie = this.dataService.get(uri).subscribe((data: any) => {
  //     console.log(data);
  //   });
  // }

  // ngOnDestroy() {
  //   this.subListMovie.unsubscribe();
  //   console.log("ngOnDestroy");
  // }
}
