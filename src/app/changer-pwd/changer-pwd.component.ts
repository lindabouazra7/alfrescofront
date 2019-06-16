import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-changer-pwd',
  templateUrl: './changer-pwd.component.html',
  styleUrls: ['./changer-pwd.component.css']
})
export class ChangerPwdComponent implements OnInit {

  password =localStorage.getItem('pswd');
  username=localStorage.getItem('email');
  key=localStorage.getItem('key');
  constructor(private userServ:UserService,private router:Router) { }

  ngOnInit() {
  }

  changermdp(){
    this.userServ.changermdp(this.password,this.username,this.key).subscribe(reultRegister=>{
      console.log("ok")
      console.log(reultRegister)
      this.router.navigate([''])
    })
  }

}
