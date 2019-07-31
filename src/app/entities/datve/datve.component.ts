import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-datve',
  templateUrl: './datve.component.html',
  styleUrls: ['./datve.component.scss']
})
export class DatveComponent implements OnInit {

  mangGhe: any =  [
    {tenGhe: "A01", trangThai: false},
    {tenGhe: "A02", trangThai: false},
    {tenGhe: "A03", trangThai: false},
    {tenGhe: "A04", trangThai: false},
    {tenGhe: "A05", trangThai: false},
    {tenGhe: "A06", trangThai: false},
    {tenGhe: "A07", trangThai: false},
    {tenGhe: "A08", trangThai: false},
    {tenGhe: "A09", trangThai: false},
    {tenGhe: "A010", trangThai: false},
    {tenGhe: "A011", trangThai: false},
    {tenGhe: "A012", trangThai: false},
    {tenGhe: "B01", trangThai: false},
    {tenGhe: "B02", trangThai: false},
    {tenGhe: "B03", trangThai: false},
    {tenGhe: "B04", trangThai: false},
    {tenGhe: "B05", trangThai: false},
    {tenGhe: "B06", trangThai: false},
    {tenGhe: "B07", trangThai: false},
    {tenGhe: "B08", trangThai: false},
    {tenGhe: "B09", trangThai: false},
    {tenGhe: "B010", trangThai: false},
    {tenGhe: "B011", trangThai: false},
    {tenGhe: "B012", trangThai: false},
    {tenGhe: "C01", trangThai: false},
    {tenGhe: "C02", trangThai: false},
    {tenGhe: "C03", trangThai: false},
    {tenGhe: "C04", trangThai: false},
    {tenGhe: "C05", trangThai: false},
    {tenGhe: "C06", trangThai: false},
    {tenGhe: "C07", trangThai: false},
    {tenGhe: "C08", trangThai: false},
    {tenGhe: "C09", trangThai: false},
    {tenGhe: "C010", trangThai: false},
    {tenGhe: "C011", trangThai: false},
    {tenGhe: "C012", trangThai: false},
  ]

  soLuongVe: number = 0;
  giaVe: number = 0;
  soLuongCombo: number = 0;
  giaCombo: number = 0;
  tongTien:number = 0;
  tenGheDaChon: any;
  styleGheDaChon: boolean = false;
  mangGheDaChon: any = [];

  constructor() { }

  ngOnInit() {
    console.log(this.tongTien);
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

}
