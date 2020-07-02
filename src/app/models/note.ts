import {Devoir} from "./devoir";
import {Etudiant} from "./etudiant";

export interface Note {
  idNo:string;
  codeNo:string;
  valeurNo:string;
  codeD:Devoir;
  matriculeE:Etudiant;
  dateCreation: Date;
}
