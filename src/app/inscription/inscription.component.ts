import { Component, OnInit } from '@angular/core';
import {Inscription} from "../models/inscription";
import {ApiService} from "../shared/api.service";
import {Anneescolaire} from "../models/anneescolaire";
import {Filiere} from "../models/filiere";
import {Niveau} from "../models/niveau";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  inscriptions: Inscription[] = [];
  anneescolaires: Anneescolaire[] = [];
  filieres: Filiere[] = [];
  niveaux: Niveau[] = [];


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllInscriptions();
    this.getAllAnneescolaire();
    this.getAllFilieres();
    this.getAllNiveaux();
  }

  getAllInscriptions() {
    this.apiService.getAllInscriptions().subscribe(
      res => {
        this.inscriptions = res;
      },
      err => {
        alert("Erreur survenue lors de la recuperation des données de la table inscription !");
      }
    );
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
  public getAllFilieres(){
    this.apiService.getAllFilieres().subscribe(
      res => {
        this.filieres = res;
      },
      err => {
        alert("Erreur lors de la recuperation des données filières !")
      }
    );
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

  createInscription(event) {

  }

  deleteInscription(inscription: Inscription) {
    if(confirm("Etes vous sûre de vouloir supprimer l'inscription?")){
      this.apiService.deleteInscription(inscription.idI).subscribe(
        res => {
          let indexofInscription = this.inscriptions.indexOf(inscription);
          this.inscriptions.splice(indexofInscription, 1);
        },
        err => {
          alert("Erreur survenue lors de la suppression de l'inscription !");
        }
      );
    }
  }
}
