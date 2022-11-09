import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Task} from "../../models/task/task.model";
import {User} from "../../models/user/user.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://localhost:44383/api/Users'
  secondUrl = 'https://localhost:44383/api/Positions'

  getUsers(): Observable<User[]>{
    console.log("ovde trazim studente");
    return this.http.get<User[]>(this.baseUrl);
  }

  getPositions(): Observable<User["position"][]>{
    return this.http.get<User["position"][]>(this.secondUrl);
  }

  saveUser(user: User){
    return this.http.post<any>(this.baseUrl, user);
  }
}
