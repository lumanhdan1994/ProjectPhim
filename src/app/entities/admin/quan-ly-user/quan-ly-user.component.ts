import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { BottomSheetUser } from '../modal/modal.component';
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
  @ViewChild(MatTable, { static: false }) renderTable: MatTable<any>;

  constructor(private dataService: DataService, private store: StoreService) {
  }

  ngOnInit() {
    this.getUserList();
  }
  _filterValue: string;
  applyFilter(filterValue: string) {
    // this._filterValue = filterValue;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  // renderingTable() {
  //   alert("Done")
  //   this.renderTable.renderRows();
  // }
  getUserList() {
    const uri = "QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP05";
    this.dataService.get(uri).subscribe((data: any) => {
      this.UserList = data;
      setTimeout(() => {
        this.dataSource = new MatTableDataSource(this.UserList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, 1);

      // console.log(this.UserList);
      // console.log(this.dataSource.data)
    }, (err) => { })
  }
  Edit(data) {
    // console.log(data);
    this.store.shareInfoUser(data)
  }

  Delete(data) {
    const uri = `QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${data.taiKhoan}`
    this.dataService.delete(uri).subscribe(() => {
    }, (err) => { });
    setTimeout(() => {
      this.renderTable.renderRows();
    }, 1);
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
