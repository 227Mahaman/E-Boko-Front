import {Niveau} from "./niveau";

export interface Semestre {
  idS:string;
  codeS:string;
  codeN:Niveau;
  intituleS:string;
  dateCreation:Date;
}
