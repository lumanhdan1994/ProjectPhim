import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { ItemgheComponent } from './itemghe/itemghe.component';
import { ActivatedRoute } from '@angular/router';
import { FormComponent } from './form/form.component';


declare var $: any;

@Component({
  selector: 'app-datve',
  templateUrl: './datve.component.html',
  styleUrls: ['./datve.component.scss']
})
export class DatveComponent implements OnInit {
  @ViewChildren(ItemgheComponent) tagItemGhe: QueryList<ItemgheComponent>;

  maLichChieu: any;
  thongTinPhim: any;
  maPhim: any;
  thongTinSuatChieu: any;
  soLuongVe: number = 0;
  giaVe: number = 0;
  soLuongVeVip: number = 0;
  giaVeVip: number = 0;
  soLuongCombo: number = 0;
  giaCombo: number = 0;
  tongTien: number = 0;
  tenGheDaChon: any;
  styleGheDaChon: boolean = false;
  mangGheDaChon: any = [];
  mangGheVipDaChon: any = [];
  sttAnphabeDuocClick: any;
  mangTenGheDuocClick: any = [];
  navtag1: boolean = true;
  navtag2: boolean = true;
  navtag3: boolean = true;
  anphabe: any = ["A", "B", 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  checkLogIn: boolean = true;
  inforUser: any = {};
  checkThanhToan: boolean = false;
  checkChonGhe: boolean = false;
  checkFormThanhToan: boolean = false;
  checkToThanhToan: boolean = false;
  count: number = 0;
  taiKhoanDaDangNhap: any = {};
  accessToken: "";

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getParamUrl();
    this.layThongTinSuatChieu();
    this.taiKhoanDaDangNhap = JSON.parse(localStorage.getItem("taiKhoanDaDangNhap"));
    if(this.taiKhoanDaDangNhap != null){
      this.checkLogIn = this.taiKhoanDaDangNhap.checkLogIn;  
      this.inforUser = this.taiKhoanDaDangNhap.inforUser;
    }
  }

  minusve() {
    if (this.soLuongVe > 0) {
      this.soLuongVe--;
      this.giaVe = this.soLuongVe * 85000;
      this.tongTien = this.giaVe + this.giaCombo + this.giaVeVip;
    }
    if(this.soLuongVe === 0){
      this.checkChonGhe = false;
    }
  }

  plusve() {
    if (this.tongTien < 800000) {
      this.soLuongVe++;
      this.giaVe = this.soLuongVe * 85000;
      this.tongTien = this.giaVe + this.giaCombo + this.giaVeVip;
    }
    if(this.soLuongVe !== 0){
      this.checkChonGhe = true;
    }
  }

  plusveVip() {
    if (this.tongTien < 800000) {
      this.soLuongVeVip++;
      this.giaVeVip = this.soLuongVeVip * 90000;
      this.tongTien = this.giaVeVip + this.giaCombo + this.giaVe;
    }
    if(this.soLuongVeVip !== 0){
      this.checkChonGhe = true;
    }
  }

  minusveVip() {
    if (this.soLuongVeVip > 0) {
      this.soLuongVeVip--;
      this.giaVeVip = this.soLuongVeVip * 90000;
      this.tongTien = this.giaVeVip + this.giaCombo + this.giaVe;
    }
    if(this.soLuongVeVip === 0){
      this.checkChonGhe = false;
    }
  }

  minuscombo() {
    if (this.soLuongCombo > 0) {
      this.soLuongCombo--;
      this.giaCombo = this.soLuongCombo * 45000;
      this.tongTien = this.giaVeVip + this.giaCombo + this.giaVe;
    }
  }

  pluscombo() {
    if (this.tongTien < 800000) {
      this.soLuongCombo++;
      this.giaCombo = this.soLuongCombo * 45000;
      this.tongTien = this.giaVeVip + this.giaCombo + this.giaVe;
    }
  }

