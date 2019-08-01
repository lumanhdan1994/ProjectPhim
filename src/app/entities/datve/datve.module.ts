import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatveComponent } from './datve.component';
import { DatveRoutingModule } from './datve-routing.module';
import { ChonveComponent } from './chonve/chonve.component';
import { ChongheComponent } from './chonghe/chonghe.component';
import { ThanhtoanComponent } from './thanhtoan/thanhtoan.component';
import { ItemgheComponent } from './itemghe/itemghe.component';

@NgModule({
  declarations: [DatveComponent, ChonveComponent, ChongheComponent, ThanhtoanComponent, ItemgheComponent],
  imports: [
    CommonModule, DatveRoutingModule
  ]
})
export class DatveModule { }
