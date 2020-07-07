import { Component, OnInit } from '@angular/core';
import {Devoir} from "../models/devoir";
import {ApiService} from "../shared/api.service";
import {Module} from "../models/module";

@Component({
  selector: 'app-devoir',
  templateUrl: './devoir.component.html',
  styleUrls: ['./devoir.component.css']
})
export class DevoirComponent implements OnInit {
  devoirs: Devoir[] = [];
  modules: Module[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllDevoirs();
    this.getAllModules();
  }

  getAllDevoirs(){
    this.apiService.getAllDevoirs().subscribe(
      res => {
        this.devoirs = res;
      },
      err => {
        alert("Erreur survenue lors de la recuperation des données de la table devoir !");
      }
    );
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

  deleteDevoir(devoir: Devoir) {

  }

  createDevoir(event) {

  }
}
