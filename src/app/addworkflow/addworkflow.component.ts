import { Component, OnInit } from '@angular/core';
import { WorkflowService } from '../services/workflow.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addworkflow',
  templateUrl: './addworkflow.component.html',
  styleUrls: ['./addworkflow.component.css']
})
export class AddworkflowComponent implements OnInit {

  constructor(private workflowServ:WorkflowService , private router:Router) { }

  ngOnInit() {
    
  }
  ajouterWorkflow(processDefinitionKey, bpm_assignee) {
    {
    this.workflowServ.addProcess(processDefinitionKey,bpm_assignee).subscribe(process=>{
    console.log("ok")
    console.log(process)
    this.router.navigate(['/home/workflow'])
  })
  }

    

  }}
