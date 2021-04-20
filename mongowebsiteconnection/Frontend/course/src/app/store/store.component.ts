import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(public router:Router, public proService:CoursesService) { }

  ngOnInit(): void {
  }

  storeProduct(courseRef:any){
    console.log(courseRef);
    console.log("Record Stored Successfully")
    this.proService.storeCourseDetailsInfo(courseRef);
  }

}
