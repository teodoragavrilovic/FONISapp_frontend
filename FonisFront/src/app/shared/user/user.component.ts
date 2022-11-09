import {Component, Input, OnInit} from '@angular/core';
import {User} from "../models/user/user.model";
import {UserService} from "../services/user/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user!: User;
  users!: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    console.log("Hej usery")
    //this.getUseres();
  }

  getUseres(){
    this.userService.getUsers().subscribe( resp =>{
      this.users = resp;
    })
  }

}
