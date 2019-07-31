import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemgheComponent } from '../itemghe/itemghe.component';
import { ItemGheComponent } from './item-ghe.component';

@NgModule({
  declarations: [ItemgheComponent, ItemGheComponent],
  imports: [
    CommonModule
  ]
})
export class ItemGheModule { }
