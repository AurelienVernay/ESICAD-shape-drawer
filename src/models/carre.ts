import { Point } from "./point";
import { Rectangle } from "./rectangle";

export class Carre extends Rectangle {
    constructor(origin: Point, cote: number) {
        super(origin, cote, cote);
    }

    override setLargeur(larg: number): void {
        super.setLargeur(larg);
        this.setLongueur(larg);
    }

    override setLongueur(long: number): void {
        super.setLongueur(long);
        this.setLargeur(long);
    }

    /**
     * change la taille des côtés d'un carré
     * @param {number} longueur la longueur du coté
     *
     * pas besoin de faire les 2 cotés car on a __surchargé__ la méthode `setLargeur()`
     * */
    setCote(longueur: number): void {
        this.setLargeur(longueur);
    }
}
