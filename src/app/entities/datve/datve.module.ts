import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatveComponent } from './datve.component';
import { DatveRoutingModule } from './datve-routing.module';
import { ItemgheComponent } from './itemghe/itemghe.component';

@NgModule({
  declarations: [DatveComponent, ItemgheComponent],
  imports: [
    CommonModule, DatveRoutingModule
  ]
})
export class DatveModule { }
