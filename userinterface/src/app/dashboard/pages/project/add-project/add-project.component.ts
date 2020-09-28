import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../../../services/homepage.service';
import { Project } from '../../../../models/homepage';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  fields = new Project()
  employeeList: any;

  constructor(
    public _api: HomeService,
    public router: Router
  ) { }

  ngOnInit() {
    this.getData()
  }

  getData() {
    this._api.getAllUser({}).subscribe((res: any) => {
      if (res.error) {
      } else {
        this.employeeList = res.employeeList
      }
    });
  }
  Submit() {
    this._api.ProjectAdd(this.fields).subscribe((res: any) => {
      if (res.error) {
      } else {
        this.router.navigate(['/projects']);
        // this.notificationCount = res.notificationCount
        // this._api.setcategoryList(this.categoryList)
      }
    });
  }
}
