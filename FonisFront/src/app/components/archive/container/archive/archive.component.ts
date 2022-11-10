import { Component, OnInit } from '@angular/core';
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
      this.groups = resp;
    })
  }

}
