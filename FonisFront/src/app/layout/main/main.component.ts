import { Component, OnInit } from '@angular/core';
import {Task} from "../../shared/models/task/task.model";
import {TaskService} from "../../shared/services/task/task.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  tasks! : Task[];
  backlogTasks!: Task[];
  boardTasks!: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(){
    this.taskService.getTasks().subscribe( resp => {
      this.tasks = resp;
      this.backlogTasks = this.tasks.filter(task => !task.deleted && task.backlogPosition !== 0)
      this.boardTasks = this.tasks.filter(task => !task.deleted && task.backlogPosition === 0)
    })
  }

}
