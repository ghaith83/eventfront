import { salle } from "../salles/Salles";


export class reservation{
    idresrvation? :number;
    datereservation?:Date;
    nomsalle?:string;
    salle?:salle
    constructor(){}
}