import { Component, OnInit } from '@angular/core';
import {Task} from "../../../../shared/models/task/task.model";
import {TaskService} from "../../../../shared/services/task/task.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  columns = ['Ready','In Progress','Finished','Done'];
  tasks! : Task[];
  filteredTasks = new Array(4);
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }
  getTasks(){
    this.taskService.getTasks().subscribe( resp =>{
      this.filteredTasks = new Array(4);
      this.tasks = resp;
      for(let i = 0; i<this.columns.length;i++){
        this.filteredTasks[i] = this.filterTasks(i);
      }
    })
  }
   filterTasks(i: number){
    if(this.tasks === undefined || this.tasks.length === 0)
      return [];
    let t =  this.tasks.filter(task => {
       return task.boardPosition == i + 1
    });
    console.log(t);
    return t;
   }
}
