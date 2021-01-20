import { Humain } from "./humain.js";

class Guerrier extends Humain {
    constructor (nom,age,force,vie) {
        super (nom,age)
        this.force = force
        this.vie = vie
    }
}
let perso1 = new Guerrier ('Guerrier',25, '180 de force','100 de vie')

console.log(perso1);