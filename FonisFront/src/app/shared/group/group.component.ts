import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../models/task/task.model";
import {ArchivedTask} from "../models/archived-task/archived-task.model";
import {Group} from "../models/group/group.model";
import {GroupService} from "../services/group/group.service";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  @Input() group!: Group;
  groups!: Group[];
  constructor() { }

  ngOnInit(): void {

  }

}