  toChonGhe() {
    if(this.soLuongVe === 0 && this.soLuongVeVip === 0){
      alert("Vui lòng đặt vé!");
    }else{
      $("#navtagChonGhe").click();
    }
  }

  toChonVe() {
    $("#navtagChonVe").click();
  }

  chonGhe($event) {
    if($event.ghe.loaiGhe === "Thuong"){
      if(this.soLuongVe === 0 && this.soLuongVeVip === 0){
        alert("Xin vui lòng chọn vé");
      }else{
        if ($event.trangThaiChon === true) {
          if (this.mangGheDaChon.length < this.soLuongVe) {
            this.mangGheDaChon.push($event);
            this.sttAnphabeDuocClick = Math.floor(($event.ghe.stt) / 12.0001);
            let sttGhe;
            if ($event.ghe.stt % 12 === 0) {
              sttGhe = 12;
            } else {
              sttGhe = $event.ghe.stt % 12;
            }
            let tenGheDuocClick = this.anphabe[this.sttAnphabeDuocClick] + (sttGhe);
            this.mangTenGheDuocClick.push(tenGheDuocClick);
          } else {
            if(this.soLuongVe === 0 ) {
              alert("Bạn không đặt vé thường")
            }else{
              alert(`Hey! bạn chỉ được chọn ${this.soLuongVe} ghế thường thôi`);
            }
            this.tagItemGhe.map((item) => {
              if (item.ghe.maGhe === $event.ghe.maGhe) {
                item.styleGheDaChon = !item.styleGheDaChon;
              }
            })
          }
        }
    
        if ($event.trangThaiChon === false) {
          this.mangGheDaChon.map((item, index) => {
            if (item.ghe.tenGhe === $event.ghe.tenGhe) {
              this.mangGheDaChon.splice(index, 1);
              this.mangTenGheDuocClick.splice(index, 1);
            }
            if(this.mangGheDaChon.length != this.soLuongVe){
              this.checkThanhToan = false;
            }
          })
        }
        if(this.mangGheVipDaChon.length === this.soLuongVeVip && this.mangGheDaChon.length === this.soLuongVe){
          this.checkThanhToan = true;
        }
      }
    }
    if($event.ghe.loaiGhe === "Vip"){
      if(this.soLuongVe === 0 && this.soLuongVeVip === 0){
        alert("Xin vui lòng chọn vé");  
      }else{
        if ($event.trangThaiChon === true) {
          if (this.mangGheVipDaChon.length < this.soLuongVeVip) {
            this.mangGheVipDaChon.push($event);
            this.sttAnphabeDuocClick = Math.floor(($event.ghe.stt) / 12.0001);
            let sttGhe;
            if ($event.ghe.stt % 12 === 0) {
              sttGhe = 12;
            } else {
              sttGhe = $event.ghe.stt % 12;
            }
            let tenGheDuocClick = this.anphabe[this.sttAnphabeDuocClick] + (sttGhe);
            this.mangTenGheDuocClick.push(tenGheDuocClick);
          } else {
            if(this.soLuongVeVip === 0 ) {
              alert("Bạn không đặt vé vip")
            }else{
              alert(`Hey! bạn chỉ được chọn ${this.soLuongVeVip} ghế vip thôi`);
            }
            this.tagItemGhe.map((item) => {
              if (item.ghe.maGhe === $event.ghe.maGhe) {
                item.styleGheDaChon = !item.styleGheDaChon;
              }
            })
          }
        }
    
        if ($event.trangThaiChon === false) {
          this.mangGheVipDaChon.map((item, index) => {
            if (item.ghe.tenGhe === $event.ghe.tenGhe) {
              this.mangGheVipDaChon.splice(index, 1);
              this.mangTenGheDuocClick.splice(index, 1);
            }
            if(this.mangGheVipDaChon.length != this.soLuongVeVip){
              this.checkThanhToan = false;
            }
          })
        }
        if(this.mangGheVipDaChon.length === this.soLuongVeVip && this.mangGheDaChon.length === this.soLuongVe){
          this.checkThanhToan = true;
        }
      }
    }
  }

