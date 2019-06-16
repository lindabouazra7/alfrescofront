import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
admin=true
  user=false
rolee
  constructor() {
  console.log(localStorage.getItem('id') )
  this.rolee=localStorage.getItem('id')
  if(this.rolee=='admin'){
    this.admin=true
    this.user=false

  }else{
    this.admin=false
    this.user=true
  }
  console.log(this.admin)
  console.log(this.user)


  }

  ngOnInit() {
  }

}
