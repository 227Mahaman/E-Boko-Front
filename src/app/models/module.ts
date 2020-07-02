import {Anneescolaire} from "./anneescolaire";
import {Filiere} from "./filiere";
import {Ue} from "./ue";
import {Niveau} from "./niveau";
import {Semestre} from "./semestre";

export interface Module {
  idMo:string;
  codeMo:string;
  creditMo:string;
  codeA:Anneescolaire;
  codeF:Filiere;
  codeN:Niveau;
  codeUe:Ue;
  codeS:Semestre;
  dateCreation:Date;
}
