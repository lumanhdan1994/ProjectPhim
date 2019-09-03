import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { BottomSheetUser, ModalComponent } from '../modal/modal.component';
import { StoreService } from 'src/app/shared/services/store.service';

export interface UserData {
  email: string,
  hoTen: string,
  maLoaiNguoiDung: string,
  matKhau: string,
  soDt: string,
  taiKhoan: string
}

@Component({
  selector: 'app-quan-ly-user',
  templateUrl: './quan-ly-user.component.html',
  styleUrls: ['./quan-ly-user.component.scss']
})
export class QuanLyUserComponent implements OnInit {
  displayedColumns: string[] = ['taiKhoan', 'hoTen', 'email', 'soDt', 'maLoaiNguoiDung', 'setting'];
  dataSource: MatTableDataSource<UserData>;
  UserList: any = [];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) renderTable: MatTable<UserData>;
  @ViewChild(ModalComponent, { static: false }) modalUser: ModalComponent;
  @ViewChild(BottomSheetUser, { static: false }) bottomUser: BottomSheetUser;

  constructor(private dataService: DataService, private store: StoreService) {
  }

  ngOnInit() {
    this.store.onChangeData.subscribe(() => {
      this.getUserList();
    })
    this.getUserList();
  }
  _flagChanging: boolean = false;

  // ngDoCheck() {
  //   if (this._flagChanging) {
  //     setTimeout(() => {
  //       this.getUserList();
  //       console.log(this._filterValue)
  //     }, 1);
      
  //     this._flagChanging = false;
  //   }
  // }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();

    }
  }

  getUserList() {
    const uri = "QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP05";
    this.dataService.get(uri).subscribe((data: any) => {
      this.UserList = data;
      setTimeout(() => {
        this.dataSource = new MatTableDataSource(this.UserList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, 1);
    }, (err) => { })
  }
  Edit(data) {
    this._flagChanging = false
    this.modalUser.openEditBottomSheetUser(data);
    this._flagChanging = this.bottomUser._flagChanging
    this.store.getDataChanging(this._flagChanging);
  }

  Delete(data) {
    const uri = `QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${data.taiKhoan}`
    this.dataService.delete(uri).subscribe(() => {
    }, (err) => { });
    this._flagChanging = !this._flagChanging;
    this.store.getDataChanging(this._flagChanging);
  }
}
// function createNewUser(user): UserData {

//   return {
//     email: user.email,
//     hoTen: user.hoTen,
//     maLoaiNguoiDung: user.maLoaiNguoiDung,
//     matKhau: user.matKhau,
//     soDt: user.soDt,
//     taiKhoan: user.taiKhoan
//   };
// }
