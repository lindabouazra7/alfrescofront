import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  form(idTask) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json')
      .set('Authorization', 'Basic ' + btoa(unescape(encodeURIComponent(localStorage.getItem('email') + ':' + localStorage.getItem('pswd')))))
    return this.http.get("http://127.0.0.1:8080/alfresco/api/-default-/public/workflow/versions/1/tasks/"+idTask+"/task-form-model", {headers: headers})

  }
}
