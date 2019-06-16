import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
email
name
  password;
  passwordConfirmationFailed=false;
  passwordConfirmationTxt ='';

  constructor(public userServ:UserService,public router:Router) { }

  ngOnInit() {
  }
register(id,name,lastname,email,password){
    this.userServ.inscription(id,name,lastname,email,password).subscribe(reultRegister=>{
      console.log("ok")
      console.log(reultRegister)
      this.router.navigate([''])
    })
}
confirmPassword() {
  if(this.password === this.passwordConfirmationTxt) {
    this.passwordConfirmationFailed = false;

  }else{
    this.passwordConfirmationFailed = true;
    
  }
}
}
