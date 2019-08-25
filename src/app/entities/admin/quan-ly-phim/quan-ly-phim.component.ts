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
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  data: [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

  constructor(private dataService: DataService, private store: StoreService, private _bottomSheet: MatBottomSheet) { }

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
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }


}
