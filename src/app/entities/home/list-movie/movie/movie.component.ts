import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input() SuatChieu: any;
  @Input() DateSelected: string;

  ThongTinCumRap: any;
  SuatChieuDeduplicate: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log(this.SuatChieu)
    // this.Deduplicate();
    this.LayThongTinRap()
  }
  Deduplicate() {
    const SuatChieuDeduplicate: any = { ...(this.SuatChieu)};
    SuatChieuDeduplicate.cumRapChieu.map(item => {
      item.lichChieuPhim.map((itemlichChieu, index) => {
        if (itemlichChieu.ngayChieuGioChieu.slice(0, 10) !== this.DateSelected) {
          item.lichChieuPhim.splice(index)
        }
      })
    })
    this.SuatChieuDeduplicate= SuatChieuDeduplicate
    console.log(this.SuatChieu)
  }

  LayThongTinRap() {
    const uri = `QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${this.SuatChieu.maHeThongRap}`;
    this.dataService.get(uri).subscribe((data: any) => {
      this.ThongTinCumRap = data;
    })
  }
}
