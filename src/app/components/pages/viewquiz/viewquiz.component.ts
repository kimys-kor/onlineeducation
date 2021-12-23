import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllcourseService } from "../../../services/allcourse.service"
import { FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';



@Component({
  selector: 'app-viewquiz',
  templateUrl: './viewquiz.component.html',
  styleUrls: ['./viewquiz.component.scss']
})
export class ViewquizComponent implements OnInit {
  quizForm: FormGroup;

  constructor(private router: Router, private courseservice: AllcourseService) { }
  courseid = "";
  answer = [];

  question = [];
  imageurl = [];
  choices = [];
  quiztitle = [];

  myanswer = [];

  curquestion = [];
  curimageurl = [];
  curchoices = [];
  curindex = 0;

  ngOnInit(): void {
    this.quizForm = new FormGroup({
      'question': new FormControl("", [Validators.required]),
    });

    this.courseid = this.router.url.split('/viewquiz/')[1];

    this.courseservice.quizs(this.courseid).subscribe((res)=>{
      console.log(res);
      this.answer = res.answer;
      this.choices = res.choices;
      this.imageurl = res.image;
      this.question = res.question;
      this.quiztitle = res.quiz;

      this.curquestion = this.question[0];
      this.curimageurl = this.imageurl[0];
      this.curchoices = this.choices[0].split('\n');
    });
  }

  btnclick(i){
    this.curindex = i;
    this.curquestion = this.question[i]
    this.curimageurl = this.imageurl[i]
    this.curchoices = this.choices[i].split('\n');
  }

  submit(){
    console.log(this.myanswer)
    if(this.quizForm.valid){
      if(this.quizForm.value.question == this.answer[this.curindex]){
        alert('정답입니다!!!')
        this.myanswer.push(1)
      }else{
        alert('다시 풀어보세요')
        this.myanswer.push(0)
      }
    }
  }
}
