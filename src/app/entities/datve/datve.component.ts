import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { ItemgheComponent } from './itemghe/itemghe.component';

declare var $: any;

@Component({
  selector: 'app-datve',
  templateUrl: './datve.component.html',
  styleUrls: ['./datve.component.scss']
})
export class DatveComponent implements OnInit {
  @ViewChildren(ItemgheComponent) tagItemGhe: QueryList<ItemgheComponent>;
  thongTinPhim: any;
  thongTinSuatChieu: any;
  soLuongVe: number = 0;
  giaVe: number = 0;
  soLuongCombo: number = 0;
  giaCombo: number = 0;
  tongTien:number = 0;
  tenGheDaChon: any;
  styleGheDaChon: boolean = false;
  mangGheDaChon: any = [];
  navtag1: boolean = true;
  navtag2: boolean = true;
  navtag3: boolean = true;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.layThongTinSuatChieu();
  }

  minusve(){
    if(this.soLuongVe > 0){
      this.soLuongVe --;
      this.giaVe = this.soLuongVe*85000;
      this.tongTien =  this.giaVe + this.giaCombo;      
    }
  }

  plusve(){
    if(this.tongTien < 800000){
      this.soLuongVe ++;
      this.giaVe = this.soLuongVe*85000;
      this.tongTien =  this.giaVe + this.giaCombo;    
    }    
  }

  minuscombo(){
    if(this.soLuongCombo > 0){
      this.soLuongCombo --;
      this.giaCombo = this.soLuongCombo*45000;
      this.tongTien =  this.giaVe + this.giaCombo;      
    }
  }

  pluscombo(){
    if(this.tongTien < 800000){
      this.soLuongCombo ++;
      this.giaCombo = this.soLuongCombo*45000;
      this.tongTien =  this.giaVe + this.giaCombo;    
    }   
  }

  toChonGhe(){
    $("#navtagChonGhe").click();
  }

  toChonVe(){
    $("#navtagChonVe").click();
  }

  chonGhe($event) {
    if ($event.trangThaiChon === true) {
      if (this.mangGheDaChon.length < this.soLuongVe) {
        this.mangGheDaChon.push($event);
      } else {
        alert(`Hey! bạn chỉ được chọn ${this.soLuongVe} ghế thôi`);
        this.tagItemGhe.map((item) => {
          if (item.ghe.maGhe === $event.ghe.maGhe) {
            item.styleGheDaChon = !item.styleGheDaChon;
          }
        })
      }
    } 


    if($event.trangThaiChon === false) {
      this.mangGheDaChon.map((item, index) => {
        if (item.ghe.tenGhe === $event.ghe.tenGhe) {
          this.mangGheDaChon.splice(index, 1);
        }
      })
    }
  }


  layThongTinSuatChieu(){
    const uri = "QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=16099";
    this.dataService.get(uri).subscribe((data:any) => {
      this.thongTinSuatChieu = data;   
    })
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
          $("#NavBar").css("opacity", "1");
        }
      })
    })
  }
}
