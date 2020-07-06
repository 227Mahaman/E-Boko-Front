import {Niveau} from "./niveau";

export interface Semestre {
  idS:string;
  codeS:string;
  idN:Niveau;
  intituleS:string;
  dateCreation:Date;
}
