import { Component, OnInit } from '@angular/core';
import {ApiService} from "../shared/api.service";
import {Ue} from "../models/ue";

@Component({
  selector: 'app-ue',
  templateUrl: './ue.component.html',
  styleUrls: ['./ue.component.css']
})
export class UeComponent implements OnInit {
  ues: Ue[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllUes();
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

  deleteUe(ue: Ue) {
    if(confirm("Etes vous sûre de vouloir supprimer l'Unite UE?")){
      this.apiService.deleteUe(ue.idUe).subscribe(
        res => {
          let indexofUe = this.ues.indexOf(ue);
          this.ues.splice(indexofUe, 1);
        },
        err => {
          alert("Erreur survenue lors de la suppression d'une unite UE !");
        }
      );
    }
  }

  createUe(event) {
    event.preventDefault()
    const target = event.target
    const codeUe = target.querySelector('#codeUe').value
    const intitule = target.querySelector('#intitule').value
    const dateCreation = target.querySelector('#dateCreation').value
    console.log(codeUe, intitule, dateCreation)
    let newUe: Ue = {
      idUe: null,
      codeUe:codeUe,
      intitule:intitule,
      dateCreation:dateCreation
    }
    this.apiService.postUe(newUe).subscribe(
      res => {
        newUe.idUe = res.idUe;
        this.ues.push(newUe);
      },
      err => {
        alert("Erreur survenue lors de la création d'une unite UE !");
      }
    );
  }

}
