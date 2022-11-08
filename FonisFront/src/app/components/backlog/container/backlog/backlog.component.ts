import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../../../shared/services/task/task.service";
import  {Task} from "../../../../shared/models/task/task.model";
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogInsertTaskComponent} from "../../../../shared/dialog-insert-task/dialog-insert-task.component";

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})

export class BacklogComponent implements OnInit {
  tasks! : Task[];
  constructor(private taskService: TaskService, private dialog: MatDialog) { }

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
      if(!tasks[i].deleted && tasks[i].backlogPosition != 0 ){
        filtered.push(tasks[i]);
      }
    }
    filtered = this.orderBacklog(filtered);
    return filtered;
  }

  orderBacklog(tasks: Task[]): Task[]{
    let a: Task;
    for(let i = 0; i<tasks.length-1; i++){
      for(let j = i; j<tasks.length; j++) {
        if (tasks[i].backlogPosition > tasks[j].backlogPosition) {
          a = tasks[i];
          tasks[i] = tasks[j];
          tasks[j] = a;
        }
      }
    }
    return tasks;
  }
  openTaskDialog(){
    this.dialog.open(DialogInsertTaskComponent, {
      width: '30%'
    }).afterClosed().subscribe(value => {
      this.getTasks();
    });
  }

  moveTaskToBoard(task: Task) {
    task.backlogPosition = 0;
    task.boardPosition++;
    this.taskService.updateTask(task).subscribe((resp) => {
      this.getTasks();
    });
  }
}
