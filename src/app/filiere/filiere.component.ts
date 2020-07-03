import { Component, OnInit } from '@angular/core';
import {Filiere} from "../models/filiere";
import {HttpClientModule} from "@angular/common/http";
import {ApiService} from "../shared/api.service";

@Component({
  selector: 'app-filiere',
  templateUrl: './filiere.component.html',
  styleUrls: ['./filiere.component.css']
})
export class FiliereComponent implements OnInit {
  filieres: Filiere[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllFilieres();
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

  deleteFiliere(filiere: Filiere) {

  }
}
