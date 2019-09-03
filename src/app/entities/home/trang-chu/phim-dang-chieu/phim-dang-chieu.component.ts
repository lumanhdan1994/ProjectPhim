import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';



@Component({
  selector: 'app-phim-dang-chieu',
  templateUrl: './phim-dang-chieu.component.html',
  styleUrls: ['./phim-dang-chieu.component.scss']
})
export class PhimDangChieuComponent implements OnInit {

  trailerShow: string = "testsdfafgdfbdzfbzdfb";
  DSPhimDangChieu: any =[];
  DSPhimSapChieu: any =[]
  constructor(private dataService: DataService) { }

  slideConfig = { "slidesToShow": 4, "slidesToScroll": 4 };

  ngOnInit() {
    this.layDanhSachPhim();
  }

  layDanhSachPhim() {
    const uri = "QuanLyPhim/LayDanhSachPhim?maNhom=GP05";
    this.dataService.get(uri).subscribe((data: any) => {
      data.map(item => {
        if(item.maPhim %2 ==0){
          this.DSPhimDangChieu.push(item);
        }
        else{
          this.DSPhimSapChieu.push(item);
        }
      })
    });
  }

  takeTrailer(trailer){
    this.trailerShow = trailer;
  }
}


