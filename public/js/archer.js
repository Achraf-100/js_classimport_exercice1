import { Humain } from "./humain.js";

class Archer extends Humain {
    constructor (nom,age,fleches) {
        super (nom,age)
        this.fleches = fleches
    }
}
let perso = new Archer ('Archer',20, 'fleches rouges')

console.log(perso);