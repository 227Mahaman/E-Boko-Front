import { Component, OnInit } from '@angular/core';
import {Niveau} from "../../models/niveau";
import {ApiService} from "../../shared/api.service";

@Component({
  selector: 'app-niveaulst',
  templateUrl: './niveaulst.component.html',
  styleUrls: ['./niveaulst.component.css']
})
export class NiveaulstComponent implements OnInit {
  niveaux: Niveau[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllNiveaux();
  }

  getAllNiveaux() {
    this.apiService.getAllNiveaux().subscribe(
      res => {
        this.niveaux = res;
      },
      err => {
        alert("Erreur lors de la recuperation des données niveaux !")
      }
    );
  }

  deleteNiveaux(niveau: Niveau) {
    
  }
}
