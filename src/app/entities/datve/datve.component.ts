import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { ItemgheComponent } from './itemghe/itemghe.component';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ToastrService } from 'ngx-toastr';


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
  thongTinDatVe: any = {};
  // animation: any = {check: false, count: 0 }
  animation: boolean = false;

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.getParamUrl();
    this.layThongTinSuatChieu();
    this.taiKhoanDaDangNhap = JSON.parse(localStorage.getItem("taiKhoanDaDangNhap"));
    if (this.taiKhoanDaDangNhap != null) {
      this.checkLogIn = this.taiKhoanDaDangNhap.checkLogIn;
      this.inforUser = this.taiKhoanDaDangNhap.inforUser;
    }
  }

  animationTotalMoney() {
    this.animation = true;
    setTimeout(() => {
      this.animation = false;
    }, 1000);
  }

  minusve() {
    if (this.soLuongVe > 0) {
      this.animationTotalMoney() 
      this.soLuongVe--;
      this.giaVe = this.soLuongVe * 85000;
      this.tongTien = this.giaVe + this.giaCombo + this.giaVeVip;
    }
    if (this.soLuongVe === 0) {
      this.checkChonGhe = false;
    }
  }

  plusve() {
    if (this.tongTien < 800000) {
      this.animationTotalMoney() 
      this.soLuongVe++;
      this.giaVe = this.soLuongVe * 85000;
      this.tongTien = this.giaVe + this.giaCombo + this.giaVeVip;
    }
    if (this.soLuongVe !== 0) {
      this.checkChonGhe = true;
    }
  }

  plusveVip() {
    if (this.tongTien < 800000) {
      this.animationTotalMoney() 
      this.soLuongVeVip++;
      this.giaVeVip = this.soLuongVeVip * 90000;
      this.tongTien = this.giaVeVip + this.giaCombo + this.giaVe;
    }
    if (this.soLuongVeVip !== 0) {
      this.checkChonGhe = true;
    }
  }

  minusveVip() {
    if (this.soLuongVeVip > 0) {
      this.animationTotalMoney() 
      this.soLuongVeVip--;
      this.giaVeVip = this.soLuongVeVip * 90000;
      this.tongTien = this.giaVeVip + this.giaCombo + this.giaVe;
    }
    if (this.soLuongVeVip === 0) {
      this.checkChonGhe = false;
    }
  }

  minuscombo() {
    if (this.soLuongCombo > 0) {
      this.animationTotalMoney();
      this.soLuongCombo--;
      this.giaCombo = this.soLuongCombo * 45000;
      this.tongTien = this.giaVeVip + this.giaCombo + this.giaVe;
    }
  }

  pluscombo() {
    if (this.tongTien < 800000) {
      this.animationTotalMoney();
      this.soLuongCombo++;
      this.giaCombo = this.soLuongCombo * 45000;
      this.tongTien = this.giaVeVip + this.giaCombo + this.giaVe;
    }
  }

  toChonGhe() {
    if (this.soLuongVe === 0 && this.soLuongVeVip === 0) {
      this.toastr.error("Vui lòng đặt vé!", "Thông báo");
    } else {
      $("#navtagChonGhe").click();
    }
  }

  toChonVe() {
    $("#navtagChonVe").click();
  }

  chonGhe($event) {
    if ($event.ghe.loaiGhe === "Thuong") {
      if (this.soLuongVe === 0 && this.soLuongVeVip === 0) {
        this.toastr.error("Xin vui lòng chọn vé", "Thông báo");
      } else {
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
            if (this.soLuongVe === 0) {
              this.toastr.error("Bạn không đặt vé thường", "Thông báo")
            } else {
              this.toastr.error(`Hey! bạn chỉ được chọn ${this.soLuongVe} ghế thường thôi`, "Thông báo");
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
            if (this.mangGheDaChon.length != this.soLuongVe) {
              this.checkThanhToan = false;
            }
          })
        }
        if (this.mangGheVipDaChon.length === this.soLuongVeVip && this.mangGheDaChon.length === this.soLuongVe) {
          this.checkThanhToan = true;
        }
      }
    }
    if ($event.ghe.loaiGhe === "Vip") {
      if (this.soLuongVe === 0 && this.soLuongVeVip === 0) {
        this.toastr.error("Xin vui lòng chọn vé", "Thông báo");
      } else {
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
            if (this.soLuongVeVip === 0) {
              this.toastr.error("Bạn không đặt vé vip", "Thông báo")
            } else {
              this.toastr.error(`Hey! bạn chỉ được chọn ${this.soLuongVeVip} ghế vip thôi`, "Thông báo");
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
            if (this.mangGheVipDaChon.length != this.soLuongVeVip) {
              this.checkThanhToan = false;
            }
          })
        }
        if (this.mangGheVipDaChon.length === this.soLuongVeVip && this.mangGheDaChon.length === this.soLuongVe) {
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
      this.thongTinSuatChieu.danhSachGhe.map((item) => {
        if (item.stt > 48 && item.stt < 121) {
          item.loaiGhe = "Vip";
          item.giaVe = 90000;
        } else {
          item.loaiGhe = "Thuong";
          item.giaVe = 75000;
        }
      })
      // lay thong tin chi tiet phim
      this.layThongTinChiTietPhim();
    })
  }

  layThongTinChiTietPhim() {
    const uri = "QuanLyPhim/LayDanhSachPhim?maNhom=GP05";
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
      this.toastr.error(`Xin vui lòng chọn vé!`, "Thông báo");
    } else if (this.mangGheDaChon.length === 0 && this.mangGheVipDaChon.length === 0) {
      this.toastr.error(`Xin vui lòng chọn ghế!`, "Thông báo");
    } else if (this.mangGheDaChon.length != this.soLuongVe || this.mangGheVipDaChon.length != this.soLuongVeVip) {
      this.toastr.error(`Bạn chưa đặt đủ số lượng ghế!`, "Thông báo");
    } else {
      if (this.checkLogIn === false) {
        $("#navtagThanhToan").click();
        $("#btn-formthanhtoan").click();
        this.count++;
        if (this.count > 1) {
          if (this.checkFormThanhToan === false) {
            this.toastr.error("Vui lòng điền đầy đủ thông tin!", "Thông báo");
          } else {
            const uri = "QuanLyDatVe/DatVe";
            let mangThongTinVe = [];

            this.mangGheDaChon.map((item) => {
              let thongTinVe = {
                maGhe: item.ghe.maGhe,
                giaVe: item.ghe.maGhe
              };
              mangThongTinVe = [...mangThongTinVe, thongTinVe]
            })

            this.mangGheVipDaChon.map((item) => {
              let thongTinVe = {
                maGhe: item.ghe.maGhe,
                giaVe: item.ghe.maGhe
              };
              mangThongTinVe = [...mangThongTinVe, thongTinVe]
            })
            if (this.taiKhoanDaDangNhap === null) {
              this.taiKhoanDaDangNhap = JSON.parse(localStorage.getItem("taiKhoanDaDangNhap"));
            }

            let thongTinDatVe = {
              maLichChieu: parseInt(this.maLichChieu),
              danhSachVe: mangThongTinVe,
              taiKhoanNguoiDung: this.taiKhoanDaDangNhap.inforUser.taiKhoan,
            };

            this.dataService.post(uri, thongTinDatVe).subscribe(
              (data) => {

              }, (err) => {
                this.router.navigate(['/datvethanhcong'], {
                  queryParams: {
                    tongTien: this.tongTien,
                    maLichChieu: this.maLichChieu,
                    maPhim: this.maPhim,
                    soLuongCombo: this.soLuongCombo,
                    ghe: this.mangTenGheDuocClick,
                  },
                })
              }
            )
          }
        }
      } else {
        $("#thanhtoan").click();
      }

    }
  }

  btnFormThanhToan(value) {
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

  checkDangNhap(form) {
    this.checkLogIn = form.checkLogIn;
    this.inforUser = form.inforUser;
    $("#myModal").click();
  }

  dangXuat() {
    localStorage.clear();
    location.reload()
  }
}
