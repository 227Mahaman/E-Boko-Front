import { Component, OnInit } from '@angular/core';
import {Etudiant} from "../../models/etudiant";
import {ApiService} from "../../shared/api.service";

@Component({
  selector: 'app-etudiantlst',
  templateUrl: './etudiantlst.component.html',
  styleUrls: ['./etudiantlst.component.css']
})
export class EtudiantlstComponent implements OnInit {
  etudiants: Etudiant[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllEtudiants();
  }

  getAllEtudiants() {
    this.apiService.getAllEtudiants().subscribe(
      res => {
        this.etudiants = res;
      },
      err => {
        alert("Erreur lors de la recuperation des données etudiants !")
      }
    );
  }

  deleteEtudiant(etudiant: Etudiant) {
    
  }
}
