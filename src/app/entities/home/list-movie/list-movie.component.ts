import { Component, OnInit } from "@angular/core";
import { DataService } from "./../../../shared/services/data.service";
import { Subscription } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
declare var $: any;

@Component({
  selector: "app-list-movie",
  templateUrl: "./list-movie.component.html",
  styleUrls: ["./list-movie.component.scss"]
})
export class ListMovieComponent implements OnInit {
  subListMovie: Subscription;
  maPhim: any;
  phimDetail: any;
  cumRap: any;
  thongTinXuatChieu: any = [];
  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit() {
    this.getParamsUrl();
    this.getDetailMovie();
    this.LayThongTinCumRap();
    // console.log(this.lichChieu);
  }

  getParamsUrl() {
    this.maPhim = this.activatedRoute.snapshot.paramMap.get("malichchieu");
    // console.log(this.maPhim);
  }

  getDetailMovie() {
    const uri = `QuanLyPhim/LayThongTinPhim?MaPhim=${this.maPhim}`;
    this.dataService.get(uri).subscribe((data: any) => {
      this.phimDetail = data;
      // console.log(this.phimDetail);
    });
  }

  LayThongTinCumRap() {
    const uri = "QuanLyRap/LayThongTinHeThongRap";
    this.dataService.get(uri).subscribe((data: any) => {
      this.cumRap = data;
      console.log(this.cumRap);
    });
  }

  laymaRap(_maRap) {
    console.log(_maRap);
    let _thongTinXuatChieu: Array<any> = [];
    // console.log(this.phimDetail.lichChieu);
    this.phimDetail.lichChieu.map(item => {
      // console.log(item);
      if (_maRap === item.thongTinRap.maHeThongRap) {
        _thongTinXuatChieu.push(item);
      } else {
        console.log("Khong co xuat chieu");
      }
    });
    this.thongTinXuatChieu = _thongTinXuatChieu;
    console.log(this.thongTinXuatChieu);
  }
  GuiMaLichChieu(_maLichChieu) {
    this.router.navigate(["/datve", _maLichChieu]);
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
