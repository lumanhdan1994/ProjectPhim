import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatveComponent } from './datve.component';
import { DatveRoutingModule } from './datve-routing.module';
import { ItemgheComponent } from './itemghe/itemghe.component';
import { FormComponent } from './form/form.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DatveComponent, ItemgheComponent, FormComponent],
  imports: [
    CommonModule, DatveRoutingModule, MatInputModule, FormsModule
  ]
})
export class DatveModule { }
