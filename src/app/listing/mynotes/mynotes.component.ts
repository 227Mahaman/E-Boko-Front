import { Component, OnInit } from '@angular/core';
import {Note} from "../../models/note";
import {ApiService} from "../../shared/api.service";
import {Etudiant} from "../../models/etudiant";

@Component({
  selector: 'app-mynotes',
  templateUrl: './mynotes.component.html',
  styleUrls: ['./mynotes.component.css']
})
export class MynotesComponent implements OnInit {
  notes: Note[] = [];
  etudiants: Etudiant[] = [];

  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
    this.getMesNotes();
  }

  getMesNotes() {
    this.apiservice.getMyNotes("1").subscribe(
      res => {
        this.notes = res;
      },
      err => {
        alert("Erreur survenue lors de la recuperation des données de la table note !");
      }
    );
  }
  public getAllEtudiants() {
    this.apiservice.getAllEtudiants().subscribe(
      res => {
        this.etudiants = res;
      },
      err => {
        alert("Erreur lors de la recuperation des données etudiants !")
      }
    );
  }
}
