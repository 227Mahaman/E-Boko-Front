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
    if(confirm("Etes vous sûre de vouloir supprimer la filière?")){
      this.apiService.deleteFiliere(filiere.idF).subscribe(
        res => {
          let indexofFiliere = this.filieres.indexOf(filiere);
          this.filieres.splice(indexofFiliere, 1);
        },
        err => {
          alert("Erreur survenue lors de la suppression de la filiere !");
        }
      );
    }
  }

  createFiliere(event) {
    event.preventDefault()
    const target = event.target
    const codeF = target.querySelector('#codeF').value
    const intituleF = target.querySelector('#intituleF').value
    const descriptionF = target.querySelector('#descriptionF').value
    const dateCreation = target.querySelector('#dateCreation').value
    console.log(codeF, intituleF, descriptionF, dateCreation)
    let newFiliere: Filiere = {
      idF:null,
      codeF:codeF,
      intituleF:intituleF,
      descriptionF:descriptionF,
      dateCreation:dateCreation
    }
    this.apiService.postFilieres(newFiliere).subscribe(
      res => {
        newFiliere.idF = res.idF;
        this.filieres.push(newFiliere);
      },
      err => {
        alert("Erreur survenue lors de la création d'une filière !");
      }
    );
  }
}
