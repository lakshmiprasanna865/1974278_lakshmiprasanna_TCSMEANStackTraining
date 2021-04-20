import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './model.course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(public http:HttpClient) { }

  storeCourseDetailsInfo(courseRef:any){
    this.http.post("http://localhost:9090/course/storeCourseDetails",courseRef).
    subscribe(result=>console.log(result),error=>console.log(error))
  }

  retrieveAllCourseDetails():Observable<Course[]>{
    return this.http.get<Course[]>("http://localhost:9090/course/allCourseDetails")
  }

  deleteCourseDetailsInfo(courseRef:any){
    this.http.delete("http://localhost:9090/course/deleteCourseById/:cid",courseRef).
    subscribe(result=>console.log(result),error=>console.log(error))
  }

  addCourseDetailsInfo(courseRef:any){
    this.http.put("http://localhost:9090/course/updateCoursePrice",courseRef).
    subscribe(result=>console.log(result),error=>console.log(error))
  }
}
