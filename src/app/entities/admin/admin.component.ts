import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/shared/services/store.service';
declare var $: any;


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  UserSeleted: boolean = false;
  MovieSeleted: boolean = false;
  InfoLogin: any;
  constructor(private router: Router,
  private store: StoreService) { }

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
    $($(".nav-link")[1]).addClass("active");
    $($(".nav-link")[2]).removeClass("active")
    this.store.shareTabSelected(this.MovieSeleted);
  }
  GetDSUser() {
    this.MovieSeleted = false;
    this.UserSeleted = true;
    $($(".nav-link")[2]).addClass("active")
    $($(".nav-link")[1]).removeClass("active")
    this.store.shareTabSelected(this.MovieSeleted);

  }
  LogOut() {
    localStorage.clear();
    this.router.navigate([""])
  }
}
