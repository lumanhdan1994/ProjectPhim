import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate() {
    let taiKhoanDaDangNhap = JSON.parse(localStorage.getItem("taiKhoanDaDangNhap"));
    if (taiKhoanDaDangNhap) {
      console.log(taiKhoanDaDangNhap)
      if (taiKhoanDaDangNhap.inforUser.maLoaiNguoiDung === "QuanTri") {
        return true;
      }
    }
    this.router.navigate([""])
    return false;
  }
}
