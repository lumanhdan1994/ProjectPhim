import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-dat-ve-thanh-cong',
  templateUrl: './dat-ve-thanh-cong.component.html',
  styleUrls: ['./dat-ve-thanh-cong.component.scss']
})
export class DatVeThanhCongComponent implements OnInit {

  inforTicket: any = {};
  thongTinSuatChieu: any = {};
  maPhim: any;
  thongTinPhim: any = {};

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.inforTicket = params;
    });
    this.layThongTinSuatChieu();
    
  }

  layThongTinSuatChieu() {
    const uri = `QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${this.inforTicket.maLichChieu}`;
    this.dataService.get(uri).subscribe((data: any) => {
      this.thongTinSuatChieu = data;
      this.layThongTinChiTietPhim();
    })
  }

  layThongTinChiTietPhim() {
    const uri = "QuanLyPhim/LayDanhSachPhim?maNhom=GP08";
    this.dataService.get(uri).subscribe((data: any) => {
      data.map(item => {
        if (item.tenPhim === this.thongTinSuatChieu.tenPhim) {
          this.maPhim = item.maPhim;
        }
      })
      const uri = `QuanLyPhim/LayThongTinPhim?MaPhim=${this.maPhim}`;
      this.dataService.get(uri).subscribe((data: any) => {
        this.thongTinPhim = data;
      });
    });
  }


}
