import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks:Array<Task>=[];

  constructor(public taskSer: TaskService) { }

  ngOnInit(): void {
    this.taskSer.loadTaskDetails().subscribe(result=>this.tasks=result,
      error=>console.log(error))
  }

  storeUser(taskRef:any){
    console.log(taskRef)
    this.taskSer.storeEmployee(taskRef)
  }



}
