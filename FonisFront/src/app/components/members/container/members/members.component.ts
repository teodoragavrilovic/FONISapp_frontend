import { Component, OnInit } from '@angular/core';
import {User} from "../../../../shared/models/user/user.model";
import {UserService} from "../../../../shared/services/user/user.service";

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  users!: User[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    console.log("CAOO133");

    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe( resp =>{
      console.log("CAOO");
      this.users = resp;
    })
  }
}
