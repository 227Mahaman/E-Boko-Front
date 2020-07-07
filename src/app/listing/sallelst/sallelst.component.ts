import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../shared/api.service";
import {Salle} from "../../models/salle";

@Component({
  selector: 'app-sallelst',
  templateUrl: './sallelst.component.html',
  styleUrls: ['./sallelst.component.css']
})
export class SallelstComponent implements OnInit {
  salles: Salle[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllSalles();
  }

  getAllSalles() {
    this.apiService.getAllSalles().subscribe(
      res => {
        this.salles = res;
      },
      err => {
        alert("Erreur lors de la recuperation des données salles !")
      }
    );
  }

  deleteSalles(salle: Salle) {

  }
}
