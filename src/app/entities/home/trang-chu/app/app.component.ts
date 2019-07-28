import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  slides = [
    {img: "../../../../assets/img/app1.png"},
    {img: "../../../../assets/img/app2.png"},
    {img: "../../../../assets/img/app3.png"},
    {img: "../../../../assets/img/app4.png"},
    {img: "../../../../assets/img/app5.png"},
    {img: "../../../../assets/img/app6.png"},
    {img: "../../../../assets/img/app7.png"},
    {img: "../../../../assets/img/app8.png"},
    {img: "../../../../assets/img/app9.png"},
    {img: "../../../../assets/img/app10.png"},
  ];
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};

  constructor() { }

  ngOnInit() {
  }

}
