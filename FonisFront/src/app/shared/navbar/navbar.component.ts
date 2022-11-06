import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

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
    this.dialog.open(DialogDeletedTasks, {
      width:'30%'
    })
  }
}
