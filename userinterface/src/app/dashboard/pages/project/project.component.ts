import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../../services/homepage.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projectList: any;

  constructor(
    public _api: HomeService,
    public Router: Router
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
  }
}
