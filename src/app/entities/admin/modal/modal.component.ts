import { Component, OnInit, ViewChild } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { DataService } from 'src/app/shared/services/data.service';
import { StoreService } from 'src/app/shared/services/store.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuanLyUserComponent } from '../quan-ly-user/quan-ly-user.component';
declare var $: any

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  constructor(private _bottomSheet: MatBottomSheet, private store: StoreService) { }

  ngOnInit() {
    this.store.tabsSelected.subscribe((data: any) => {
      this.TabsSelected = data;
    })
  }
  TabsSelected: boolean;

  openBottomSheet(): void {
    this.store.shareInforMovie("");
    this._bottomSheet.open(BottomSheetOverviewExampleSheet, {
      panelClass: 'custom-height'
    });

  }

  openBottomSheetUser(): void {
    this.store.shareInfoUser("");
    this._bottomSheet.open(BottomSheetUser, {
      panelClass: 'custom-height',
    });
  }
  openEditBottomSheetUser(data): void {
    this.store.shareInfoUser(data);
    this._bottomSheet.open(BottomSheetUser, {
      panelClass: 'custom-height',
    });
  }
}
// ========================= Component form =====================
@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
  styleUrls: ['./modal.component.scss']
})
export class BottomSheetOverviewExampleSheet {

  checkList: boolean = false;
  checkUpdate: boolean = false;
  selectedMovieUpdate: any = {};
  Form = new FormGroup({
    maPhim: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)]),
    tenPhim: new FormControl('', [Validators.required]),
    biDanh: new FormControl('', [Validators.required]),
    trailer: new FormControl('', [Validators.required]),
    hinhAnh: new FormControl('', [Validators.required]),
    moTa: new FormControl('', [Validators.required]),
    maNhom: new FormControl('', [Validators.required]),
    ngayKhoiChieu: new FormControl('', [Validators.required]),
    danhGia: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)]),
  });


  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>,
    private dataService: DataService,
    private _bottomSheet: MatBottomSheet,
    private store: StoreService
  ) { }

  ngOnInit() {
    this.getSelectedMovie();
    this.setValueBySelectedMovie();
  }

  getSelectedMovie() {
    this.store.inforMovieUpdate.subscribe(data => {
      this.selectedMovieUpdate = data;
    });
    if (this.selectedMovieUpdate === "") {
      this.checkUpdate = false;
    } else {
      this.checkUpdate = true;
    }
  }

  setValueBySelectedMovie() {
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


  onSubmit() {
    const uri = "QuanLyPhim/ThemPhim";
    let fullNgayKhoiChieu = new Date(this.Form.value.ngayKhoiChieu);
    let getMonth
    let getDate
    if ((fullNgayKhoiChieu.getMonth() + 1) < 10) {
      getMonth = "0" + (fullNgayKhoiChieu.getMonth() + 1)
    } else {
      getMonth = (fullNgayKhoiChieu.getMonth() + 1)
    }
    if (fullNgayKhoiChieu.getDate() < 10) {
      getDate = "0" + fullNgayKhoiChieu.getDate()
    } else {
      getDate = fullNgayKhoiChieu.getDate()
    }
    const objMovie = {
      maPhim: parseInt(this.Form.value.maPhim),
      tenPhim: this.Form.value.tenPhim,
      biDanh: this.Form.value.biDanh,
      trailer: this.Form.value.trailer,
      hinhAnh: this.Form.value.hinhAnh,
      moTa: this.Form.value.moTa,
      maNhom: this.Form.value.maNhom,
      ngayKhoiChieu: getDate + '/' + getMonth + '/' + fullNgayKhoiChieu.getFullYear(),
      danhGia: parseInt(this.Form.value.danhGia),
    }
    this.dataService.post(uri, objMovie).subscribe((data) => {
      this._bottomSheetRef.dismiss();
      this.checkList = !this.checkList;
      this.store.shareCheckListMovieChange(this.checkList);
    }, (err) => {
    })

  }

  onUpdate() {
    let fullNgayKhoiChieu = new Date(this.Form.value.ngayKhoiChieu);
    let getMonth
    let getDate
    if ((fullNgayKhoiChieu.getMonth() + 1) < 10) {
      getMonth = "0" + (fullNgayKhoiChieu.getMonth() + 1)
    } else {
      getMonth = (fullNgayKhoiChieu.getMonth() + 1)
    }
    if (fullNgayKhoiChieu.getDate() < 10) {
      getDate = "0" + fullNgayKhoiChieu.getDate()
    } else {
      getDate = fullNgayKhoiChieu.getDate()
    }
    const uri = "QuanLyPhim/CapNhatPhim";
    const objMovie = {
      maPhim: parseInt(this.Form.value.maPhim),
      tenPhim: this.Form.value.tenPhim,
      biDanh: this.Form.value.biDanh,
      trailer: this.Form.value.trailer,
      hinhAnh: this.Form.value.hinhAnh,
      moTa: this.Form.value.moTa,
      maNhom: this.Form.value.maNhom,
      ngayKhoiChieu: getDate + '/' + getMonth + '/' + fullNgayKhoiChieu.getFullYear(),
      danhGia: parseInt(this.Form.value.danhGia),
    }
    this.dataService.post(uri, objMovie).subscribe((data) => {
      this._bottomSheetRef.dismiss();
      this.checkList = !this.checkList;
      this.store.shareCheckListMovieChange(this.checkList);
    }, (err) => {
    })
  }
}


// ======================     USER FORM     ====================== 
@Component({
  selector: 'bottom-sheet-user',
  templateUrl: 'bottom-sheet-user.html',
  styleUrls: ['./modal.component.scss']
})
export class BottomSheetUser {

  user: FormGroup = new FormGroup({
    taiKhoan: new FormControl(''),
    matKhau: new FormControl(''),
    email: new FormControl(''),
    soDt: new FormControl(''),
    maNhom: new FormControl('GP05'),
    maLoaiNguoiDung: new FormControl(''),
    hoTen: new FormControl('')
  });


  constructor(
    private store: StoreService,
    private dataService: DataService,
    private _bottomSheetRef: MatBottomSheetRef<BottomSheetUser>,
  ) { }


  CheckUpdate: boolean = false;
  ngOnInit() {
    
    this.UserSelected();
  }

  _flagChanging: boolean = false;

  UserSelected() {
    this.store.getInfoUser.subscribe((data: any) => {
      console.log(data)
      if (data != "") {
        this.user.setValue({
          taiKhoan: data.taiKhoan,
          matKhau: data.matKhau,
          email: data.email,
          soDt: data.soDt,
          maLoaiNguoiDung: data.maLoaiNguoiDung,
          hoTen: data.hoTen,
          maNhom: "GP05",
        });
        this.CheckUpdate = true;
      } else {
        this.CheckUpdate = false
      }
    })
  }

  AddUser(): void {
    const uri = "QuanLyNguoiDung/ThemNguoiDung"
    this.dataService.post(uri, this.user.value).subscribe(() => {
      this._bottomSheetRef.dismiss();
      this._flagChanging= true
    }, (err) => { })
  }
  EditUser() {
    const uri = "QuanLyNguoiDung/CapNhatThongTinNguoiDung";
    console.log(this.user.value)
    this.dataService.put(uri, this.user.value).subscribe(() => {
      this._bottomSheetRef.dismiss();
      !this._flagChanging
    }, (err) => {

    })
  }
}