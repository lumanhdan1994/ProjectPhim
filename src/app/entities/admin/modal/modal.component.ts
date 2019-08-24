import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { DataService } from 'src/app/shared/services/data.service';
import { $ } from 'protractor';
import { QuanLyPhimComponent } from '../quan-ly-phim/quan-ly-phim.component';
import { StoreService } from 'src/app/shared/services/store.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet, private store: StoreService) { }

  ngOnInit() {
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
    // this.store.shareInforMovie("");
  }

}




// ========================= Component form =====================


@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
  styleUrls: ['./modal.component.scss']
})
export class BottomSheetOverviewExampleSheet {

  checkUpdate: boolean = false;
  selectedMovieUpdate: any = {};
  Form = new FormGroup({
    maPhim: new FormControl(''),
    tenPhim: new FormControl(''),
    biDanh: new FormControl(''),
    trailer: new FormControl(''),
    hinhAnh: new FormControl(''),
    moTa: new FormControl(''),
    maNhom: new FormControl(''),
    ngayKhoiChieu: new FormControl(''),
    danhGia: new FormControl(''),
  });


  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>,
    private dataService: DataService,
    private _bottomSheet: MatBottomSheet,
    private store: StoreService
  ) { }

  ngOnInit() {
    this.store.inforMovieUpdate.source.subscribe(data => {
      this.selectedMovieUpdate = data;
    });
    this.Form.setValue({
      maPhim: this.selectedMovieUpdate.maPhim,
      tenPhim: this.selectedMovieUpdate.tenPhim,
      biDanh: this.selectedMovieUpdate.biDanh,
      trailer: this.selectedMovieUpdate.trailer,
      hinhAnh: this.selectedMovieUpdate.hinhAnh,
      moTa: this.selectedMovieUpdate.moTa,
      maNhom: this.selectedMovieUpdate.maNhom,
      ngayKhoiChieu: this.selectedMovieUpdate.ngayKhoiChieu,
      danhGia: this.selectedMovieUpdate.danhGia,
    })
   
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  onSubmit() {
    const uri = "QuanLyPhim/ThemPhim";
    const objMovie = {
      maPhim: parseInt(this.Form.value.maPhim),
      tenPhim: this.Form.value.tenPhim,
      biDanh: this.Form.value.biDanh,
      trailer: this.Form.value.trailer,
      hinhAnh: this.Form.value.hinhAnh,
      moTa: this.Form.value.moTa,
      maNhom: this.Form.value.maNhom,
      ngayKhoiChieu: this.Form.value.ngayKhoiChieu,
      danhGia: parseInt(this.Form.value.danhGia),
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
