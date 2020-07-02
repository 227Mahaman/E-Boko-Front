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

  createAnneescolaire() {
    let newAnnee: Anneescolaire = {
      idA:null,
      codeA:null,
      intituleA:null,
      datasourceA:null,
      dA:null
    }
    this.apiService.postAnneescolaire(newAnnee).subscribe(
      res => {
        newAnnee.idA = res.idA;
        this.anneescolaires.push(newAnnee);
      },
      err => {
        alert("Erreur insertion AnnéeScolaire !");
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
          alert("Erreur survenue lors de la suppression d'une année scolaire !");
        }
      );
    }
  }
}
