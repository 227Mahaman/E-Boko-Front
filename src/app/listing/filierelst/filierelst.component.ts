import { Component, OnInit } from '@angular/core';
import {Filiere} from "../../models/filiere";
import {ApiService} from "../../shared/api.service";

@Component({
  selector: 'app-filierelst',
  templateUrl: './filierelst.component.html',
  styleUrls: ['./filierelst.component.css']
})
export class FilierelstComponent implements OnInit {
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
