import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router, private service:AuthService) {
    console.log("loginPageConstructor")
   }
  user: User;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl("", [Validators.required, Validators.email]),
      'password': new FormControl("", [Validators.required,Validators.minLength(6),]),
    });
  }



  login(){
    if(this.loginForm.valid){
      try{
        this.service.login(this.loginForm.value).subscribe((res)=>{
          console.log('res', res);
          if(res.length > 0){
            this.loginForm.reset();
            this.user = res[0]
            this.service.setCurrentUser(this.user)
            //this.router.navigate(["/"]);
            this.router.navigateByUrl('/');
          } else {
            localStorage.setItem('currentUser',null)
          }
        });
      } catch(error){
        console.log("로그인통신에러", error)
      }
    }else{
      console.log('all field is required')
    }
  }

}
