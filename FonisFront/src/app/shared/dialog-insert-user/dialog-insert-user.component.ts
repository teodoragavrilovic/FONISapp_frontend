import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/user/user.service";
import {User} from "../models/user/user.model";


@Component({
  selector: 'app-dialog-insert-user',
  templateUrl: './dialog-insert-user.component.html',
  styleUrls: ['./dialog-insert-user.component.scss']
})
export class DialogInsertUserComponent implements OnInit {

  UserForm! :FormGroup;
  positions!: User["position"][];
  selectedPosition!: User["position"]["positionId"];
  constructor(private formBuilder: FormBuilder,
              private  userService: UserService,
             ) { }

  ngOnInit(): void {
    this.getPositions();
    this.UserForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      position: ['', Validators.required],
    });
  }

  getPositions(){
    this.userService.getPositions().subscribe( resp =>{
      this.positions= resp;
    })
  }
  selectPosition(position: User["position"]){
    this.selectedPosition = position.positionId;
  }
  saveUser(){
    const  p = this.UserForm.value['position'];
    let user: User = {
      admin: true,
      username: this.UserForm.value['username'],
      password:"test",
      name: this.UserForm.value['name'],
      newPass: true,
      positionId: p,
      position: this.positions.filter(position => position.positionId === p)[0],

    };
    //console.log(user);
    this.userService.saveUser(user).subscribe();

  }
}
