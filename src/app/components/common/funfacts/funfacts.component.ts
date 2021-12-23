import { Component, OnInit } from '@angular/core';
import { AllcourseService } from "../../../services/allcourse.service"

@Component({
  selector: 'app-funfacts',
  templateUrl: './funfacts.component.html',
  styleUrls: ['./funfacts.component.scss']
})



export class FunfactsComponent implements OnInit {

  constructor(private courseservice: AllcourseService) { }
  allcourses = [];
  coursesize = 150;
  myEndVal1 = 6;
  myEndVal2 = 0;
  myEndVal3 = 0;
  myEndVal4 = 0;
  

  ngOnInit(): void {
    const getallcourses = this.courseservice.allcourses().subscribe((res)=>{
      if(res.length > 0){
        this.myEndVal2 = res.length
      }
      this.coursesize = this.allcourses.length
      console.log(this.coursesize)
    });
  }
}
