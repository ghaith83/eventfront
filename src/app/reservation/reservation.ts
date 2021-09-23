import { salle } from "../salles/Salles";


export class reservation{
    idresrvation? :number;
    datereservation?:Date;
    idsalle?:number;
    salle?:salle
    constructor(){}
}