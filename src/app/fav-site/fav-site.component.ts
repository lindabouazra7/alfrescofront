import { Component, OnInit } from '@angular/core';
import {SiteService} from '../services/site.service';

@Component({
  selector: 'app-fav-site',
  templateUrl: './fav-site.component.html',
  styleUrls: ['./fav-site.component.css']
})
export class FavSiteComponent implements OnInit {
  listFav;
  constructor(private favSiteServ: SiteService) {
  }

  ngOnInit() {
    this.getFavSite()
  }

  getFavSite() {
    this.favSiteServ.getFavSite().subscribe(list => {
      console.log(list)
      console.log(list['list'].entries)
      this.listFav = list['list'].entries;
      console.log(this.listFav)
    })
  }
  AddFav(id){

      this.favSiteServ.addFav(id).subscribe(reultAdd=>{
        console.log("ok")
        console.log(reultAdd)

      })
    }

  }



