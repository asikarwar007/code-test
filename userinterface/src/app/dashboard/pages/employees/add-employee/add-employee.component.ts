import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../../../services/homepage.service';
import { User } from '../../../../models/homepage';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  fields = new User()

  constructor(
    public _api: HomeService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  Submit() {
    this._api.UserAdd(this.fields).subscribe((res: any) => {
      if (res.error) {
      } else {
        this.router.navigate(['/employees']);
        // this.notificationCount = res.notificationCount
        // this._api.setcategoryList(this.categoryList)
      }
    });
  }
}
