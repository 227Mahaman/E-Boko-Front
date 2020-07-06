import { Component, OnInit } from '@angular/core';
import {Niveau} from "../models/niveau";
import {ApiService} from "../shared/api.service";

@Component({
  selector: 'app-niveau',
  templateUrl: './niveau.component.html',
  styleUrls: ['./niveau.component.css']
})
export class NiveauComponent implements OnInit {
  niveaux: Niveau[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllNiveaux();
  }

  public getAllNiveaux() {
    this.apiService.getAllNiveaux().subscribe(
      res => {
        this.niveaux = res;
      },
      err => {
        alert("Erreur lors de la recuperation des données niveaux !")
      }
    );
  }

  deleteNiveau(niveau: Niveau) {

  }

  createNiveau(event) {
    event.preventDefault()
    const target = event.target
    const codeN = target.querySelector('#codeN').value
    const intituleN = target.querySelector('#intituleN').value
    const montantScolariteN = target.querySelector('#montantScolariteN').value
    const dateCreation = target.querySelector('#dateCreation').value
    console.log(codeN, intituleN, montantScolariteN, dateCreation)
    let newNiveau: Niveau = {
      idN:null,
      codeN:codeN,
      intituleN:intituleN,
      montantScolariteN:montantScolariteN,
      dateCreation:dateCreation
    }
    this.apiService.postNiveaux(newNiveau).subscribe(
      res => {
        newNiveau.idN = res.idN;
        this.niveaux.push(newNiveau);
      },
      err => {
        alert("Erreur survenue lors de la création d'un niveau !");
      }
    );
  }
}
