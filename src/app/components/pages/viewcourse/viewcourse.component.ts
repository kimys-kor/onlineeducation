import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllcourseService } from "../../../services/allcourse.service"

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.scss']
})
export class ViewcourseComponent implements OnInit {

  constructor(private router: Router, private courseservice: AllcourseService) { }
  courseid = "";
  lecturelist = [];
  lectureurllist = [];
  currentlectureurl= "";

  ngOnInit(): void {
    this.courseid = this.router.url.split('/viewcourse/')[1];

    this.courseservice.lectures(this.courseid).subscribe((res)=>{
      this.lecturelist = res.name
      this.lectureurllist = res.url
    });
  }

  btnclick(i){
    this.currentlectureurl = this.lectureurllist[i];
    console.log('흠',this.currentlectureurl);
  }
}
