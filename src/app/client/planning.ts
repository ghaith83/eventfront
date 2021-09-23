import { Time } from "@angular/common";
import { reservation } from "../reservation/reservation";
import { salle } from "../salles/Salles";

export class planning{
      idsalle?:salle;
	 heuredebut?:Time;
	 heurefin?:Time;
	 nomTache?:string;
	 detailTache?:string;
	 idresrvation?:reservation;
    constructor(){}
}