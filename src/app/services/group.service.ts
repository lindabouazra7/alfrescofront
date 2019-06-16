import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  public baseUrl = "http://localhost:8080/alfresco/api/-default-/public/alfresco/versions/1/"

  constructor(private http: HttpClient) {
  }

  listeGroup() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json')
      .set('Authorization', 'Basic ' + btoa(unescape(encodeURIComponent(localStorage.getItem('email')+':'+localStorage.getItem('pswd')))))
    return this.http.get(this.baseUrl + "groups", {headers: headers})

  }
}
