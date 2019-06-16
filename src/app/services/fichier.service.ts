import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FichierService {


  constructor(private http:HttpClient) { }
  createfichier(filedata){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json')
      .set('Authorization','Basic '+btoa(unescape(encodeURIComponent(localStorage.getItem('email')+':'+localStorage.getItem('pswd')))))
    return this.http.post("http://localhost:8080/alfresco/api/-default-/public/alfresco/versions/1/nodes/-my-/children",{
      "filedata":filedata


    },{headers:headers})

  }
  listeFichier(id){

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json')
      .set('Authorization','Basic '+btoa(unescape(encodeURIComponent(localStorage.getItem('email')+':'+localStorage.getItem('pswd')))))
    return this.http.get("http://localhost:8080/alfresco/api/-default-/public/alfresco/versions/1/nodes/"+id+'/content',{headers:headers})

  }
}
