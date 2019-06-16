import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  public baseUrl = "http://localhost:8080/alfresco/api/-default-/public/alfresco/versions/1/nodes/-my-/children"


  constructor() {
  }

  // //ajoutFacture() {
  //   let headers = new HttpHeaders();
  //   headers = headers.set('Content-Type', 'application/json')
  //     .set('Authorization', 'Basic ' + btoa(unescape(encodeURIComponent(localStorage.getItem('email') + ':' + localStorage.getItem('pswd')))))
  //   return this.http.post(this.baseUrl + "people", {
  //     "id": id,
  //     "firstName": name,
  //     "lastName": lastname,
  //     "email": email,
  //     "password": password
  //
  //   }, {headers: headers})
  // }
}
