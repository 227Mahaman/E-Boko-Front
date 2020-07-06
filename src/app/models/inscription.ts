import {Anneescolaire} from "./anneescolaire";
import {Filiere} from "./filiere";
import {Niveau} from "./niveau";

export interface Inscription {
  idI:string;
  codeI:string;
  dateI:Date;
  idA:Anneescolaire;
  idF:Filiere;
  idN:Niveau;
  idNu:string;
  matriculeE:string;
  dateCreation:Date;
}