  getParamUrl() {
    this.maLichChieu = this.activatedRoute.snapshot.paramMap.get("id");
  }

  layThongTinSuatChieu() {
    const uri = `QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${this.maLichChieu}`;
    this.dataService.get(uri).subscribe((data: any) => {
      this.thongTinSuatChieu = data;
      // console.log(this.thongTinSuatChieu);
      this.thongTinSuatChieu.danhSachGhe.map((item) => {
        if(item.stt > 48 && item.stt < 121){
          item.loaiGhe = "Vip"
        } else {
          item.loaiGhe = "Thuong"
        }
      })
      // lay thong tin chi tiet phim
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

  thanhToan() {
    if (this.soLuongVe === 0 && this.soLuongVeVip === 0) {
      alert(`Xin vui lòng chọn vé!`);
    } else if (this.mangGheDaChon.length === 0 && this.mangGheVipDaChon.length === 0) {
      alert(`Xin vui lòng chọn ghế!`);
    }else if(this.mangGheDaChon.length != this.soLuongVe || this.mangGheVipDaChon.length != this.soLuongVeVip) {
      alert(`Bạn chưa đặt đủ số lượng ghế!`);      
    } else {
      if (this.checkLogIn === false) {
        $("#navtagThanhToan").click();
        $("#btn-formthanhtoan").click();
        this.count++;
        if (this.count > 1) {
          if (this.checkFormThanhToan === false) {
            alert("Vui lòng điền đầy đủ thông tin!");
          } else {
            alert("đặt vé thành công!");
            const uri = "QuanLyDatVe/DatVe";
            let thongTinVe = {
              maGhe: "",
              giaVe: ""
            };  
            let mangThongTinVe = [];
            this.mangGheDaChon.map((item) => {
              thongTinVe.maGhe = item.ghe.maGhe;
              thongTinVe.giaVe = item.ghe.giaVe;
              // console.log(thongTinVe);
              mangThongTinVe.push(item);
              // console.log(mangThongTinVe);
            })
              // console.log(mangThongTinVe);
              // console.log(this.mangGheDaChon)
              this.mangGheVipDaChon.map((item) => {
              thongTinVe.maGhe = item.ghe.maGhe;
              thongTinVe.giaVe = item.ghe.giaVe;
              mangThongTinVe.push(thongTinVe);
            })
            const thongTinDatVe = {
              maLichChieu: this.maLichChieu,
              danhSachVe: mangThongTinVe,
              taiKhoanNguoiDung: this.taiKhoanDaDangNhap.inforUser.taiKhoan,
            };
            // console.log(thongTinDatVe);
            // api đặt vé
            const thongTinDatVe2 = 
            {
              "maLichChieu": "16532",
              "danhSachVe": [
                {
                  "maGhe": 51269,
                  "giaVe": 75000
                },
                {
                  "maGhe": 51270,
                  "giaVe": 75000
                }
              ],
              "taiKhoanNguoiDung": "phucdinh95"
            }
            
            
            this.dataService.post(uri, thongTinDatVe).subscribe((data) => {
              console.log(data);
            })
          }
        }
      } else {
        $("#thanhtoan").click();
      }

    }
  }

  btnFormThanhToan(value){
    this.checkFormThanhToan = true;
  }

  eventScroll() {
    $(document).ready(() => {
      window.addEventListener('scroll', () => {
        let top = window.pageYOffset;
        if (top != 0) {
          $("#NavBar").css({
            "opacity": "0.7",
            "transition": "all 0.3s"
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
          $("#NavBar").css("opacity", "1");
        }
      })
    })
  }

  checkDangNhap(form){
    this.checkLogIn = form.checkLogIn;
    this.inforUser = form.inforUser;
    console.log(this.inforUser);
    $("#myModal").click();
  }

  dangXuat(){
    localStorage.clear();
    location.reload()
  }
}
