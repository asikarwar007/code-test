import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogTimeComponent } from './log-time.component';


const routes: Routes = [
  {
    path: '',
    component: LogTimeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogTimeRoutingModule { }
