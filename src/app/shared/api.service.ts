import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Anneescolaire} from "../models/anneescolaire";
import {Ue} from "../models/ue";
import {Filiere} from "../models/filiere";
import {Niveau} from "../models/niveau";
import {Devoir} from "../models/devoir";
import {Module} from "../models/module";
import {Semestre} from "../models/semestre";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = "http://localhost:8081"
  //Anneescolaire
  private ALL_ANNEESCOLAIRE_URL = `${this.BASE_URL}\\anneescolaire\\all`;
  private SAVE_ANNEESCOLAIRE_URL = `${this.BASE_URL}\\anneescolaire\\add`;
  private UPDATE_ANNEESCOLAIRE_URL = `${this.BASE_URL}\\anneescolaire\\update`;
  private DELETE_ANNEESCOLAIRE_URL = `${this.BASE_URL}\\anneescolaire\\`;
  private GET_ANNEESCOLAIRE_URL = `${this.BASE_URL}\\anneescolaire\\`;
  //Devoir
  private ALL_DEVOIR_URL = `${this.BASE_URL}\\devoir\\all`;
  private SAVE_DEVOIR_URL = `${this.BASE_URL}\\devoir\\add`;
  private UPDATE_DEVOIR_URL = `${this.BASE_URL}\\devoir\\update`;
  private DELETE_DEVOIR_URL = `${this.BASE_URL}\\devoir\\`;
  //Etudiant
  private ALL_ETUDIANT_URL = `${this.BASE_URL}\\etudiant\\all`;
  private SAVE_ETUDIANT_URL = `${this.BASE_URL}\\etudiant\\add`;
  private UPDATE_ETUDIANT_URL = `${this.BASE_URL}\\etudiant\\update`;
  private DELETE_ETUDIANT_URL = `${this.BASE_URL}\\etudiant\\`;
  //Filiere
  private ALL_FILIERE_URL = `${this.BASE_URL}\\filiere\\all`;
  private SAVE_FILIERE_URL = `${this.BASE_URL}\\filiere\\add`;
  private UPDATE_FILIERE_URL = `${this.BASE_URL}\\filiere\\update`;
  private DELETE_FILIERE_URL = `${this.BASE_URL}\\filiere\\`;
  //Module
  private ALL_MODULE_URL = `${this.BASE_URL}\\module\\all`;
  private SAVE_MODULE_URL = `${this.BASE_URL}\\module\\add`;
  private UPDATE_MODULE_URL = `${this.BASE_URL}\\module\\update`;
  private DELETE_MODULE_URL = `${this.BASE_URL}\\module\\`;
  //Niveau
  private ALL_NIVEAU_URL = `${this.BASE_URL}\\niveau\\all`;
  private SAVE_NIVEAU_URL = `${this.BASE_URL}\\niveau\\add`;
  private UPDATE_NIVEAU_URL = `${this.BASE_URL}\\niveau\\update`;
  private DELETE_NIVEAU_URL = `${this.BASE_URL}\\niveau\\`;
  //Note
  private ALL_NOTE_URL = `${this.BASE_URL}\\note\\all`;
  private SAVE_NOTE_URL = `${this.BASE_URL}\\note\\add`;
  private UPDATE_NOTE_URL = `${this.BASE_URL}\\note\\update`;
  private DELETE_NOTE_URL = `${this.BASE_URL}\\note\\`;
  //Semestre
  private ALL_SEMESTRE_URL = `${this.BASE_URL}\\semestre\\all`;
  private SAVE_SEMESTRE_URL = `${this.BASE_URL}\\semestre\\add`;
  private UPDATE_SEMESTRE_URL = `${this.BASE_URL}\\semestre\\update`;
  private DELETE_SEMESTRE_URL = `${this.BASE_URL}\\semestre\\`;
  //Session
  private ALL_SESSION_URL = `${this.BASE_URL}\\session\\all`;
  private SAVE_SESSION_URL = `${this.BASE_URL}\\session\\add`;
  private UPDATE_SESSION_URL = `${this.BASE_URL}\\session\\update`;
  private DELETE_SESSION_URL = `${this.BASE_URL}\\session\\`;
  //Ue
  private ALL_UE_URL = `${this.BASE_URL}\\ue\\all`;
  private SAVE_UE_URL = `${this.BASE_URL}\\ue\\add`;
  private UPDATE_UE_URL = `${this.BASE_URL}\\ue\\update`;
  private DELETE_UE_URL = `${this.BASE_URL}\\ue\\`;

  constructor(private http: HttpClient) { }

  getAllAnneescolaires(): Observable<Anneescolaire[]>{
    return this.http.get<Anneescolaire[]>(this.ALL_ANNEESCOLAIRE_URL);
  }

  postAnneescolaire(anneescolaire: Anneescolaire): Observable<Anneescolaire> {
    return this.http.post<Anneescolaire>(this.SAVE_ANNEESCOLAIRE_URL, anneescolaire);
  }

  deleteAnneescolaire(id:string): Observable<any> {
    return this.http.delete(this.DELETE_ANNEESCOLAIRE_URL + id);
  }

  getUes(): Observable<Ue[]> {
    return this.http.get<Ue[]>(this.ALL_UE_URL);
  }

  postUe(ue: Ue): Observable<Ue> {
    return  this.http.post<Ue>(this.UPDATE_UE_URL, ue);
  }

  deleteUe(id:string): Observable<any> {
    return this.http.delete(this.DELETE_UE_URL + id);
  }

  getAllDevoirs(): Observable<Devoir[]> {
    return this.http.get<Devoir[]>(this.ALL_DEVOIR_URL);
  }

  getAllFilieres(): Observable<Filiere[]> {
    return this.http.get<Filiere[]>(this.ALL_FILIERE_URL);
  }

  getAllModules(): Observable<Module[]> {
    return this.http.get<Module[]>(this.ALL_MODULE_URL);
  }

  getAllNiveaux(): Observable<Niveau[]> {
    return this.http.get<Niveau[]>(this.ALL_NIVEAU_URL);
  }

  getAllSemestres(): Observable<Semestre[]> {
    return this.http.get<Semestre[]>(this.ALL_SEMESTRE_URL);
  }


  getAnnescolaire(idA: string): Observable<any>{
    return this.http.get(this.GET_ANNEESCOLAIRE_URL + idA);
  }
}
