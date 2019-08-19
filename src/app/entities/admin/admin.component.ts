import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  UserSeleted: boolean = false;
  MovieSeleted: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  GetDSPhim() {
    this.UserSeleted = false;
    this.MovieSeleted = true;
  }
  GetDSUser() {
    this.MovieSeleted = false;
    this.UserSeleted = true;
  }
}
