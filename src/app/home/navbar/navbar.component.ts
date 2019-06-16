import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
userList;
nom;
prenom;
  constructor(public router:Router,private userServ:UserService) { 
    this.getperson()
  }

  ngOnInit() {
  }
logout(){
    localStorage.clear()
  this.router.navigate([''])


}
getperson(){
  this.userServ.getUser().subscribe(list=>{
    console.log(list)
    this.nom=list["entry"]["firstName"]
    this.prenom=list["entry"]["lastName"]


   
  })
}
}
