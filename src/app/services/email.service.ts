import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http : HttpClient ) { }
  addEmail(idSh,client,message,locale,recipientEmails){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json')
      .set('Authorization', 'Basic ' + btoa(unescape(encodeURIComponent(localStorage.getItem('email') + ':' + localStorage.getItem('pswd')))))
    return this.http.post("http://localhost:8080/alfresco/api/-default-/public/alfresco/versions/1/shared-links/"+idSh+'/email', {

      "client": client,
      "message": message,
      "locale": locale,
      "recipientEmails": [recipientEmails]
    }, {headers: headers})
        
    
  }

}
