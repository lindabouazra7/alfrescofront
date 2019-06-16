import { Component, OnInit } from '@angular/core';
import {FichierService} from '../services/fichier.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fichier',
  templateUrl: './fichier.component.html',
  styleUrls: ['./fichier.component.css']
})
export class FichierComponent implements OnInit {
  fichierList;
  constructor(private fichServ: FichierService, private router: Router) {
  }

  ngOnInit() {

  }

  addfichier(filedata) {
    this.fichServ.createfichier(filedata).subscribe(resultadd => {
      console.log("ok")
      console.log(resultadd)
      this.router.navigate(['listfolder'])
    })

  }
  getFichier(id){
    this.fichServ.listeFichier(id).subscribe(list=>{
      console.log(list)
      console.log(list['list'].entries)
      this.fichServ=list['list'].entries;
      console.log(this.fichierList)
    })
  }

}
