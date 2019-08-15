import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatVeThanhCongComponent } from './dat-ve-thanh-cong.component';
import { DatVeThanhCongRoutingModule } from './dat-ve-thanh-cong-routing.module';

@NgModule({
  declarations: [DatVeThanhCongComponent],
  // exports: [DatVeThanhCongComponent],
  imports: [
    CommonModule, DatVeThanhCongRoutingModule
  ]
})
export class DatVeThanhCongModule { }
