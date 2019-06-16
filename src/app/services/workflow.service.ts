import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {
  public baseUrl="http://localhost:8080/alfresco/api/-default-/public/workflow/versions/1/"
  constructor(private http:HttpClient) { }
  listworkflow(){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json')
      .set('Authorization','Basic '+btoa(unescape(encodeURIComponent(localStorage.getItem('email')+':'+localStorage.getItem('pswd')))))
    return this.http.get(this.baseUrl+"processes",{headers:headers})
  }
  processDef(){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json')
      .set('Authorization','Basic '+btoa(unescape(encodeURIComponent(localStorage.getItem('email')+':'+localStorage.getItem('pswd')))))
    return this.http.get("http://localhost:8080/alfresco/api/-default-/public/workflow/versions/1/process-definitions",{headers:headers})
  }
  addProcess(processDefinitionKey, bpm_assignee) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json')
      .set('Authorization', 'Basic ' + btoa(unescape(encodeURIComponent(localStorage.getItem('email') + ':' + localStorage.getItem('pswd')))))
    return this.http.post(this.baseUrl + "processes", {

      
        "processDefinitionKey": processDefinitionKey,
        "variables": {
          "bpm_assignee": bpm_assignee,
          
        }
     

    },{headers: headers})
  }

}
