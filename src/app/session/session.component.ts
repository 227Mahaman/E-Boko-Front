import { Component, OnInit } from '@angular/core';
import {Session} from "../models/session";
import {ApiService} from "../shared/api.service";

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  sessions: Session[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllSessions();
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

  createSession(event) {

  }

  deleteSession(session: Session) {

  }
}
