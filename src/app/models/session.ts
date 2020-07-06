import {Ue} from "./ue";

export interface Session {
  idSes:string;
  codeSes:string;
  debutSes:Date;
  finSes:Date;
  idUe:Ue;
}
