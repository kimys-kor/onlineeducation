import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllcourseService } from "../../../services/allcourse.service"

@Component({
  selector: 'app-courses-details-page',
  templateUrl: './courses-details-page.component.html',
  styleUrls: ['./courses-details-page.component.scss']
})
export class CoursesDetailsPageComponent implements OnInit {

  constructor(private router: Router, private courseservice: AllcourseService) { }
  courseid = "";
  coursedetail = [];
  learnwhat = [];
  targetstudent = [];
  int = [];

  lectures = [];
  quizs = [];
  

  ngOnInit(): void {
    this.courseid = this.router.url.split('/single-courses/')[1];

    this.courseservice.singlecourse(this.courseid).subscribe((res)=>{
      this.coursedetail.push(res);
      this.learnwhat = res.learn_what.split("\n")
      this.targetstudent = res.target_student.split("\n")
      this.int = res.intro.split("\n")
    });

    this.courseservice.lectures(this.courseid).subscribe((res)=>{
      console.log('강의확인',res);
      this.lectures.push(res);
    })

    this.courseservice.quizs(this.courseid).subscribe((res)=>{
      this.quizs.push(res);
    })
  }

  down(){
    console.log('파일다운')
      // try{
      //   this.service.DownData().subscribe((res)=>{

      //   });
      // } catch(error){
      //     console.log(error)
      // }
      
  }


}
