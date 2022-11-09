import { Component, OnInit } from '@angular/core';
import {Task} from "../../../../shared/models/task/task.model";
import {ArchivedTask} from "../../../../shared/models/archived-task/archived-task.model";
import {Group} from "../../../../shared/models/group/group.model";
import {GroupService} from "../../../../shared/services/group/group.service";

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  groups! : Group[];
  constructor(private  groupService: GroupService) { }

  ngOnInit(): void {
    this.getGroups();
  }

  getGroups(){
    this.groupService.getGroups().subscribe( resp =>{
      //console.log(resp);
      this.groups = resp;
    })
  }

}
