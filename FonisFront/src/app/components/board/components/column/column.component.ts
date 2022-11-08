import {Component, EventEmitter, Injectable, Input, OnInit, Output} from '@angular/core';
import {Task} from "../../../../shared/models/task/task.model";
import {ArchivedTask} from "../../../../shared/models/archived-task/archived-task.model";
import {TaskService} from "../../../../shared/services/task/task.service";
import {TaskComponent} from "../../../../shared/task/task.component";

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {
  @Input() name: string = '';
  @Input() tasks!: Task[];
  @Output() moveTaskToNextColumn = new EventEmitter();

  @Injectable() taskComponent!: TaskComponent;

  archivedTask!: ArchivedTask[];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  moveNext(task: Task) {
    this.moveTaskToNextColumn.emit(task);
  }

  createArchive(){
    for(let i=0;i<this.taskComponent.toArchive.length;i++){
      let archTask: ArchivedTask = {
        name:this.taskComponent.toArchive[i].name,
        description:this.taskComponent.toArchive[i].description,
        responsiblePerson:this.taskComponent.toArchive[i].responsiblePerson,
        team:this.taskComponent.toArchive[i].team.name
      }
      this.archivedTask.push(archTask);
    }
    console.log(this.archivedTask);
  }
}
