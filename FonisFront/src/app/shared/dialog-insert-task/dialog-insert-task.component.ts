import {Component, Inject, OnInit} from '@angular/core';
import {Task} from "../models/task/task.model";
import {TaskService} from "../services/task/task.service";
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-insert-task',
  templateUrl: './dialog-insert-task.component.html',
  styleUrls: ['./dialog-insert-task.component.scss']
})
export class DialogInsertTaskComponent implements OnInit {

  TaskForm!: FormGroup;
  teams!: Task["team"][];
  selectedTeam!: Task["team"]["teamId"];
  constructor(private formBuilder: FormBuilder,
              private taskService: TaskService,
              private dialogRef: MatDialogRef<DialogInsertTaskComponent>,
              @Inject(MAT_DIALOG_DATA) public editData: Task,) { }

  ngOnInit(): void {
    this.getTeams();
    this.TaskForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      responsiblePerson: ['', Validators.required],
      team: ['', Validators.required]
    });
    if(this.editData){
      this.TaskForm.controls['name'].setValue(this.editData.name);
      this.TaskForm.controls['description'].setValue(this.editData.description);
      this.TaskForm.controls['responsiblePerson'].setValue(this.editData.responsiblePerson);
      this.TaskForm.controls['team'].setValue(this.editData.team.teamId);
    }
  }

  getTeams(){
    this.taskService.getTeams().subscribe( resp =>{
      this.teams= resp;
    })
  }
  selectTeam(team: Task["team"]){
    this.selectedTeam = team.teamId;
  }
  saveTask(){
    const  t = this.TaskForm.value['team'];
    let task: Task = {
      name: this.TaskForm.value['name'],
      description: this.TaskForm.value['description'],
      responsiblePerson: this.TaskForm.value['responsiblePerson'],
      boardPosition: 0,
      backlogPosition: 1,
      deleted: false,
      teamId: t,
      team: this.teams.filter(team => team.teamId === t)[0]
    }
    if(this.editData){
      task.taskId = this.editData.taskId;
      this.taskService.updateTask(task).subscribe(resp =>{
        this.dialogRef.close();
      })
    }
    this.taskService.saveTask(task).subscribe(resp =>{
      this.dialogRef.close();
    })
  }
}
