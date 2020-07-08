import { Component, OnInit } from '@angular/core';
import {Devoir} from "../../models/devoir";
import {ApiService} from "../../shared/api.service";

@Component({
  selector: 'app-mydevoirs',
  templateUrl: './mydevoirs.component.html',
  styleUrls: ['./mydevoirs.component.css']
})
export class MydevoirsComponent implements OnInit {
  devoirs: Devoir[] = [];

  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
    this.getMesDevoirs();
  }

  getMesDevoirs() {
    this.apiservice.getMyDevoirs("1").subscribe(
      res => {
        this.devoirs = res;
      },
      err => {
        alert("Erreur survenue lors de la recuperation des données de la table devoir !");
      }
    );
  }

}
