import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from "../models/task/task.model";
import {TaskService} from "../services/task/task.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogInsertTaskComponent} from "../dialog-insert-task/dialog-insert-task.component";
import {ArchivedTask} from "../models/archived-task/archived-task.model";



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task!: Task;
  @Output() moveNext = new EventEmitter();
  tasks!: Task[];
  toArchive!: Task[];
  checked: boolean = false;
  constructor(private taskService: TaskService,
              private dialog: MatDialog,
  ) { }

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
    //filtered = this.orderBacklog(filtered);
    return filtered;
  }
  moveToNext(task:Task){
    this.moveNext.emit(task);
  }
  deleteTask(task: Task){
    task.deleted = true;
    this.taskService.updateTask(task).subscribe();
  }
  returnTask(task: Task){
    task.deleted = false;
    this.taskService.updateTask(task).subscribe();
  }
  moveUp(task: Task){
    let upTask: Task;
    if(task.backlogPosition > 1){
      for(let i = 0;i<this.tasks.length;i++){
        if(this.tasks[i].backlogPosition===task.backlogPosition-1){
          upTask=this.tasks[i];
          upTask.backlogPosition++;
          task.backlogPosition--;
          this.taskService.updateTask(task).subscribe();
          this.taskService.updateTask(upTask).subscribe();
          return;
        }
      }
    }
  }
  moveDown(task: Task){
    task.backlogPosition++;
    this.taskService.updateTask(task).subscribe();
  }
  editTask(task: Task){
    this.dialog.open(DialogInsertTaskComponent, {
      width: '30%',
      data: task
    })
  }
  addToArchive(task: Task){
    this.checked = !this.checked;
    this.toArchive.push(task);
  }
  outFromArchive(task: Task){
    this.checked = !this.checked;
    this.toArchive;
  }

}
