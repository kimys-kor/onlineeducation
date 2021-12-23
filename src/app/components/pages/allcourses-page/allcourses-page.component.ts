import { Component, OnInit } from '@angular/core';
import { AllcourseService } from 'src/app/services/allcourse.service';


@Component({
  selector: 'app-allcourses-page',
  templateUrl: './allcourses-page.component.html',
  styleUrls: ['./allcourses-page.component.scss']
})
export class AllCoursesPageComponent implements OnInit {

  constructor(private service:AllcourseService) { }
  allcourses = [];

  ngOnInit(): void {
    const getallcourses = this.service.allcourses().subscribe((res)=>{
      if(res.length > 0){
        for(let i of res){
          this.allcourses.push(i);
        }
      }
    });
    
  }
}
