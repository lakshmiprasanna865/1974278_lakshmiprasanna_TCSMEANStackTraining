import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

import { Router } from '@angular/router';
import { Course } from '../model.course';

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.css']
})
export class RetrieveComponent implements OnInit {

  courses1?:Array<Course>
  constructor(public router:Router, public proService:CoursesService) { }

  ngOnInit(): void {
    this.proService.retrieveAllCourseDetails().subscribe(result=>this.courses1=result);
  }

}
