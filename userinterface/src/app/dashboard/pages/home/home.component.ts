import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../../services/homepage.service';
import { LogTime } from '../../../models/homepage';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fields = new LogTime()

  projectSelect: any;
  projectSelectName: any;
  employeeSelect: any;

  displayLogTimeList: any;
  logTimeList: any;
  projectList: any;
  projectEstimatedTime: any;
  projectTimeLogged: any;
  employeeList: any;

  constructor(
    public _api: HomeService,
    public Router: Router
  ) { }

  ngOnInit() {
    this.logTimeList = []
    this.displayLogTimeList = []
    this.projectSelect = false
    this.projectSelectName = ''

    this.projectTimeLogged = 0
    this.projectEstimatedTime = 0
    this.getData()
  }

  getData() {
    this._api.getAllProject({}).subscribe((res: any) => {
      if (res.error) {
      } else {
        this.projectList = res.projectList
        for (let i = 0; i < this.projectList.length; i++) {
          this.projectEstimatedTime += parseInt(this.projectList[i].estimatedTime)

        }
      }
    });
    this._api.getAllUser({}).subscribe((res: any) => {
      if (res.error) {
      } else {
        this.employeeList = res.employeeList
      }
    });
    this.projectTimeLogged = 0
    this._api.getAllLogTime({}).subscribe((res: any) => {
      if (res.error) {
      } else {
        this.logTimeList = res.logTimeList
        this.displayLogTimeList = res.logTimeList
        for (let i = 0; i < this.logTimeList.length; i++) {
          this.projectTimeLogged += parseInt(this.logTimeList[i].timeLogged)
                    
        }
      }
    });
  }

  projectChanged(){
    this.projectSelect = true
    this.projectTimeLogged = 0
    this.projectEstimatedTime = 0
    for (let i = 0; i < this.projectList.length; i++) {
      if (this.projectList[i]._id == this.fields.projectId) {
        this.projectEstimatedTime += parseInt(this.projectList[i].estimatedTime)
        this.projectSelectName = this.projectList[i].projectName
      }
    }
    this.displayLogTimeList = []
    for (let i = 0; i < this.logTimeList.length; i++) {
      if (this.logTimeList[i].projectId){
        if (this.logTimeList[i].projectId._id == this.fields.projectId){
          this.projectTimeLogged += parseInt(this.logTimeList[i].timeLogged)
          this.displayLogTimeList.push(this.logTimeList[i])
        }
      }
    }

    
  }
}
