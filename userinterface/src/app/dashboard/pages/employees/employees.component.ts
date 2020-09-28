import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../../services/homepage.service';
import { User } from '../../../models/homepage';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employeeList: any;

  constructor(
    public _api: HomeService,
    public Router: Router
  ) { }

  ngOnInit() {
    this.getData()
  }

  getData(){
    this._api.getAllUser({}).subscribe((res: any) => {
      if (res.error) {
      } else {
        this.employeeList = res.employeeList
      }
    });
  }
}
