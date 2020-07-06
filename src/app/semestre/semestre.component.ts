import { Component, OnInit } from '@angular/core';
import {ApiService} from "../shared/api.service";
import {Semestre} from "../models/semestre";
import {Niveau} from "../models/niveau";
import {Session} from "../models/session";

@Component({
  selector: 'app-semestre',
  templateUrl: './semestre.component.html',
  styleUrls: ['./semestre.component.css']
})
export class SemestreComponent implements OnInit {
  semestres: Semestre[] = [];
  niveaux: Niveau[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllSemestres();
    this.getAllNiveaux();
  }

  createSemestre(event) {
    event.preventDefault()
    const target = event.target
    const codeS = target.querySelector('#codeS').value
    const intituleS = target.querySelector('#intituleS').value
    const dateCreation = target.querySelector('#dateCreation').value
    const idN = target.querySelector('#idN').value
    console.log(codeS, idN, intituleS, dateCreation)
    let newSemestre: Semestre = {
      idS:null,
      codeS:codeS,
      idN:idN,
      intituleS:intituleS,
      dateCreation:dateCreation
    }

    this.apiService.postSemestres(newSemestre).subscribe(
      res => {
        newSemestre.idS = res.idS;
        this.semestres.push(newSemestre);
      },
      err => {
        alert("Erreur survenue lors de la création d'un semestre !");
      }
    );
  }

  deleteSemestre(semestre: Semestre) {
    if(confirm("Etes vous sûre de vouloir supprimer le semestre?")){
      this.apiService.deleteSemestre(semestre.idS).subscribe(
        res => {
          let indexofSemestre = this.semestres.indexOf(semestre);
          this.semestres.splice(indexofSemestre, 1);
        },
        err => {
          alert("Erreur survenue lors de la suppression du semestre !");
        }
      );
    }
  }

  getAllSemestres() {
    this.apiService.getAllSemestres().subscribe(
      res => {
        this.semestres = res;
      },
      err => {
        alert("Erreur lors de la recuperation des données semestres !")
      }
    );
  }

  getAllNiveaux() {
    this.apiService.getAllNiveaux().subscribe(
      res => {
        this.niveaux = res;
      },
      err => {
        alert("Erreur survenue lors de la recuperation des Niveaux !");
      }
    );
  }
}
