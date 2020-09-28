import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../../services/homepage.service';
import { LogTime } from '../../../models/homepage';

@Component({
  selector: 'app-log-time',
  templateUrl: './log-time.component.html',
  styleUrls: ['./log-time.component.css']
})
export class LogTimeComponent implements OnInit {
  fields = new LogTime()
  projectList: any;
  employeeList: any;

  constructor(
    public _api: HomeService,
    public router: Router
  ) { }
  ngOnInit() {
    this.getData()
  }

  getData() {
    this._api.getAllProject({}).subscribe((res: any) => {
      if (res.error) {
      } else {
        this.projectList = res.projectList
      }
    });
    this._api.getAllUser({}).subscribe((res: any) => {
      if (res.error) {
      } else {
        this.employeeList = res.employeeList
      }
    });
  }

  Submit() {
    this._api.LogTimeAdd(this.fields).subscribe((res: any) => {
      if (res.error) {
      } else {
        this.router.navigate(['/dashboard']);
        // this.notificationCount = res.notificationCount
        // this._api.setcategoryList(this.categoryList)
      }
    });
  }
}
