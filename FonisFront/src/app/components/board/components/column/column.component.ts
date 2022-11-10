import {Component, EventEmitter, Injectable, Input, OnInit, Output} from '@angular/core';
import {Task} from "../../../../shared/models/task/task.model";
import {ArchivedTask} from "../../../../shared/models/archived-task/archived-task.model";
import {TaskService} from "../../../../shared/services/task/task.service";
import {TaskComponent} from "../../../../shared/task/task.component";
import {MatDialog} from "@angular/material/dialog";
import {DialogArchiveTaskComponent} from "../../../../shared/dialog-archive-task/dialog-archive-task.component";

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

  archivedTask: ArchivedTask[] =[];

  constructor(private taskService: TaskService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  moveNext(task: Task) {
    this.moveTaskToNextColumn.emit(task);
  }

  createArchive(){
    for(let i=0;i<this.tasks.length;i++) {
      if (this.tasks[i].checked === true) {
        let archTask: ArchivedTask = {
          name: this.tasks[i].name,
          description: this.tasks[i].description,
          responsiblePerson: this.tasks[i].responsiblePerson,
          team: this.tasks[i].team.name
        }
        this.archivedTask.push(archTask);
      }
    }
    console.log(this.tasks);
    this.dialog.open(DialogArchiveTaskComponent, {
      width: '30%',
      data: this.archivedTask
    });
  }
}
