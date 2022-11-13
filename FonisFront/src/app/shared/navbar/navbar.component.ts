import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogDeletedTasksComponent} from "../dialog-deleted-tasks/dialog-deleted-tasks.component";
import {AuthComponent} from "../../layout/auth/auth.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() refresh = new EventEmitter();

  constructor(private dialog: MatDialog,
              private router: Router) { }

  ngOnInit(): void {
  }
  openMain(){
    this.router.navigate([""]);
  }
  openDeleted(){
    this.dialog.open(DialogDeletedTasksComponent, {
      width:'30%'
    }).afterClosed().subscribe(value => {
      this.refresh.emit();
    })
  }
  openArchive(){
    this.router.navigate(["/archive"]);
  }
  openUsers(){
    this.router.navigate(["/users"]);
  }
}
