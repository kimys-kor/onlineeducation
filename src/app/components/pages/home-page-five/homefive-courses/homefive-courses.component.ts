import { Component, OnInit } from '@angular/core';
import { AllcourseService } from 'src/app/services/allcourse.service';

@Component({
  selector: 'app-homefive-courses',
  templateUrl: './homefive-courses.component.html',
  styleUrls: ['./homefive-courses.component.scss']
})
export class HomefiveCoursesComponent implements OnInit {

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
