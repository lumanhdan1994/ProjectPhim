import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  LogInLst: any;
  constructor() { }

  ngOnInit() {
    this.eventScroll();
    this.ngDoCheck();
  }
  ngAfterViewInit() {
    this.checkLogIn();
  }
  checkLogIn() {
    this.LogInLst = JSON.parse(localStorage.getItem("taiKhoanDaDangNhap"));
  }
  LogOut(){
    localStorage.clear();
  }
  checkDangNhap(value) {
    $("#myModal").click();
  }
  ngDoCheck() {
    this.checkLogIn()
    if (this.LogInLst != null) {
    }
  }
  eventScroll() {
    $(document).ready(() => {
      window.addEventListener('scroll', () => {
        let top = window.pageYOffset;
        if (top !== 0 && top > 33) {
          $("#NavBar").css({
            "opacity": "0.7",
            "position": "fixed",
            "transition": "all 0.3s",
          });
          
          $("#NavBar").mouseenter(()=>{
            $("#NavBar").css({
              "opacity": "1",
              "transition": "all 0.3s"
            });
          });
          $("#NavBar").mouseleave(()=>{
            $("#NavBar").css({
              "opacity": "0.7",
              "transition": "all 0.3s"
            });
          });
        } else {
          $("#NavBar").css({
            "opacity": "1",
            "position": "sticky",
            "transition": "all 0.3s",
          });
        }
      })
    })
  }

}
