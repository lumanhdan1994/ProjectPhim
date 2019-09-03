import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit {

  @Output() eventSendTrailer = new EventEmitter<any>();
  @Input() phim;

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  sendTrailer(){
    this.eventSendTrailer.emit(this.phim.trailer);
  }

  chitiet(){
    this.router.navigate(['/list-movie', this.phim.maPhim]);
  }

}




