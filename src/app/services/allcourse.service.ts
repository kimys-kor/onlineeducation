import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AllcourseService {

  constructor(private _http:HttpClient) { }

  apiUrl = "https://smits-api.bs-soft.co.kr/courses/"


  // 전체강의 페이지
  allcourses():Observable<any> 
    {
      return this._http.get(`${this.apiUrl}`);
    }


  // 강의디테일 페이지
  singlecourse(data:any):Observable<any>
    {
      return this._http.get(`${this.apiUrl}`+`${data}`);
    }

  lectures(data:any):Observable<any>
  {
    return this._http.get(`${this.apiUrl}`+`${data}`+'/lectures/')
  }
  
  quizs(data:any):Observable<any>
  {
    return this._http.get(`${this.apiUrl}`+`${data}`+'/quizs/')
  }


  

}
