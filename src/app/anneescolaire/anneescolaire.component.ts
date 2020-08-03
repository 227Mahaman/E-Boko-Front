import { Component, OnInit } from '@angular/core';
import {Anneescolaire} from "../models/anneescolaire";
import {ApiService} from "../shared/api.service";

@Component({
  selector: 'app-anneescolaire',
  templateUrl: './anneescolaire.component.html',
  styleUrls: ['./anneescolaire.component.css']
})
export class AnneescolaireComponent implements OnInit {
  anneescolaires: Anneescolaire[] = [];
  //annee: Anneescolaire;

  constructor(private apiService: ApiService) {

}

  ngOnInit(): void {
    this.getAllAnneescolaire();
  }

  private getAllAnneescolaire() {
    this.apiService.getAllAnneescolaires().subscribe(
      res => {
        this.anneescolaires = res;
      },
      err => {
        alert("Erreur Recuperation des données AS !");
      }
    );
  }

  deleteAnneescolaire(anneescolaire: Anneescolaire) {
    if(confirm("Etes vous sûre de vouloir supprimer l'Année Scolaire?")){
      this.apiService.deleteAnneescolaire(anneescolaire.idA).subscribe(
        res => {
          let indexOfAnneescolaire = this.anneescolaires.indexOf(anneescolaire);
          this.anneescolaires.splice(indexOfAnneescolaire, 1);
        },
        err => {
          alert("Erreur survenue lors de la suppression d'une année scolaire  tezst");
        }
      );
    }
  }

  insertion(event) {
    event.preventDefault()
    const target = event.target
    const codeA = target.querySelector('#codeA').value
    const intitule = target.querySelector('#intitule').value
    const dA = target.querySelector('#dA').value
    console.log(codeA, intitule, dA)
    let newAs: Anneescolaire = {
      idA:null,
      codeA:codeA,
      intituleA: intitule,
      dA:dA,
      datasourceA:null
    }
    this.apiService.postAnneescolaire(newAs).subscribe(
      res => {
        newAs.idA = res.idA;
        this.anneescolaires.push(newAs);
      },
      err => {
        alert("Erreur lors de l'insertion d'une année scolaire !");
      }
    );
  }

  selectData(anneescolaire: Anneescolaire) {
    /*this.annee = anneescolaire;
    this.apiService.getAnnescolaire(anneescolaire.idA).subscribe(
      res => {
        this.annee = res;
      },
      err => {
        alert("Erreur lors de la recuperation d'une année scolaire !");
      }
    );*/
  }
}
