

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
  // maHeThongRapDuocClick: any = "BHDstar";
  hinhAnhMaHeThongRapDuocClick: any = "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png";
  danhSachPhim: any = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.layThongTinCumRap();

    const uri = `QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=BHDstar`
    this.dataService.get(uri).subscribe((data) => {
      this.thongTinCumRapTheoHeThong = data;
    })

    this.layDanhSachPhim();

  }

  layThongTinCumRap(){
    const uri = "QuanLyRap/LayThongTinHeThongRap"
    this.dataService.get(uri).subscribe((data) => {
      this.cumrap = data;
    })
  }  

  layThongTinCumRapTheoHeThong(maHeThongRap){
    // this.maHeThongRapDuocClick = maHeThongRap;
    this.cumrap.map((item) => {
      if(item.maHeThongRap === maHeThongRap){
        this.hinhAnhMaHeThongRapDuocClick = item.logo;
        console.log(item);
      }
    })

    const uri = `QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
    this.dataService.get(uri).subscribe((data) => {
      this.thongTinCumRapTheoHeThong = data;
    })
  }



  layDanhSachPhim() {
    const uri = "QuanLyPhim/LayDanhSachPhim?maNhom=GP08";
    this.dataService.get(uri).subscribe((data: any) => {
     this.danhSachPhim = data;
     this.danhSachPhim.splice(10,8);
    });
  }

}
