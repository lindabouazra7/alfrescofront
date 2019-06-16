import { Component, OnInit } from '@angular/core';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  idSh;
  client;
  message;
  locale;
  recipientEmails;


  constructor(private emailServ:EmailService) { }

  ngOnInit() {
  }
  addEmail(idsh,client,message,locale,recipientEmails){
    this.emailServ.addEmail(idsh,client,message,locale,recipientEmails).subscribe(email=>{
      console.log("ok")
      console.log(email)
      //this.router.navigate(['/home/site'])
    })
  }
  
  

}

