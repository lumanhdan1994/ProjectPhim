import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatInputModule, MatBottomSheetModule
  ],
  exports:[
    MatInputModule, MatBottomSheetModule
  ]
})
export class MaterialModule { }
