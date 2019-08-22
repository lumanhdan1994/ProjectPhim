import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatveComponent } from './datve.component';
import { DatveRoutingModule } from './datve-routing.module';
import { ItemgheComponent } from './itemghe/itemghe.component';
import { FormComponent } from './form/form.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ShareModulesModule } from 'src/app/shared/share-modules/share-modules.module';

@NgModule({
  declarations: [DatveComponent, ItemgheComponent],
  imports: [
    CommonModule, DatveRoutingModule, MatInputModule, ShareModulesModule
  ]
})
export class DatveModule { }
