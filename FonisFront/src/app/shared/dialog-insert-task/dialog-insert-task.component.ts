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
              @Inject(MAT_DIALOG_DATA) public editTask: Task,) { }

  ngOnInit(): void {
    this.getTeams();
    this.TaskForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      responsiblePerson: ['', Validators.required],
      team: ['', Validators.required]
    });
    if(this.editTask){
      this.TaskForm.controls['name'].setValue(this.editTask.name);
      this.TaskForm.controls['description'].setValue(this.editTask.description);
      this.TaskForm.controls['responsiblePerson'].setValue(this.editTask.responsiblePerson);
      this.TaskForm.controls['team'].setValue(this.editTask.team.name);
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
    if(this.editTask){
      task.taskId = this.editTask.taskId;
      this.taskService.updateTask(task).subscribe(resp =>{
        this.dialogRef.close();
      })
    }else {
      this.taskService.saveTask(task).subscribe(resp => {
        this.dialogRef.close();
      })
    }
  }
}
