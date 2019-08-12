import { Component, OnInit, ViewChild, EventEmitter } from "@angular/core";
import { DataService } from "./../../../shared/services/data.service";
import { Subscription } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { MovieComponent } from './movie/movie.component';
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
  lichChieuTheoMaRap: any = new EventEmitter;


  btnDateSelect: boolean = false;
  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getParamsUrl();
    this.getDetailMovie();
  }

  getParamsUrl() {
    this.maPhim = this.activatedRoute.snapshot.paramMap.get("malichchieu");
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
    // console.log(this.lichChieuTheoMaRap)
    
  }
  LayLichChieuTheoNgay(dayOfWeek) {
    this.DateSelect = dayOfWeek;
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
