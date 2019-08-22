import { Component, OnInit} from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { DataService } from 'src/app/shared/services/data.service';
import { $ } from 'protractor';
import { QuanLyPhimComponent } from '../quan-ly-phim/quan-ly-phim.component';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) { }

  ngOnInit() {
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }

}




// ========================= Component form =====================






@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
  styleUrls: ['./modal.component.scss']
})
export class BottomSheetOverviewExampleSheet {

  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>,
    private dataService: DataService,
    private _bottomSheet: MatBottomSheet,
    private store: StoreService
  ) { }

  ngOnInit() {
    console.log(this.store.inforMovieUpdate);
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }


  addMovie(value) {
    const uri = "QuanLyPhim/ThemPhim";
    const objMovie = {
        maPhim: parseInt(value.maPhim),
        tenPhim: value.tenPhim,
        biDanh: value.biDanh,
        trailer: value.trailer,
        hinhAnh: value.hinhAnh,
        moTa: value.moTa,
        maNhom: value.maNhom,
        ngayKhoiChieu: value.ngayKhoiChieu,
        danhGia: parseInt(value.danhGia),
    }
    this.dataService.post(uri, objMovie).subscribe((data) => {
        this._bottomSheet.dismiss();
        console.log(data);
    }, (err) => {
      alert(err.error);
      console.log(err)
    })
  }
}
