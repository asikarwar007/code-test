import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LogTimeRoutingModule } from './log-time-routing.module';
import { LogTimeComponent } from './log-time.component';


@NgModule({
  declarations: [LogTimeComponent],
  imports: [
    CommonModule,
    FormsModule,
    LogTimeRoutingModule
  ]
})
export class LogTimeModule { }
