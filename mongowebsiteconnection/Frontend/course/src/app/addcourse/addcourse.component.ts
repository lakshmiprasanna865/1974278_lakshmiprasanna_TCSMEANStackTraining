import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  constructor(public router:Router, public proService:CoursesService) { }

  ngOnInit(): void {
  }

  add(courseRef:any){
    console.log("Record updated Successfully")
    this.proService.addCourseDetailsInfo(courseRef);
  }

}
