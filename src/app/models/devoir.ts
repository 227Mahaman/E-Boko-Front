import {Module} from "./module";

export interface Devoir {
  idD:string;
  codeD:string;
  dateD:Date;
  sessionD:string;
  typeD:string;
  coefD:string;
  codeMo:Module;
  nbHeureD:string;
  heureDebutD:string;
  periodeD:string;
}
