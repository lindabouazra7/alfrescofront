import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  infouser;
  constructor(private userServ:UserService) { }

  ngOnInit() {
  }
  getUser(){
    this.userServ.infoUser().subscribe(user=>{
      console.log(user)
      console.log(user['user'].entries)
      this.infouser=user['user'].entries;
      console.log(this.infouser)
    })

}
  }
