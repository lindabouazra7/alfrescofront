import { Component, OnInit } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {GroupService} from '../services/group.service';
@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  title = 'alfrescofront';
  restItems: any;
  groupList;
  constructor(private http: HttpClient,private groupServ:GroupService) {
  this.getAllGroup()
  }

ngOnInit() {
}
  getAllGroup(){
    this.groupServ.listeGroup().subscribe(list=>{
      console.log(list)
      console.log(list['list'].entries)
      this.groupList=list['list'].entries;
      console.log(this.groupList)
    })
  }
  
}  
