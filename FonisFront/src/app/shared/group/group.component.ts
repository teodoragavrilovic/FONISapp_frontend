import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Group} from "../models/group/group.model";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  @Input() group!: Group;
  @Output() viewedGroup = new EventEmitter();
  groups!: Group[];
  constructor() { }

  ngOnInit(): void {

  }
  viewGroup(group: Group){
    this.viewedGroup.emit(group);
  }
}
