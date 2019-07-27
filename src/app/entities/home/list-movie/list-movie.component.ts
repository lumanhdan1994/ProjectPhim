import { Component, OnInit } from "@angular/core";
import { DataService } from "./../../../shared/services/data.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-list-movie",
  templateUrl: "./list-movie.component.html",
  styleUrls: ["./list-movie.component.scss"]
})
export class ListMovieComponent implements OnInit {
  subListMovie: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getListMovie();
  }

  getListMovie() {
    const uri = "QuanLyPhim/LayDanhSachPhim?maNhom=GP01";
    this.subListMovie = this.dataService.get(uri).subscribe((data: any) => {
      console.log(data);
    });
  }

  ngOnDestroy() {
    this.subListMovie.unsubscribe();
    console.log("ngOnDestroy");
  }
}
