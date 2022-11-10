import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Group} from "../../models/group/group.model";


@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://localhost:44383/api/Groups'

  getGroups(): Observable<Group[]>{
    return this.http.get<Group[]>(this.baseUrl);
  }
  saveGroup(group: Group){
    return this.http.post<any>(this.baseUrl, group);
  }

}
