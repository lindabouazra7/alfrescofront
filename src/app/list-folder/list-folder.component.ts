import { Component, OnInit } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {FolderService} from '../services/folder.service';

@Component({
  selector: 'app-list-folder',
  templateUrl: './list-folder.component.html',
  styleUrls: ['./list-folder.component.css']
})
export class ListFolderComponent implements OnInit {
  title = 'alfrescofront';
  restItems: any;
ids=['-my-','-shared-','-root-']
  folderList=[];
childrenList;
fichierList;

  constructor(private http: HttpClient,private folderServ:FolderService) {
    for(var c=0;c<this.ids.length;c++){
      console.log(this.ids[c])
      this.getAllFolder(this.ids[c])
    }

  }
  ngOnInit() {

  }
  getAllFolder(id){
    this.folderServ.listeFolder(id).subscribe(list=>{
      console.log(list)
      this.folderList.push(list['entry']);
      console.log(this.folderList)
    })
  }

folderChild(id){
    this.folderServ.listeFolderChildren(id).subscribe(children=>{
      console.log(children['list'].entries)
      this.childrenList=children['list'].entries;
    })
}

}
