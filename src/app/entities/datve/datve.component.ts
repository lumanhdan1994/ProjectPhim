import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

declare var $: any;

@Component({
  selector: 'app-datve',
  templateUrl: './datve.component.html',
  styleUrls: ['./datve.component.scss']
})
export class DatveComponent implements OnInit {

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

  chonGhe($event){
    if($event.trangThaiChon === true){
      this.mangGheDaChon.push($event);
    }else{
      this.mangGheDaChon.map((item,index) =>{
        if(item.ghe.tenGhe === $event.ghe.tenGhe){
          this.mangGheDaChon.splice(index,1);
        }
      })
    }
  }

  layThongTinSuatChieu(){
    const uri = "QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=16099";
    this.dataService.get(uri).subscribe((data:any) => {
      this.thongTinSuatChieu = data;   
      console.log(this.thongTinSuatChieu);
    })
  }

}
