import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-mod-compte',
  templateUrl: './mod-compte.component.html',
  styleUrls: ['./mod-compte.component.css']
})
export class ModCompteComponent implements OnInit {
userList;
  constructor( private userServ:UserService) { }

  ngOnInit() {
  }
  getUser(){
    this.userServ.getUser().subscribe(list=>{
      console.log(list)
      console.log(list['list'].entries)
      this.userList=list['list'].entries;
      console.log(this.userList)
    })
  }
  updateUser(id,name,lastname,email,password){
    this.userServ.updateUser(id,name,lastname,email,password).subscribe(resUpd=>{
      console.log(resUpd)
      this.getUser()
    })

}
}