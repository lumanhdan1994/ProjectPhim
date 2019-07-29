import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit {

  @Input() phim;

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  chitiet(){
    this.router.navigate(['/list-movie', this.phim.maPhim]);
  }

}




