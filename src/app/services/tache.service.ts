import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TacheService {
  private baseUrl = "http://localhost:8080/alfresco/api/-default-/public/workflow/versions/1/tasks"

  constructor(private http: HttpClient) {
  }

  mesTache() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json')
      .set('Authorization', 'Basic ' + btoa(unescape(encodeURIComponent(localStorage.getItem('email') + ':' + localStorage.getItem('pswd')))))
    return this.http.get("http://localhost:8080/alfresco/api/-default-/public/workflow/versions/1/tasks",
      {headers: headers})

  }

  getTache(idTache) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json')
      .set('Authorization', 'Basic ' + btoa(unescape(encodeURIComponent(localStorage.getItem('email') + ':' + localStorage.getItem('pswd')))))

    return this.http.get("http://localhost:8080/alfresco/api/-default-/public/workflow/versions/1/tasks" + idTache, {headers: headers})
  }

  updateTache(idTache, state, description) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json')
      .set('Authorization', 'Basic ' + btoa(unescape(encodeURIComponent(localStorage.getItem('email') + ':' + localStorage.getItem('pswd')))))

    return this.http.put("http://localhost:8080/alfresco/api/-default-/public/workflow/versions/1/tasks" + idTache, {
      "state": state,
      "description": description,

    }, {headers: headers})
 

  }
  form(){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json')
      .set('Authorization', 'Basic ' + btoa(unescape(encodeURIComponent(localStorage.getItem('email') + ':' + localStorage.getItem('pswd')))))
    return this.http.get("http://127.0.0.1:8080/alfresco/api/-default-/public/workflow/versions/1/tasks/980/task-form-model", {headers: headers})
  }
}
