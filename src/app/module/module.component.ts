import { Component, OnInit } from '@angular/core';
import {Filiere} from "../models/filiere";
import {Anneescolaire} from "../models/anneescolaire";
import {Niveau} from "../models/niveau";
import {Ue} from "../models/ue";
import {Semestre} from "../models/semestre";
import {Module} from "../models/module";
import {ApiService} from "../shared/api.service";

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {
  filieres: Filiere[] = [];
  anneescolaires: Anneescolaire[] = [];
  niveaux: Niveau[] = [];
  ues: Ue[] = [];
  semestres: Semestre[] = [];
  modules: Module[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllModules();
    this.getAllAnneescolaire();
    this.getAllFilieres();
    this.getAllNiveaux();
    this.getAllUes();
    this.getAllSemestres();
  }

  public getAllModules(){
    this.apiService.getAllModules().subscribe(
      res => {
        this.modules = res;
      },
      err => {
        alert("Erreur survenue lors de la recuperation des données de la table module !");
      }
    );
  }

  deleteModule(module: Module) {
    if(confirm("Etes vous sûre de vouloir supprimer le module?")){
      this.apiService.deleteModule(module.idMo).subscribe(
        res => {
          let indexofModule = this.modules.indexOf(module);
          this.modules.splice(indexofModule, 1);
        },
        err => {
          alert("Erreur survenue lors de la suppression du module !");
        }
      );
    }
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
  public getAllUes(){
    this.apiService.getUes().subscribe(
      res => {
        this.ues = res;
      },
      err => {
        alert("Erreur survenue lors de la recuperation des unites UE !");
      }
    );
  }
  public getAllSemestres(){
    this.apiService.getAllSemestres().subscribe(
      res => {
        this.semestres = res;
      },
      err => {
        alert("Erreur survenue lors de la recuperation des données de la table Semestre !");
      }
    );
  }

  createModule(event) {

  }
}
