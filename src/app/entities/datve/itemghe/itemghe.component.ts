import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-itemghe',
  templateUrl: './itemghe.component.html',
  styleUrls: ['./itemghe.component.scss']
})
export class ItemgheComponent implements OnInit {

  @Input() ghe;
  @Output() eventDatGhe = new EventEmitter();

  constructor() { }

  styleGheDaChon: boolean;
  styleGheVip: boolean = false;
  styleGheDaDat: boolean = false;

  ngOnInit() {
    console.log(this.ghe);
    if(this.ghe.loaiGhe === "Vip"){
      this.styleGheVip = true;
    }
    if(this.ghe.daDat === false){
      this.styleGheDaDat = true;
    }
  }

  chonGhe() {
    this.styleGheDaChon = !this.styleGheDaChon;
    const objGhe = {
      trangThaiChon: this.styleGheDaChon,
      ghe: this.ghe
    };

    this.eventDatGhe.emit(objGhe);
  }

}
