import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(public router:Router, public proService:CoursesService) { }

  ngOnInit(): void {
  }

  delete(courseRef:any){
    console.log("Record deleted Successfully")
    this.proService.deleteCourseDetailsInfo(courseRef);
  }


}
