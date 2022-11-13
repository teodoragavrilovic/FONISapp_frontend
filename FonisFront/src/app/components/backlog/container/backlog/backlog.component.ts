import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {TaskService} from "../../../../shared/services/task/task.service";
import  {Task} from "../../../../shared/models/task/task.model";
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogInsertTaskComponent} from "../../../../shared/dialog-insert-task/dialog-insert-task.component";

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})

export class BacklogComponent implements OnChanges {
  @Input() tasks! : Task[];
  @Output() refresh = new EventEmitter();
  constructor(private taskService: TaskService, private dialog: MatDialog) { }

  ngOnChanges(): void {
    if(this.tasks && this.tasks.length > 0) {
      this.orderBacklog();
    }
  }

  orderBacklog() {
    let a: Task;
    console.log(this.tasks)
    for(let i = 0; i<this.tasks.length-1; i++){
      for(let j = i; j<this.tasks.length; j++) {
        if (this.tasks[i].backlogPosition > this.tasks[j].backlogPosition) {
          a = this.tasks[i];
          this.tasks[i] = this.tasks[j];
          this.tasks[j] = a;
        }
      }
    }
  }
  openTaskDialog(){
    this.dialog.open(DialogInsertTaskComponent, {
      width: '30%',
      panelClass: 'my-custom-dialog-class'
    }).afterClosed().subscribe(value => {
      this.refresh.emit();
    });
  }

  moveTaskToBoard(task: Task) {
    task.backlogPosition = 0;
    task.boardPosition++;
    this.taskService.updateTask(task).subscribe((resp) => {
      this.refresh.emit();
    });
  }

  refreshList() {
    this.refresh.emit();
  }
}
