import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,
    children :[
      {
        path:'',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path:'dashboard',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path:'employees',
        loadChildren: () => import('./pages/employees/employees.module').then(m => m.EmployeesModule)
      },
      {
        path:'projects',
        loadChildren: () => import('./pages/project/project.module').then(m => m.ProjectModule)
      },
      {
        path:'log-time',
        loadChildren: () => import('./pages/log-time/log-time.module').then(m => m.LogTimeModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
