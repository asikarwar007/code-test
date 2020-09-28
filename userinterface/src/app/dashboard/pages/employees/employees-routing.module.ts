import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees.component';


const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent
  },
  {
    path: 'add',
    loadChildren: () => import('./add-employee/add-employee.module').then(m => m.AddEmployeeModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
