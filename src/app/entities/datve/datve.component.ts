import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datve',
  templateUrl: './datve.component.html',
  styleUrls: ['./datve.component.scss']
})
export class DatveComponent implements OnInit {

  soLuongVe: number = 0;
  giaVe: number = 0;
  soLuongCombo: number = 0;
  giaCombo: number = 0;
  tongTien:number = 0;

  constructor() { }

  ngOnInit() {
    console.log(this.tongTien);
  }

  minusve(){
    if(this.soLuongVe > 0){
      this.soLuongVe --;
      this.giaVe = this.soLuongVe*85000;
      this.tongTien =  this.giaVe + this.giaCombo
    }
  }

  plusve(){
    this.soLuongVe ++;
    this.giaVe = this.soLuongVe*85000;
    this.tongTien =  this.giaVe + this.giaCombo
  }

  minuscombo(){
    if(this.soLuongCombo > 0){
      this.soLuongCombo --;
      this.giaCombo = this.soLuongCombo*45000;
      this.tongTien =  this.giaVe + this.giaCombo
    }
  }

  pluscombo(){
    this.soLuongCombo ++;
    this.giaCombo = this.soLuongCombo*45000;
    this.tongTien =  this.giaVe + this.giaCombo
  }



}
