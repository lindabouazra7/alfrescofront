import { Component, OnInit } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
    title = 'alfrescofront';
    userList;

  
    constructor(private http: HttpClient, private userServ:UserService , private router:Router) {
      this.getAllUser()

    }
  
    ngOnInit() {
    }
  


getAllUser(){
  this.userServ.listeUser().subscribe(list=>{
    console.log(list)
    console.log(list['list'].entries)
    this.userList=list['list'].entries;
    console.log(this.userList)
  })
}
getUser(){
  this.userServ.getUser().subscribe(list=>{
    console.log(list)
    console.log(list['list'].entries)
    this.userList=list['list'].entries;
    console.log(this.userList)
  })
}



  }  
