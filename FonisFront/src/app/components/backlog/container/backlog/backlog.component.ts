import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../../../shared/services/task/task.service";
import  {Task} from "../../../../shared/models/task/task.model";


@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})

export class BacklogComponent implements OnInit {
  tasks! : Task[];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(){
    this.taskService.getTasks().subscribe( resp =>{
      this.tasks = resp;
    })
  }
}
