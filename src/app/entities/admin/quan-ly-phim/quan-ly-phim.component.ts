import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { StoreService } from 'src/app/shared/services/store.service';

declare var $: any;

@Component({
  selector: 'app-quan-ly-phim',
  templateUrl: './quan-ly-phim.component.html',
  styleUrls: ['./quan-ly-phim.component.scss']
})
export class QuanLyPhimComponent implements OnInit {

  ListMovie: any = [];

  constructor(private dataService: DataService, private store: StoreService) { }

  ngOnInit() {
    this.getListMovie();
  }

  ngDoCheck() {
    
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
      if(err.status === 200){
        alert(err.error.text);
      }else{
        alert(err.error);
      }
      
    })
  }


  update(movie){
    this.store.shareInforMovie(movie);
    $("#openModal").click();
  }


}
