import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddProjectRoutingModule } from './add-project-routing.module';
import { AddProjectComponent } from './add-project.component';


@NgModule({
  declarations: [AddProjectComponent],
  imports: [
    CommonModule,
    FormsModule,
    AddProjectRoutingModule
  ]
})
export class AddProjectModule { }
