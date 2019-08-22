import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from 'src/app/entities/datve/form/form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormComponent],
  exports: [FormComponent, FormsModule],
  imports: [
    CommonModule, FormsModule
  ]
})
export class ShareModulesModule { }
