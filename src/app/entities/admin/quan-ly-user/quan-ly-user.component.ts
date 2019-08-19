import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-quan-ly-user',
  templateUrl: './quan-ly-user.component.html',
  styleUrls: ['./quan-ly-user.component.scss']
})
export class QuanLyUserComponent implements OnInit {
  UserList: any = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getUserList();
  }


  getUserList() {
    const uri = "QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP08";
    this.dataService.get(uri).subscribe((data: any) => {
      this.UserList = data;
      console.log(this.UserList);
    })
  }
}
