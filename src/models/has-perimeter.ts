/**
 * L'interface `hasPerimeter` décrit quelles méthodes __doivent__ être
 * implémentées pour toute classe qui veut faire respecter son contrat
 */
interface hasPerimeter {
    /**
     * On décrit qu'un objet implémentant `hasPerimeter`
     * doit fournir une méthode `getPerimetre`
     * qui renvoie un nombre
     */
    getPerimetre(): number;
}
