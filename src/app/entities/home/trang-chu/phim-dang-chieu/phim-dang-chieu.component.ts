import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { DomSanitizer } from '@angular/platform-browser';
import { StoreService } from 'src/app/shared/services/store.service';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
} 

@Component({
  selector: 'app-phim-dang-chieu',
  templateUrl: './phim-dang-chieu.component.html',
  styleUrls: ['./phim-dang-chieu.component.scss']
})
export class PhimDangChieuComponent implements OnInit {

  trailerShow: string = "";
  DSPhimDangChieu: any =[];
  DSPhimSapChieu: any =[]
  constructor(private dataService: DataService, private store: StoreService) { }

  slideConfig = { "slidesToShow": 4, "slidesToScroll": 4 };

  ngOnInit() {
    this.layDanhSachPhim();
  }
  ngDoCheck() {
    if (this.trailerShow != "") {
      console.log("ád")
      this.slideConfig = { "slidesToShow": 1, "slidesToScroll": 1 };
    }
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


