import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

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

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  

  constructor(private dataService: DataService) {
   }

  ngOnInit() {
    this.getUserList();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getUserList() {
    const uri = "QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP08";
    this.dataService.get(uri).subscribe((data: any) => {
      this.UserList = data;
      this.dataSource = new MatTableDataSource(this.UserList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      // console.log(this.UserList);
      console.log(this.dataSource)
    })
  }

}
function createNewUser(user): UserData {
  
  return {
    email: user.email,
    hoTen: user.hoTen,
    maLoaiNguoiDung: user.maLoaiNguoiDung,
    matKhau: user.matKhau,
    soDt: user.soDt,
    taiKhoan: user.taiKhoan
  };
}
