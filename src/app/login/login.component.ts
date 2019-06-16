import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userServ:UserService,public router:Router) {
    console.log('yess')
    if(localStorage.getItem('id')!=null){
      router.navigate(['/home'])
    }
  }

  ngOnInit() {
  }
login(username,pswd){

    this.userServ.login(username,pswd).subscribe(resultLogin=>{
      console.log(resultLogin['entry'])
      if(resultLogin['entry']!=null){
        localStorage.setItem('email',username)
        localStorage.setItem('pswd',pswd)
        console.log('okk')
        localStorage.setItem('id',resultLogin['entry'].userId)
        localStorage.setItem('key',resultLogin['entry'].key)
        this.router.navigate(['/home'])

      }


    })
    }

}
