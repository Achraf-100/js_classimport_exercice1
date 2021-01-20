import { Humain } from "./humain.js";

class Mage extends Humain {
    constructor (nom,age,magie) {
        super (nom,age)
        this.magie = magie
    }
}
let perso2 = new Mage ('Archer',20, 'magie noire')

console.log(perso2);