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
  areas = [
    { value: "Chọn Khu Vực" },
    { value: 'Hồ Chí Minh' },
    { value: 'Hà Nội' },
    { value: 'Đà Nẵng' },
    { value: 'Hải Phòng' },
    { value: 'Bà Rịa Vũng Tàu' },
    { value: 'Cần Thơ' },
  ]
  
  ngOnInit() {
    this.eventScroll();
    this.ngDoCheck();
    $('.mat-option').attr('disabled')
    // console.log(this.areas)
  }
  ngAfterViewInit() {
    this.checkLogIn();
    $(document).ready(() => {
      //Open side bar
      $('#show-menu').click(function () {
        $('#Sidebar').css('width', '100%');
        $('.side-menu').css('right', '0%');
        $('.sidebar-bg').css('right', '70%');
        $('.side-menu').css('transition', 'all 0.3s');
        $('.sidebar-bg').css('transition', 'all 0.2s 0.1s');
      })
      // Close side bar
      $('.sidebar-bg').click(function () {
        $('#Sidebar').css('width', '0%');
        $('.side-menu').css('right', '-70%');
        $('.sidebar-bg').css('right', '0%');
        $('#Sidebar').css('transition', 'all 0.2s');
        $('.side-menu').css('transition', 'all 0.2s 0.05s');
        $('.sidebar-bg').css('transition', 'all 0.2s');
      })
    })
  }
  checkLogIn() {
    this.LogInLst = JSON.parse(localStorage.getItem("taiKhoanDaDangNhap"));
  }
  LogOut() {
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

          $("#NavBar").mouseenter(() => {
            $("#NavBar").css({
              "opacity": "1",
              "transition": "all 0.3s"
            });
          });
          $("#NavBar").mouseleave(() => {
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
