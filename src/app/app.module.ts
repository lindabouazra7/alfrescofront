import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { ListUserComponent } from './list-user/list-user.component';
import { RouterModule,Routes } from '@angular/router';
import { ListFolderComponent } from './list-folder/list-folder.component';
import { GroupComponent } from './group/group.component';

import { InscriptionComponent } from './inscription/inscription.component';
import { FactureComponent } from './role/facture.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { ContainerComponent } from './home/container/container.component';
import { FooterComponent } from './home/footer/footer.component';
import { LoginComponent } from './login/login.component';
import {GroupService} from './services/group.service';
import {FolderService} from './services/folder.service';
import {UserService} from './services/user.service';
import {FormsModule} from '@angular/forms';
import {AuthGuard} from './services/auth.guard';
import { SiteComponent } from './site/site.component';
import {SiteService} from './services/site.service';
import { AjoutSiteComponent } from './ajout-site/ajout-site.component';
import { SitePipe } from './search/site.pipe';

import {WorkflowService} from './services/workflow.service';
import {WorkflowComponent} from './workflow/workflow.component';
import { UserPipe } from './search/user.pipe';
import { FolderPipe } from './search/folder.pipe';
import { FichierComponent } from './fichier/fichier.component';
import {FichierService} from './services/fichier.service';
import { TacheComponent } from './tache/tache.component';
import { ChangerPwdComponent } from './changer-pwd/changer-pwd.component';

import { TachePipe } from './search/tache.pipe';
import { WorkflowPipe } from './search/workflow.pipe';
import { GroupPipe } from './search/group.pipe';
import { FavSiteComponent } from './fav-site/fav-site.component';
import { SiteFavPipe } from './search/site-fav.pipe';
import { AjoutFichierComponent } from './ajout-fichier/ajout-fichier.component';
import { UserComponent } from './user/user.component';
import { EmailComponent } from './email/email.component';
import { EmailService } from './services/email.service';
import { ModCompteComponent } from './mod-compte/mod-compte.component';
import { TacheService } from './services/tache.service';
import { FormComponent } from './form/form.component';
import { FormService } from './services/form.service';
import { ProcessDefComponent } from './process-def/process-def.component';
import { AddworkflowComponent } from './addworkflow/addworkflow.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:InscriptionComponent},

  {path:'home',component:HomeComponent,children:[
      {path:'',component:ContainerComponent},
      {path:'listUser',component:ListUserComponent},
      {path:'listgroup' , component:GroupComponent},
      {path:'listfolder' , component:ListFolderComponent},
      {path:'role' , component:FactureComponent},
      {path:'site' , component:SiteComponent},
      {path:'ajoutsite' , component:AjoutSiteComponent},
      {path:'workflow' , component:WorkflowComponent},
      {path:'listfichier' , component:FichierComponent},
      {path:'users' , component:TacheComponent},
      {path:'changerPwd' , component:ChangerPwdComponent},
      {path:'favsite' , component:FavSiteComponent},
      {path:'ajoutfichier',component:AjoutFichierComponent},
      {path:'user',component:UserComponent},
      {path:'email',component:EmailComponent},
      {path:'modCompte',component:ModCompteComponent},
      {path:'form',component:FormComponent},
      {path:'process',component:ProcessDefComponent},
      {path:'ajouterWorkflow',component:AddworkflowComponent},






    ]},

];
@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    ListFolderComponent,
    GroupComponent,
   
    InscriptionComponent,
    FactureComponent,
    HomeComponent,
    SidebarComponent,
    NavbarComponent,
    ContainerComponent,
    FooterComponent,
    LoginComponent,
    SiteComponent,
    AjoutSiteComponent,
    SitePipe,
    WorkflowComponent,
    UserPipe,
    FolderPipe,
    FichierComponent,
    TacheComponent,
    ChangerPwdComponent,

    TachePipe,
    WorkflowPipe,
    GroupPipe,
    FavSiteComponent,
    SiteFavPipe,
    AjoutFichierComponent,
    UserComponent,
    EmailComponent,
    ModCompteComponent,
    FormComponent,
    ProcessDefComponent,
    AddworkflowComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [UserService,GroupService,FolderService,
    AuthGuard, SiteService,WorkflowService,TacheService,FichierService,EmailService,FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
