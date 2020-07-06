import { Component, OnInit } from '@angular/core';
import {ApiService} from "../shared/api.service";
import {Etudiant} from "../models/etudiant";

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  etudiants: Etudiant[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }


  createEtudiant(event) {
    event.preventDefault()
    const target = event.target
    const matriculeE = target.querySelector('#matriculeE').value
    const nomE = target.querySelector('#nomE').value
    const prenomE = target.querySelector('#prenomE').value
    const dateNE = target.querySelector('#dateNE').value
    const lieuNE = target.querySelector('#lieuNE').value
    const adressePersoE = target.querySelector('#adressePersoE').value
    const adresseProE = target.querySelector('#adresseProE').value
    const emailE = target.querySelector('#emailE').value
    const sexE = target.querySelector('#sexE').value
    const nationaliteE = target.querySelector('#nationaliteE').value
    const mobileE = target.querySelector('#mobileE').value
    console.log(matriculeE, nomE, prenomE, dateNE, lieuNE, adressePersoE, adresseProE, emailE, sexE, nationaliteE, mobileE)
    let newEtudiant: Etudiant = {
      idE:null,
      matriculeE:matriculeE,
      nomE:nomE,
      prenomE:prenomE,
      dateNE:dateNE,
      lieuNE:lieuNE,
      adressePersoE:adressePersoE,
      adresseProE:adresseProE,
      emailE:emailE,
      sexE:sexE,
      nationaliteE:nationaliteE,
      mobileE:mobileE
    }
    this.apiService.postEtudiant(newEtudiant).subscribe(
      res => {
        newEtudiant.idE = res.idE;
        this.etudiants.push(newEtudiant);
      },
      err => {
        alert("Erreur lors de l'insertion d'un étudiant !");
      }
    );
  }
}
