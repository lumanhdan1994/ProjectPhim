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
  thongTinSuatChieuTheoRap: any = [];
  date: any = [];
  DateSelect: string;
  lichChieuTheoMaRap: any;


  btnDateSelect: boolean = false;
  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getParamsUrl();
    this.getDetailMovie();
    // this.LayThongTinCumRap();
  }

  getParamsUrl() {
    this.maPhim = this.activatedRoute.snapshot.paramMap.get("malichchieu");
    // console.log(this.maPhim);
  }

  getDetailMovie() {
    const uri = `QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${this.maPhim}`;
    this.dataService.get(uri).subscribe((data: any) => {
      this.phimDetail = data;
      console.log(this.phimDetail);
      this.LayThongTinCumRap();
    });
  }

  LayThongTinCumRap() {
    const uri = "QuanLyRap/LayThongTinHeThongRap";
    this.dataService.get(uri).subscribe((data: any) => {
      this.cumRap = data;
      // console.log(this.cumRap)
    });
  }
  laymaRap(_maRap) {
    this.lichChieuTheoMaRap = "";

    this.phimDetail.heThongRapChieu.map(item => {
      if (item.maHeThongRap === _maRap) {
        this.lichChieuTheoMaRap = item;
      }
    })
    let _date: Array<string> = [];
    if (this.lichChieuTheoMaRap) {
      this.lichChieuTheoMaRap.cumRapChieu.map(item => {
        item.lichChieuPhim.map(itemLichChieu => {
          _date.push(itemLichChieu.ngayChieuGioChieu.slice(0, 10));
        })
      })
    }

    let _dateDeduplicate: Array<string> = [];
    _date.map(item => {
      if (!(_dateDeduplicate.indexOf(item) > -1)) {
        _dateDeduplicate.push(item);
      }
    })
    this.date = _dateDeduplicate;
  }
  LayLichChieuTheoNgay(dayOfWeek) {
    this.DateSelect = dayOfWeek;
    // console.log(this.DateSelect);
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
