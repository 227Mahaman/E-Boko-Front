import {Devoir} from "./devoir";
import {Etudiant} from "./etudiant";

export interface Note {
  idNo:string;
  codeNo:string;
  valeurNo:string;
  idD:Devoir;
  idE:Etudiant;
  dateCreation: Date;
}
