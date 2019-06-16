import { Component, OnInit } from '@angular/core';
import { WorkflowService } from '../services/workflow.service';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-process-def',
  templateUrl: './process-def.component.html',
  styleUrls: ['./process-def.component.css']
})
export class ProcessDefComponent implements OnInit {
  listprocessDef;
  constructor(private http: HttpClient,private workflowServ:WorkflowService) { 
    this.process()
  }

  ngOnInit() {
  }
  process(){
    this.workflowServ.processDef().subscribe(list=>{
      console.log(list)
      console.log(list['list'].entries)
      this.listprocessDef=list['list'].entries;
      console.log(this.listprocessDef)
    })
  }

}
