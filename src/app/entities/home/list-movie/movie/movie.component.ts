import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { Router } from '@angular/router';
import { __asyncDelegator } from 'tslib';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input() SuatChieu: any;
  @Input() DateSelected: string;
  @Output() LayMaLichChieu = new EventEmitter();

  ThongTinCumRap: any;
  SuatChieuDeduplicate: any;
  constructor(private dataService: DataService,
    private router: Router) { }
  
  ngOnInit() {
    console.log(this.SuatChieu)
    this.Deduplicate();
    
    // this.LayThongTinRap();
  }
  ngOnChanges() {
    this.Deduplicate();
  }

  Deduplicate() {
    this.SuatChieuDeduplicate = { ...this.SuatChieu };
    // console.log(this.SuatChieu)
    let lichChieuClone: any = [];
    let pickingTime: {};
    let CumRapCLone: any = [];
    CumRapCLone = [...this.SuatChieuDeduplicate.cumRapChieu.map(item => item)]
    CumRapCLone.map(item => {
      lichChieuClone = [...item.lichChieuPhim]
    })
    // console.log(lichChieuClone)

    lichChieuClone = lichChieuClone.filter(item => (item.ngayChieuGioChieu.slice(0, 10) === this.DateSelected))
    // console.log(lichChieuClone)

    CumRapCLone.map((item) => {
      item.pickingTime = [...lichChieuClone]
    })
    this.SuatChieuDeduplicate.cumRapChieu = CumRapCLone
    console.log(this.SuatChieu)
    this.LayThongTinRap();
  }

  LayThongTinRap() {
    const uri = `QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${this.SuatChieu.maHeThongRap}`;
    this.dataService.get(uri).subscribe((data: any) => {
      this.ThongTinCumRap = data;
    })
  }

  GuiMaLichChieu(_maLichChieu) {
    // this.LayMaLichChieu = _maLichChieu
    console.log(_maLichChieu)
    this.router.navigate(["/datve", _maLichChieu])
  }


}
