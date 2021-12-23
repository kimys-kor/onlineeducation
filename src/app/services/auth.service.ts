import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) { }

    // connect frontend to backend

    apiUrl = 'https://smits-api.bs-soft.co.kr/';

    //get all data
    getAllData():Observable<any> 
    {
      return this._http.get(`${this.apiUrl}`+'user/');
    }
    
    //create data
    createData(data:any):Observable<any>
    {
      console.log(data, 'createapi=> ')
      localStorage.setItem('currentUser', data);
      return this._http.post(`${this.apiUrl}`+'user/', data);
    }

    login(data:any):Observable<any>
    {
      console.log(data, 'loginapi=>')
      return this._http.post(`${this.apiUrl}`+'user/'+data['email']+'/', data);
    }

    logout(){
      console.log('logout')
      localStorage.removeItem('currentUser');
    }

    getCurrentuUser():Observable<Object>
    {
      const currentUserEmail = localStorage.getItem('currentUser');
      console.log(currentUserEmail, 'getCurrentUser')
      if(currentUserEmail == null){
        return null
      }
      return this._http.get(`${this.apiUrl}`+'user/'+currentUserEmail+'/');
    }

    setCurrentUser(user)
    {
      console.log(user, 'setCurrentUser')
      localStorage.setItem('currentUser', user['email']);
    }
    

}
