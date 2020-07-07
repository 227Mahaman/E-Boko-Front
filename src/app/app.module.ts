import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { UeComponent } from './ue/ue.component';
import { AnneescolaireComponent } from './anneescolaire/anneescolaire.component';
import { DevoirComponent } from './devoir/devoir.component';
import { FiliereComponent } from './filiere/filiere.component';
import { ModuleComponent } from './module/module.component';
import { NiveauComponent } from './niveau/niveau.component';
import { NoteComponent } from './note/note.component';
import { SalleComponent } from './salle/salle.component';
import { SemestreComponent } from './semestre/semestre.component';
import { SessionComponent } from './session/session.component';
import {Router, RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { NavigationComponent } from './navigation/navigation.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { EtudiantlstComponent } from './listing/etudiantlst/etudiantlst.component';
import { FilierelstComponent } from './listing/filierelst/filierelst.component';
import { NiveaulstComponent } from './listing/niveaulst/niveaulst.component';
import { SallelstComponent } from './listing/sallelst/sallelst.component';
import { MynotesComponent } from './listing/mynotes/mynotes.component';


const appRoutes: Routes = [
  {
    path: 'anneescolaire',
    component:AnneescolaireComponent
  },
  {
    path: 'devoir',
    component:DevoirComponent
  },
  {
    path: 'etudiant',
    component:EtudiantComponent
  },
  {
    path: 'filiere',
    component:FiliereComponent
  },
  {
    path: 'module',
    component:ModuleComponent
  },
  {
    path: 'niveau',
    component:NiveauComponent
  },
  {
    path: 'noterEtudiant',
    component:NoteComponent
  },
  {
    path: 'salle',
    component:SalleComponent
  },
  {
    path: 'semestre',
    component:SemestreComponent
  },
  {
    path: 'session',
    component:SessionComponent
  },
  {
    path: 'ue',
    component:UeComponent
  },
  {
    path: 'inscription',
    component:InscriptionComponent
  },
  {
    path: 'lEtudiant',
    component:EtudiantlstComponent
  },
  {
    path: 'lFiliere',
    component:FilierelstComponent
  },
  {
    path: 'lNiveau',
    component:NiveaulstComponent
  },
  {
    path: 'lSalle',
    component:SallelstComponent
  },
  {
    path: '',
    component:AppComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    EtudiantComponent,
    UeComponent,
    AnneescolaireComponent,
    DevoirComponent,
    FiliereComponent,
    ModuleComponent,
    NiveauComponent,
    NoteComponent,
    SalleComponent,
    SemestreComponent,
    SessionComponent,
    NavigationComponent,
    InscriptionComponent,
    EtudiantlstComponent,
    FilierelstComponent,
    NiveaulstComponent,
    SallelstComponent,
    MynotesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
