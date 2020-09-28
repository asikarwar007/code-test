import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddEmployeeRoutingModule } from './add-employee-routing.module';
import { AddEmployeeComponent } from './add-employee.component';


@NgModule({
  declarations: [AddEmployeeComponent],
  imports: [
    CommonModule,
    FormsModule,
    AddEmployeeRoutingModule
  ]
})
export class AddEmployeeModule { }
