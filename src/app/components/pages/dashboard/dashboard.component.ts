import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userInfoForm: FormGroup;
  user:User
  constructor(private service:AuthService) { }

  ngOnInit(): void {
    this.userInfoForm = this.createFormGroup();
    this.service.getCurrentuUser().subscribe(user => {
      console.log(user[0], "checkout")
      this.user = user[0]
    })
  }

  createFormGroup():  FormGroup {
    return new FormGroup({
      'name': new FormControl("", [Validators.required]),
    });
  }

  setUserInfo(){

  }

}
