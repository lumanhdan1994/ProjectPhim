import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { StoreService } from 'src/app/shared/services/store.service';
import { BottomSheetOverviewExampleSheet } from '../modal/modal.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

declare var $: any;

export interface MovieData {
  maPhim: string,
  hinhAnh: string,
  hoTen: string,
  ngayChieu: string,
  danhGia: string,
  chinhSua: string
}

@Component({
  selector: 'app-quan-ly-phim',
  templateUrl: './quan-ly-phim.component.html',
  styleUrls: ['./quan-ly-phim.component.scss']
})
export class QuanLyPhimComponent implements OnInit {

  displayedColumns: string[] = ['maPhim', 'hinhAnh', 'hoTen', 'ngayChieu', 'danhGia', 'chinhSua'];
  dataSource: MatTableDataSource<MovieData>;
  ListMovie: any = [];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private dataService: DataService, private store: StoreService, private _bottomSheet: MatBottomSheet) { }

  ngOnInit() {
    this.store.checkListMovieChange.subscribe(data => {
      this.getListMovie();
    })
    this.getListMovie();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  getListMovie() {
    const uri = "QuanLyPhim/LayDanhSachPhim?maNhom=GP05";
    this.dataService.get(uri).subscribe((data) => {
      this.ListMovie = data;
      setTimeout(() => {
        this.dataSource = new MatTableDataSource(this.ListMovie);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, 1)
    })
  }

  delete(maPhim){
    alert("Bạn có muốn xóa phim ?");
    const uri = `QuanLyPhim/XoaPhim?MaPhim=${maPhim}`;
    this.dataService.delete(uri).subscribe((data) => {  
      
    }, (err) => {
      this.getListMovie();
    })
  }


  update(movie){
    this.store.shareInforMovie(movie);
    this._bottomSheet.open(BottomSheetOverviewExampleSheet, {
      panelClass: 'custom-height'
    });
  }


}
