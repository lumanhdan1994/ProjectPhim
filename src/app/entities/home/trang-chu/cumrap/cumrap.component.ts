import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-cumrap',
  templateUrl: './cumrap.component.html',
  styleUrls: ['./cumrap.component.scss']
})
export class CumrapComponent implements OnInit {

  cumrap:any = [];
  thongTinCumRapTheoHeThong: any = [];
  thongTinLichChieuHeThongRap: any = [];
  maHeThongRapDuocClick: any;
  maCumRapDuocClick: any = "CGV";


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.layThongTinCumRap();
    const uri = `QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=CGV`
    this.dataService.get(uri).subscribe((data) => {
      this.thongTinCumRapTheoHeThong = data;
    })
    const uri2 = `QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=CGV`;
    this.dataService.get(uri2).subscribe((data: any) => {     
      this.thongTinLichChieuHeThongRap = data[0].lstCumRap;
      console.log(this.thongTinLichChieuHeThongRap);
    });
  }

  layThongTinCumRap(){
    const uri = "QuanLyRap/LayThongTinHeThongRap"
    this.dataService.get(uri).subscribe((data) => {
      this.cumrap = data;
    })
  }  

  layThongTinCumRapTheoHeThong(maHeThongRap){
    this.maHeThongRapDuocClick = maHeThongRap;
    const uri = `QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
    this.dataService.get(uri).subscribe((data) => {
      this.thongTinCumRapTheoHeThong = data;
    })
  }

  LayThongTinLichChieuHeThongRap(maCumRapDuocClick) {
    this.maCumRapDuocClick = maCumRapDuocClick;
    const uriLichChieu = `QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${this.maHeThongRapDuocClick}`;
    this.dataService.get(uriLichChieu).subscribe((data: any) => {     
      this.thongTinLichChieuHeThongRap = data[0].lstCumRap;
      console.log(this.thongTinLichChieuHeThongRap);
    });
  }

}
