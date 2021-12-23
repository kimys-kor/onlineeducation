import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownService {

  constructor(private _http:HttpClient) { }

  apiUrl = 'https://smits-api.bs-soft.co.kr/files/yskim@bs-soft.co.kr/%EC%8B%A4%ED%97%98%EB%AC%BC%EB%A6%AC%EC%9D%98%20%EA%B8%B0%EC%B4%88.pdf';

  //download data
  DownData():Observable<any> 
  {
    return this._http.get(`${this.apiUrl}`);
  }
}
