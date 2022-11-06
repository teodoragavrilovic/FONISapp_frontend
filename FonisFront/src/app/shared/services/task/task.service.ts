import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Task} from "../../models/task/task.model";


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://localhost:44383/api/Tasks'



  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.baseUrl);
  }
  updateTask(task:Task){
    return this.http.put<any>(this.baseUrl,task);
  }

}
