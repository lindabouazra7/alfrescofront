import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TacheService } from '../services/tache.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formList;
  id;
  
  constructor(private http: HttpClient, private tacheSer:TacheService  ) {
    
  }

  ngOnInit() {
    this.form()
    
  }
  form(){
  this.tacheSer.form().subscribe(list=>{
    console.log(list)
    console.log(list['list'].entries)
    this.formList=list['list'].entries;
    console.log(this.formList)
  })
}
  }
