import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FolderService {
  public baseUrl="http://localhost:8080/alfresco/api/-default-/public/alfresco/versions/1/"
  constructor(private http:HttpClient) { }
  listeFolder(id){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json')
      .set('Authorization','Basic '+btoa(unescape(encodeURIComponent(localStorage.getItem('email')+':'+localStorage.getItem('pswd')))))
    return this.http.get(this.baseUrl+"nodes/"+id,{headers:headers})

  }
  listeFolderChildren(id){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json')
      .set('Authorization','Basic '+btoa(unescape(encodeURIComponent(localStorage.getItem('email')+':'+localStorage.getItem('pswd')))))
    return this.http.get(this.baseUrl+"nodes/"+id+'/children',{headers:headers})


  }


}
