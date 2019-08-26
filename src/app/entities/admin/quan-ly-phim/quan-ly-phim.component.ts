import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { StoreService } from 'src/app/shared/services/store.service';
import { BottomSheetOverviewExampleSheet } from '../modal/modal.component';

declare var $: any;

@Component({
  selector: 'app-quan-ly-phim',
  templateUrl: './quan-ly-phim.component.html',
  styleUrls: ['./quan-ly-phim.component.scss']
})
export class QuanLyPhimComponent implements OnInit {

  ListMovie: any = [];
  

  constructor(private dataService: DataService, private store: StoreService, private _bottomSheet: MatBottomSheet) { }

  ngOnInit() {
    this.getListMovie();
  }


  getListMovie() {
    const uri = "QuanLyPhim/LayDanhSachPhim?maNhom=GP08";
    this.dataService.get(uri).subscribe((data) => {
      this.ListMovie = data;
    })
  }

  delete(maPhim){
    const uri = `QuanLyPhim/XoaPhim?MaPhim=${maPhim}`;
    this.dataService.delete(uri).subscribe((data) => {  
    }, (err) => {
    })
  }


  update(movie){
    this.store.shareInforMovie(movie);
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }


}
