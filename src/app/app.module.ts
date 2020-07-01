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
    SessionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
