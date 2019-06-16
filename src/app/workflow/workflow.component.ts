import { Component, OnInit } from '@angular/core';
import {WorkflowService} from '../services/workflow.service';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css']
})
export class WorkflowComponent implements OnInit {
listWorkflow;
  constructor(private workflowServ:WorkflowService) {

    this.getWorkflow()
  }

  ngOnInit() {
  }
  getWorkflow(){
    this.workflowServ.listworkflow().subscribe(list=>{
      console.log(list)
      console.log(list['list'].entries)
      this.listWorkflow=list['list'].entries;
      console.log(this.listWorkflow)
    })
  }


}
