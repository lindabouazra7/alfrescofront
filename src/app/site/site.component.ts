import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SiteService} from '../services/site.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {
  siteList;
  idSite;
  title;
  visibility;
  description;
  listSites=[];
  constructor(private http: HttpClient, private siteServ:SiteService , private router:Router ) {
    console.log(localStorage.getItem('id'))
    this.getSites()

  }

  ngOnInit() {


  }
  getSites(){
    this.listSites=[]
    this.siteServ.listeSite().subscribe(list=>{
      console.log(list['list'].entries)
      this.siteList=list['list'].entries;
      for(var i=0;i<this.siteList.length;i++){
        this.listSites.push({
          title:this.siteList[i].entry.site.title,
          description:this.siteList[i].entry.site.description,
          visibility:this.siteList[i].entry.site.visibility,
          preset:this.siteList[i].entry.site.preset,
          role:this.siteList[i].entry.role,
          id:this.siteList[i].entry.id

        })
      }
      console.log("tabfin:::>")
      console.log(this.listSites)
    })

  }

getSiteId(id){
    console.log(id)
   this.idSite=id
  this.siteServ.getSite(id).subscribe(site=>{
    console.log(site)
    this.title=site['entry'].title
    this.visibility=site['entry'].visibility
    this.description=site['entry'].description
  })
}


  updateSite(siteId,title,visibility,description){
    this.siteServ.updateSite(siteId,title,visibility,description).subscribe(resUpd=>{
      console.log(resUpd)
      this.getSites()
    })
  }

  deleteSite(id){
    this.siteServ.deleteSite(id).subscribe(deleteR=>{
      console.log(deleteR)
      this.getSites()
    })
  }
  AddFav(id){

    this.siteServ.addFav(id).subscribe(reultAdd=>{
      console.log("ok")
      console.log(reultAdd)

    })
  }


}
