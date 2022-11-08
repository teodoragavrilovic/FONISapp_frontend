import { Component, OnInit } from '@angular/core';
import {Task} from "../models/task/task.model";
import {TaskService} from "../services/task/task.service";

@Component({
  selector: 'app-dialog-deleted-tasks',
  templateUrl: './dialog-deleted-tasks.component.html',
  styleUrls: ['./dialog-deleted-tasks.component.scss']
})
export class DialogDeletedTasksComponent implements OnInit {

  tasks! : Task[];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(){
    this.taskService.getTasks().subscribe( resp =>{
      this.tasks = this.filterBacklogTasks(resp);
    })
  }
  filterBacklogTasks(tasks: Task[]): Task[]{
    let filtered: Task[] = [];
    for(let i = 0; i<tasks.length; i++){
      if(tasks[i].deleted){
        filtered.push(tasks[i]);
      }
    }
    return filtered;
  }
}
