import { Component, OnInit } from '@angular/core';
import {Session} from "../models/session";
import {ApiService} from "../shared/api.service";
import {Ue} from "../models/ue";

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  sessions: Session[] = [];
  ues: Ue[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllSessions();
    this.getAllUes();
  }

  getAllSessions() {
    this.apiService.getAllSessions().subscribe(
      res => {
        this.sessions = res;
      },
      err => {
        alert("Erreur lors de la recuperation des données sessions !")
      }
    );
  }

  getAllUes() {
    this.apiService.getUes().subscribe(
      res => {
        this.ues = res;
      },
      err => {
        alert("Erreur survenue lors de la recuperation des unites UE !");
      }
    );
  }

  createSession(event) {
    event.preventDefault()
    const target = event.target
    const codeSes = target.querySelector('#codeSes').value
    const debutSes = target.querySelector('#debutSes').value
    const finSes = target.querySelector('#finSes').value
    const idUe = target.querySelector('#idUe').value
    console.log(codeSes, debutSes, finSes, idUe)
    let newSession: Session = {
      idSes:null,
      codeSes:codeSes,
      debutSes:debutSes,
      finSes:finSes,
      idUe:idUe
    }

    this.apiService.postSessions(newSession).subscribe(
      res => {
        newSession.idSes = res.idSes;
        this.sessions.push(newSession);
      },
      err => {
        alert("Erreur survenue lors de la création d'une session !");
      }
    );
  }

  deleteSession(session: Session) {
    if(confirm("Etes vous sûre de vouloir supprimer la session?")){
      this.apiService.deleteSession(session.idSes).subscribe(
        res => {
          let indexofSession = this.sessions.indexOf(session);
          this.sessions.splice(indexofSession, 1);
        },
        err => {
          alert("Erreur survenue lors de la suppression de la session !");
        }
      );
    }
  }
}
