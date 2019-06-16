import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  public baseUrl = "http://localhost:8080/alfresco/api/-default-/public/alfresco/versions/1/"

  constructor(private http: HttpClient) {
  }

  listeSite() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json')
      .set('Authorization', 'Basic ' + btoa(unescape(encodeURIComponent(localStorage.getItem('email') + ':' + localStorage.getItem('pswd')))))
    return this.http.get("http://localhost:8080/alfresco/api/-default-/public/alfresco/versions/1/people/-me-/sites", {headers: headers})

  }

  createSite(title, visibility, description) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json')
      .set('Authorization', 'Basic ' + btoa(unescape(encodeURIComponent(localStorage.getItem('email') + ':' + localStorage.getItem('pswd')))))
    return this.http.post(this.baseUrl + "sites", {

      "title": title,
      "visibility": visibility,
      "description": description


    }, {headers: headers})
  }

  getSite(idSite) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json')
      .set('Authorization', 'Basic ' + btoa(unescape(encodeURIComponent(localStorage.getItem('email') + ':' + localStorage.getItem('pswd')))))

    return this.http.get("http://localhost:8080/alfresco/api/-default-/public/alfresco/versions/1/sites/" + idSite, {headers: headers})
  }


  updateSite(siteId, title, visibility, description) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json')
      .set('Authorization', 'Basic ' + btoa(unescape(encodeURIComponent(localStorage.getItem('email') + ':' + localStorage.getItem('pswd')))))

    return this.http.put("http://localhost:8080/alfresco/api/-default-/public/alfresco/versions/1/sites/" + siteId, {
      "title": title,
      "description": description,
      "visibility": visibility
    }, {headers: headers})

  }

  deleteSite(siteId) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json')
      .set('Authorization', 'Basic ' + btoa(unescape(encodeURIComponent(localStorage.getItem('email') + ':' + localStorage.getItem('pswd')))))

    return this.http.delete("http://localhost:8080/alfresco/api/-default-/public/alfresco/versions/1/sites/" + siteId, {headers: headers})

  }

  getFavSite() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json')
      .set('Authorization', 'Basic ' + btoa(unescape(encodeURIComponent(localStorage.getItem('email') + ':' + localStorage.getItem('pswd')))))
    return this.http.get("http://localhost:8080/alfresco/api/-default-/public/alfresco/versions/1/people/-me-/favorite-sites",
      {headers: headers})


  }

  addFav(id) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json')
      .set('Authorization', 'Basic ' + btoa(unescape(encodeURIComponent(localStorage.getItem('email') + ':' + localStorage.getItem('pswd')))))

    return this.http.post("http://localhost:8080/alfresco/api/-default-/public/alfresco/versions/1/people/-me-/favorite-sites", {
      "id": id,
    }, {headers: headers})


  }
}
  