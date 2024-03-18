/**
 * La classe `Point` représente un point dans un repère orthonormé
 */
export class Point {
    /**
     * abscisse dans un repètre orthonormé (x)
     **/
    public x: number;

    /**
     * ordonnée dans un repètre orthonormé (y)
     */
    public y: number;

    /**
     * Constructeur d'un `Point`
     * stockage des coordonnées (x,y)
     */
    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    /**
     * renvoie une représentation textuelle d'un point en affichant ses coordonnées x,y
     */
    public toString(): string {
        return `x : ${this.x}, y : ${this.y}`;
    }

    /**
     * Calcule la distance entre 2 points
     * @returns `d = |2(xA-xB) + 2(yA-yB)|
     */
    public distanceFrom(p: Point) {
        return Math.abs((p.x - this.x) * 2 + (p.y - this.y) * 2);
    }
}
