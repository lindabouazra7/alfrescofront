import { Component, OnInit } from '@angular/core';
import {TacheService} from '../services/tache.service';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css']
})
export class TacheComponent implements OnInit {
  listtaches;
  idtache;
  tachelist;

  constructor(private tacheServ: TacheService) {


  }

  ngOnInit() {
    this.listtache()

  }

  listtache() {
    this.tacheServ.mesTache().subscribe(list => {
      console.log(list)
      console.log(list['list'].entries)
      this.listtaches = list['list'].entries;
      console.log(this.listtaches)
    })

  }
  // gettacheId(id){
  //   console.log(id)
  //   this.idtache=id
  //   this.tacheServ.getTache(id).subscribe(tache=>{
  //     console.log(tache)

   // })
  //}
  updatetache(idtache,state,description){
    this.tacheServ.updateTache(description,state,idtache).subscribe(resUpd=>{
      console.log(resUpd)
      this.listtache()
    })
  }
}
