import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
public baseUrl="http://localhost:8080/alfresco/api/-default-/public/alfresco/versions/1/"
  constructor(private http:HttpClient) { }
  listeUser(){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json')
    .set('Authorization','Basic '+btoa(unescape(encodeURIComponent(localStorage.getItem('email')+':'+localStorage.getItem('pswd')))))
    return this.http.get(this.baseUrl+"people",{headers:headers})

  }


login(username,pswd){
  let headers = new HttpHeaders();
  headers = headers.set('Content-Type', 'application/json')
    .set('Authorization','Basic '+btoa(unescape(encodeURIComponent(localStorage.getItem('email')+':'+localStorage.getItem('pswd')))))
  console.log(username,pswd)
  return this.http.post('http://localhost:8080/alfresco/api/-default-/public/authentication/versions/1/tickets',{"userId":username,"password":pswd},{headers:headers})

}
inscription(id,name,lastname,email,password){
  let headers = new HttpHeaders();
  headers = headers.set('Content-Type', 'application/json')
    .set('Authorization','Basic '+btoa(unescape(encodeURIComponent('admin:admin'))))
  return this.http.post(this.baseUrl+"people",{
    "id":id,
    "firstName": name,
    "lastName": lastname,
    "email":email,
    "password": password

  },{headers:headers})


}
getUser(){
  let headers = new HttpHeaders();
  headers = headers.set('Content-Type', 'application/json')
  .set('Authorization','Basic '+btoa(unescape(encodeURIComponent(localStorage.getItem('email')+':'+localStorage.getItem('pswd')))))
  return this.http.get("http://localhost:8080/alfresco/api/-default-/public/alfresco/versions/1/people/-me-",{headers:headers})
}
changermdp(password,id,key){
  let headers = new HttpHeaders();
  headers = headers.set('Content-Type', 'application/json')
    .set('Authorization','Basic '+btoa(unescape(encodeURIComponent(localStorage.getItem('email')+':'+localStorage.getItem('pswd')))))
  return this.http.post("http://localhost:8080/alfresco/api/-default-/public/alfresco/versions/1/people/-me-/reset-password",{
    "password":password,
    "id": id,
    "key": key,


  },{headers:headers})

}
infoUser(){
  let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json')
    .set('Authorization','Basic '+btoa(unescape(encodeURIComponent(localStorage.getItem('email')+':'+localStorage.getItem('pswd')))))
    return this.http.get("http://localhost:8080/alfresco/api/-default-/public/alfresco/versions/1/people/-me-/activities",{headers:headers})

}
updateUser(id,name,lastname,email,password){
  let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json')
    .set('Authorization','Basic '+btoa(unescape(encodeURIComponent(localStorage.getItem('email')+':'+localStorage.getItem('pswd')))))
    return this.http.put("http://localhost:8080/alfresco/api/-default-/public/alfresco/versions/1/people/-me-",{
      "id":id,
      "firstName": name,
      "lastName": lastname,
      "email":email,
      "password": password
  
    },{headers:headers})
  
}
getperson(){
  let headers = new HttpHeaders();
  headers = headers.set('Content-Type', 'application/json')
  .set('Authorization','Basic '+btoa(unescape(encodeURIComponent(localStorage.getItem('email')+':'+localStorage.getItem('pswd')))))
  return this.http.get("http://localhost:8080/alfresco/api/-default-/public/alfresco/versions/1/people/-me-",{headers:headers})
}




}
