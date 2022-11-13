import {Component, EventEmitter, Injectable, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Task} from "../../../../shared/models/task/task.model";
import {TaskService} from "../../../../shared/services/task/task.service";
import {TaskComponent} from "../../../../shared/task/task.component";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnChanges {
  columns = ['Ready','In Progress','Finished','Done'];
  @Input() tasks! : Task[];
  @Output() refresh = new EventEmitter();
  filteredTasks = new Array(4);
  @Injectable() taskComponent!: TaskComponent;
  constructor(private taskService: TaskService) { }

  ngOnChanges(): void {
    for(let i = 0; i<this.columns.length;i++){
      this.filteredTasks[i] = this.filterTasksColumn(i);
    }
  }
  filterTasksColumn(i: number){
    if(this.tasks === undefined || this.tasks.length === 0)
      return [];
    let t =  this.tasks.filter(task => {
       return task.boardPosition == i + 1
    });
    console.log(t);
    return t;
  }

  moveTaskToNextColumn(task: Task) {
    task.boardPosition++;
    this.taskService.updateTask(task).subscribe((resp) => {
      this.refresh.emit();
    });
  }

  refreshList() {
    this.refresh.emit();
  }
}
