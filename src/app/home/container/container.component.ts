import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { WorkflowService } from 'src/app/services/workflow.service';
import { TacheService } from 'src/app/services/tache.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
userList;
listWorkflow;
listtaches;
  constructor(private userServ:UserService,private workflowServ:WorkflowService,private tacheServ:TacheService) {
    this.getAllUser();
    this.getWorkflow();
    this.listtache();
  }

  ngOnInit() {
  }

  getAllUser(){
    this.userServ.listeUser().subscribe(list=>{
      console.log(list)
      console.log(list['length'])
      console.log(list['list'].entries)
      this.userList=list['list'].entries;
      console.log(this.userList)
    })
  }

  getWorkflow(){
    this.workflowServ.listworkflow().subscribe(list=>{
      console.log(list)
      console.log(list['list'].entries)
      this.listWorkflow=list['list'].entries;
      console.log(this.listWorkflow)
    })
  }

  listtache() {
    this.tacheServ.mesTache().subscribe(list => {
      console.log(list)
      console.log(list['list'].entries)
      this.listtaches = list['list'].entries;
      console.log(this.listtaches)
    })
}
}
