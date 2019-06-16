import { Component, OnInit } from '@angular/core';
import {SiteService} from '../services/site.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ajout-site',
  templateUrl: './ajout-site.component.html',
  styleUrls: ['./ajout-site.component.css']
})
export class AjoutSiteComponent implements OnInit {

  constructor(private siteServ:SiteService , private router:Router ) { }

  ngOnInit() {
  }

  createSite(title,visibility,description){
    this.siteServ.createSite(title,visibility,description).subscribe(site=>{
      console.log("ok")
      console.log(site)
      this.router.navigate(['/home/site'])
    })
  }



  getValue(visi){
    console.log(visi)
  }


}
