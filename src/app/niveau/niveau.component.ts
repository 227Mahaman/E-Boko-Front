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
}
