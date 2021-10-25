import { Time } from "@angular/common";
import { participant } from "../gereequipe/participant";
import { reservation } from "../reservation/reservation";
import { salle } from "../salles/Salles";

export class planning{
    id?:number 
	idsalle?:salle;
	 heuredebut?:Time;
	 heurefin?:Time;
	 nomTache?:string;
	 detailTache?:string;
	 idresrvation?:reservation;
	 nompart?:string
    constructor(){}
}