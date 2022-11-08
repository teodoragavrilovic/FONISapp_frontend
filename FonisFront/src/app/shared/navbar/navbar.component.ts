import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogDeletedTasksComponent} from "../dialog-deleted-tasks/dialog-deleted-tasks.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDeleted(){
    this.dialog.open(DialogDeletedTasksComponent, {
      width:'30%'
    })
  }
}
