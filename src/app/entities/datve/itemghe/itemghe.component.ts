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

  ngOnInit() {
  }

  chonGhe() {
    console.log(this.ghe);
    this.styleGheDaChon = !this.styleGheDaChon;
    const objGhe = {
      trangThaiChon: this.styleGheDaChon,
      ghe: this.ghe
    };

    this.eventDatGhe.emit(objGhe);
  }

}
