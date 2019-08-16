import { Component, OnInit, ViewChild } from "@angular/core";
import { DataService } from "./../../../shared/services/data.service";
import { Subscription } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { MovieComponent } from './movie/movie.component';
import { JsonpClientBackend } from '@angular/common/http';
declare var $: any;

@Component({
  selector: "app-list-movie",
  templateUrl: "./list-movie.component.html",
  styleUrls: ["./list-movie.component.scss"]
})
export class ListMovieComponent implements OnInit {
  @ViewChild(MovieComponent, { static: false }) btnTime: MovieComponent;
  subListMovie: Subscription;
  maPhim: any;
  phimDetail: any;
  cumRap: any;
  thongTinSuatChieuTheoRap: any = [];
  date: any = [];
  DateSelect: string;
  lichChieuTheoMaRap: any;
  flagCheck: boolean = false;
  mangDanhGia: Array<number> = [];
  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getParamsUrl();
    this.getDetailMovie();
  }
  // ngDoCheck() {
  //   $($('.nav-link')[0]).click();
  // }
  getParamsUrl() {
    this.maPhim = this.activatedRoute.snapshot.paramMap.get("malichchieu");
  }

  getDetailMovie() {
    const uri = `QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${this.maPhim}`;
    this.dataService.get(uri).subscribe((data: any) => {
      this.phimDetail = data;
      // console.log(this.phimDetail);
      this.LayThongTinCumRap();
      let star = 0;
      while (star < this.phimDetail.danhGia) {
        star++;
        this.mangDanhGia.push(star);
      }
      // console.log(this.mangDanhGia)
    });

  }

  LayThongTinCumRap() {
    const uri = "QuanLyRap/LayThongTinHeThongRap";
    this.dataService.get(uri).subscribe((data: any) => {
      this.cumRap = data;
    });
  }
  laymaRap(_maRap) {
    this.lichChieuTheoMaRap = null;
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
    if (this.date.length != 0) {
      this.flagCheck = true;
      setTimeout(() => this.AfterTheaterSelected(), 1);
    }
    // console.log(this.lichChieuTheoMaRap)

  }

  AfterTheaterSelected() {
    if (this.flagCheck) {
      // console.log("asd")
      
      $($(".btnLich")[0]).click();
      this.flagCheck = false;
    }
  }
  LayLichChieuTheoNgay(dayOfWeek, sttBtn) {
    this.DateSelect = dayOfWeek;
    $(".btnLich").map(index => {
      if (index === sttBtn) {
        $($(".btnLich")[sttBtn]).addClass("active")
      } else {
        $($(".btnLich")[index]).removeClass("active")

      }
    })
    // console.log(this.DateSelect);
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
