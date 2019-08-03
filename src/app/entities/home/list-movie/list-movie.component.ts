import { Component, OnInit } from "@angular/core";
import { DataService } from "./../../../shared/services/data.service";
import { Subscription } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { formatDate, DatePipe } from '@angular/common';
import { format } from 'url';
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
    // console.log(_maRap);
    let _thongTinXuatChieu: Array<any> = [];
    let _date: Array<any> = [];

    let item = this.phimDetail.lichChieu;
    for (let i = 0; i < item.length; i++) {
      if (_maRap === item[i].thongTinRap.maHeThongRap) {
        _thongTinXuatChieu.push(item[i]);
        item[i].ngayChieuGioChieu = this.datapipe.transform(item[i].ngayChieuGioChieu, "dd-MM-yyyy");
        _date.push(item[i].ngayChieuGioChieu);
      }
    }
    let _dateDul: Array<string> = [];
    _date.map(item => {
      if (!(_dateDul.indexOf(item) > -1)) {
        _dateDul.push(item);
      }
      // console.log(_dateDul.indexOf(item) > -1)
    })
    this.thongTinXuatChieu = _thongTinXuatChieu;
    this.date = _dateDul;
    console.log(this.thongTinXuatChieu);
    console.log(this.date);
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
