import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  mangMaLoaiNguoiDung: [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.layMaLoaiNguoiDung();
  }

  layMaLoaiNguoiDung() {
    const uri = "QuanLyNguoiDung/LayDanhSachLoaiNguoiDung";
    this.dataService.get(uri).subscribe((data: any) => {
      this.mangMaLoaiNguoiDung = data;
    })
  }

  dangKy(value) {
    if(value.maLoaiNguoiDung === "Khách hàng"){
      value.maLoaiNguoiDung = "KhachHang";
    }else{
      value.maLoaiNguoiDung = "QuanTri";
    }
    const nguoiDung = {
      taiKhoan: value.taiKhoan,
      matKhau: value.matKhau,
      email: value.email,
      soDt: value.soDT,
      maNhom: "GP09",
      maLoaiNguoiDung: value.maLoaiNguoiDung,
      hoTen: value.hoTen,
    }
    const uri = `QuanLyNguoiDung/DangKy`;


    this.dataService.post(uri, nguoiDung).subscribe((data: any) => {
      
      console.log(data);
      if(data === "Email đã tồn tại!"){
        alert(data);
      }else if(data === "Tài khoản đã tồn tại!") {
        alert(data);
      }else{
        alert("Đăng kí thàng công!");
      }
    })
  }

}
