import { Component, Input, OnInit } from '@angular/core';
import {Task} from "../../../../shared/models/task/task.model";

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {
  @Input() name: string = '';
  @Input() tasks!: Task[];

  constructor() { }

  ngOnInit(): void {
  }

}
