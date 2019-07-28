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
  danhSachPhim: any =[];


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.layThongTinCumRap();
    const uri = `QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=BHDStar`
    this.dataService.get(uri).subscribe((data) => {
      this.thongTinCumRapTheoHeThong = data;
    })
  }

  layThongTinCumRap(){
    const uri = "QuanLyRap/LayThongTinHeThongRap"
    this.dataService.get(uri).subscribe((data) => {
      this.cumrap = data;
    })
  }  

  layThongTinCumRapTheoHeThong(maHeThongRap){
    const uri = `QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
    this.dataService.get(uri).subscribe((data) => {
      this.thongTinCumRapTheoHeThong = data;
    })
  }

  layDanhSachPhim() {
    const uri = "QuanLyPhim/LayDanhSachPhim?maNhom=GP08";
    this.dataService.get(uri).subscribe((data: any) => {     
      this.danhSachPhim = data;
    });
  }

}
