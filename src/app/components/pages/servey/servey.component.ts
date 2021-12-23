import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { AuthService } from "../../../services/auth.service"


@Component({
  selector: 'app-servey',
  templateUrl: './servey.component.html',
  styleUrls: ['./servey.component.scss']
})
export class ServeyComponent implements OnInit {
  surveyForm: FormGroup;



  constructor(private router: Router, ) { }

  ngOnInit(): void {
    this.surveyForm = new FormGroup({
      'question1': new FormControl("", [Validators.required]),
      'question2': new FormControl("", [Validators.required]),
      'question3': new FormControl("", [Validators.required]),
    });
  }



  submit(){
    if(this.surveyForm.valid){
      console.log(this.surveyForm.value);
      this.router.navigate(["/certificate"]);
    }else{
      console.log('all field is required')
    }
  }
}
