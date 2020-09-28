import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})

export class HomeService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  httpOptions3 = {
    headers: new HttpHeaders({

    })
  };

  API_URL = environment.Api_url;
  constructor(
    private httpClient: HttpClient,
  ) { }

  // User
  UserAdd(data) {
    return this.httpClient.post(this.API_URL + '/user/employee/add', data)
  }
  getAllUser(data) {
    return this.httpClient.post(this.API_URL + '/user/employee/get', data)
  }
  getUserbyId(data) {
    return this.httpClient.post(this.API_URL + '/user/employee/single', data)
  }
  updateUser(data) {
    return this.httpClient.post(this.API_URL + '/user/employee/edit', data)
  }
  deleteUser(data) {
    return this.httpClient.post(this.API_URL + '/user/employee/delete', data)
  }

  // project
  ProjectAdd(data) {
    return this.httpClient.post(this.API_URL + '/user/project/add', data)
  }
  getAllProject(data) {
    return this.httpClient.post(this.API_URL + '/user/project/get', data)
  }
  getProjectbyId(data) {
    return this.httpClient.post(this.API_URL + '/user/project/single', data)
  }
  updateProject(data) {
    return this.httpClient.post(this.API_URL + '/user/project/edit', data)
  }
  deleteProject(data) {
    return this.httpClient.post(this.API_URL + '/user/project/delete', data)
  }

  // Log Time
  LogTimeAdd(data) {
    return this.httpClient.post(this.API_URL + '/user/logTime/add', data)
  }
  getAllLogTime(data) {
    return this.httpClient.post(this.API_URL + '/user/logTime/get', data)
  }
  getLogTimebyId(data) {
    return this.httpClient.post(this.API_URL + '/user/logTime/single', data)
  }
  updateLogTime(data) {
    return this.httpClient.post(this.API_URL + '/user/logTime/edit', data)
  }
  deleteLogTime(data) {
    return this.httpClient.post(this.API_URL + '/user/logTime/delete', data)
  }
}
