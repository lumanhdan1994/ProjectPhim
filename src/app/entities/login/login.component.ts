import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.CheckedLogIn();
  }
  CheckedLogIn() {
    let LogInChecked = JSON.parse(localStorage.getItem("taiKhoanDaDangNhap"))
    if (LogInChecked) {
      if (LogInChecked.inforUser.maLoaiNguoiDung === "QuanTri") {
        const form = {
          checkLogIn: false,
          inforUser: LogInChecked.inforUser,
        }
        localStorage.setItem("taiKhoanDaDangNhap", JSON.stringify(form));
        this.router.navigate(["/admin"])
      }
    }
  }
  Login(value: any) {
    const data = {
      taiKhoan: value.id,
      matKhau: value.password
    }
    const uri = `QuanLyNguoiDung/DangNhap`;
    this.dataService.post(uri, data).subscribe((data: any)=>{
      if (data.maLoaiNguoiDung === "QuanTri") {
        const form = {
          checkLogIn: false,
          inforUser: data,
        }
        localStorage.setItem("taiKhoanDaDangNhap", JSON.stringify(form));
        this.router.navigate(["/admin"])
      } else {
        alert("Bạn Không Phải Quản Trị Viên !!");
        const form = {
          checkLogIn: false,
          inforUser: data,
        }
        localStorage.setItem("taiKhoanDaDangNhap", JSON.stringify(form));
        setTimeout(() => {
          this.router.navigate([""])
        }, 30);
      }
    })
  }
}
