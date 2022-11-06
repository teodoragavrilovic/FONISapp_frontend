import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../models/task/task.model";
import {TaskService} from "../services/task/task.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task!: Task;
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }
  moveToNext(task:Task){
    if(task.backlogPosition!=0){
      task.backlogPosition = 0;
    }
    task.boardPosition++;
    this.taskService.updateTask(task).subscribe();
  }
  deleteTask(task: Task){
    task.deleted = true;
    this.taskService.updateTask(task).subscribe();
  }
  moveUp(task: Task){
    task.boardPosition++;
    this.taskService.updateTask(task).subscribe();
  }
  moveDown(task: Task){
    task.boardPosition--;
    this.taskService.updateTask(task).subscribe();
  }
}
