import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../models/task/task.model";
import {TaskService} from "../services/task/task.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogInsertTaskComponent} from "../dialog-insert-task/dialog-insert-task.component";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task!: Task;
  constructor(private taskService: TaskService,
              private dialog: MatDialog) { }

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
  editTask(task: Task){
    this.dialog.open(DialogInsertTaskComponent, {
      width: '30%',
      data: task
    })
  }
}
