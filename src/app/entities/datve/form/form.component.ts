import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { ToastrService } from 'ngx-toastr';
// import { $ } from 'protractor';
declare var $: any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  mangMaLoaiNguoiDung: [];
  checkDangNhap: boolean = true;
  accessToken: "";
  @Output() eventDangNhap = new EventEmitter();

  constructor(private dataService: DataService, private toastr: ToastrService) { }

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
    if (value.maLoaiNguoiDung === "Khách hàng") {
      value.maLoaiNguoiDung = "KhachHang";
    } else {
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

      if (data === "Email đã tồn tại!") {
        this.toastr.error(data);
      } else if (data === "Tài khoản đã tồn tại!") {
        this.toastr.error(data);
      } else {
        this.toastr.success("Đăng kí thàng công!");
        $(document).ready(() => {
          $("#tab-dangnhap").click();
        });
      };
    }, (err) => {
      if (err.status === 200) {
        alert(err.error.text);
      } else {
        alert(err.error);
      }
    })
  }

  dangNhap(value) {
    const uri = `QuanLyNguoiDung/DangNhap`;
    const taikhoanuser = {
      taiKhoan: value.taiKhoan,
      matKhau: value.matKhau,
    }

    this.dataService.post(uri, taikhoanuser).subscribe((data: any) => {
      console.log(data);
      this.checkDangNhap = false;
      const form = {
        checkLogIn: this.checkDangNhap,
        inforUser: data,
      }
      this.eventDangNhap.emit(form);
      localStorage.setItem("taiKhoanDaDangNhap", JSON.stringify(form));
    }, (err) => {
      if (err.status === 200) {
        alert(err.error.text);
      } else {
        alert(err.error);
      }
    })
  }

  toLogIn() {
    $("#tab-dangki").click();
  }
}
