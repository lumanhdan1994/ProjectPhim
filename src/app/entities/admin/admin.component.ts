import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  UserSeleted: boolean = false;
  MovieSeleted: boolean = false;
  InfoLogin: any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.getInfoLogin();
  }
  getInfoLogin() {
    this.InfoLogin = JSON.parse(localStorage.getItem("taiKhoanDaDangNhap"));
    console.log(this.InfoLogin)
  }
  GetDSPhim() {
    this.UserSeleted = false;
    this.MovieSeleted = true;
  }
  GetDSUser() {
    this.MovieSeleted = false;
    this.UserSeleted = true;
  }
  LogOut() {
    localStorage.clear();
    this.router.navigate([""])
  }
}
