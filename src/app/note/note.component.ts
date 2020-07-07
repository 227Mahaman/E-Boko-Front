import { Component, OnInit } from '@angular/core';
import {ApiService} from "../shared/api.service";
import {Note} from "../models/note";
import {Devoir} from "../models/devoir";
import {Etudiant} from "../models/etudiant";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  notes: Note[] = [];
  devoirs: Devoir[] = [];
  etudiants: Etudiant[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllNotes();
    this.getAllDevoirs();
    this.getAllEtudiants();
  }

  getAllNotes() {
    this.apiService.getAllNotes().subscribe(
      res => {
        this.notes = res;
      },
      err => {
        alert("Erreur survenue lors de la recuperation des données de la table note !");
      }
    );
  }

  public getAllDevoirs(){
    this.apiService.getAllDevoirs().subscribe(
      res => {
        this.devoirs = res;
      },
      err => {
        alert("Erreur survenue lors de la recuperation des données de la table devoir !");
      }
    );
  }

  public getAllEtudiants() {
    this.apiService.getAllEtudiants().subscribe(
      res => {
        this.etudiants = res;
      },
      err => {
        alert("Erreur lors de la recuperation des données etudiants !")
      }
    );
  }

  deleteNote(note: Note) {

  }

  createNote(event) {

  }
}
