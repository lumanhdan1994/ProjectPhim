import { Component, OnInit } from "@angular/core";
import { DataService } from "./../../../shared/services/data.service";
import { Subscription } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { DatePipe } from '@angular/common';
declare var $: any;

@Component({
  selector: "app-list-movie",
  templateUrl: "./list-movie.component.html",
  styleUrls: ["./list-movie.component.scss"]
})
export class ListMovieComponent implements OnInit {
  subListMovie: Subscription;
  maPhim: any;
  maRap: any;
  phimDetail: any;
  cumRap: any;
  thongTinSuatChieu: any = [];
  thongTinSuatChieuTheoRap: any = [];
  date: any = [];
  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private datapipe: DatePipe
  ) { }

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
      // console.log(this.cumRap);
    });
  }

  laymaRap(_maRap) {
   
    let lichChieuTheoMaRap: Array<any>= [];
    this.phimDetail.lichChieu.map(item => {
      if (item.thongTinRap.maHeThongRap === _maRap) {
        lichChieuTheoMaRap.push(item);
      }
    })
    this.thongTinSuatChieu = lichChieuTheoMaRap;
    let _date: Array<string> = [];
    lichChieuTheoMaRap.map(item => {
      _date.push(item.ngayChieuGioChieu.slice(0, 10));
    })
    // console.log(_date);

    let _dateDeduplicate: Array<string> = [];
    _date.map(item => {
      if (!(_dateDeduplicate.indexOf(item) > -1)) {
        _dateDeduplicate.push(item);
      }
    })
    this.date = _dateDeduplicate;
    this.thongTinSuatChieuTheoRap = [];
    // console.log(_dateDeduplicate);
  }

  LayNgayChieu(dayOfWeek) {
    let _thongTinSuatChieuTheoRap: Array<any> = [];
    this.thongTinSuatChieu.map(item => {
      if (item.ngayChieuGioChieu.slice(0, 10) === dayOfWeek) {
        _thongTinSuatChieuTheoRap.push(item);
      }
    })
    this.thongTinSuatChieuTheoRap = _thongTinSuatChieuTheoRap;
    console.log(this.thongTinSuatChieuTheoRap);
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
