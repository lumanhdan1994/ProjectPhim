import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  mangMaLoaiNguoiDung: [];
  clickSubmit: boolean = false;

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
    this.clickSubmit = true;
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
      
      if(data === "Email đã tồn tại!"){
        alert(data);
      }else if(data === "Tài khoản đã tồn tại!") {
        alert(data);
      }else{
        alert("Đăng kí thàng công!");
      }
    })
  }

  dangNhap(taikhoan){
    console.log(taikhoan);
    const uri = `QuanLyNguoiDung/DangNhap`;
    const taikhoanuser ={
      taiKhoan: taikhoan.taiKhoan ,
      matKhau: taikhoan.matKhau,
    }
    
    this.dataService.post(uri, taikhoanuser).subscribe((data: any) => {
      
      console.log(data);
      
    })
  }

}
