/**
 * ce script vise à reproduire le jeu du juste prix, a 4.
 * Un prix pour un produit donné est fixé.
 * 4 joueurs vont donner leurs prenoms / pseudos
 * Nous allons ensuite, leur demander le score
 * Le joueur etant le plus proche du prix fixé a gagné la partie
 * Il doit être stipulé sur la page HTML, le nom du gagnant
 */

// justePrix contient la valeur à trouver
const justePrix = 57;

//declaration et initialisation du tableau des joueurs
const player = [];

// 0 , 1 , 2, 3
/**
 * Boucle 1 : récupération du nom avec le score proposée + stockage
 */
for(let i = 0; i < 3; i++){
    //recuperation du nom du joueur
    let namePlayer = prompt("Entrez votre nom : ");

    //recuperation du score
    let score = parseInt(prompt("Entrez le prix : "));

    player.push([namePlayer,score]); //
    /**
     * [
     * ["frederic",58],
     * ["melissa",48]
     * ]
     */
}

/**
 * Boucle 2 : calculer la valeur absolue et remplacer le score du joueur donnée par celle-ci
 */
for(let i = 0; i< player.length; i++){

    /**
     * [
     *  ["frederic",58],
     *  ["melissa",48]
     * ]
     */

    // calculer la valeur absolue du player donné
    const absolue = Math.abs(player[i][1] - justePrix);
    console.log(absolue);

    // modifier le score du joueur pour lui donner la valeur absolue
    player[i][1] = absolue;
}

/**
 * Boucle 3 : trouver qui a gagné, ce qui veux dire, le joueur qui a le score le moins elevees
 **/

//pour le moment, je dis que le premier joueur a gagné

/**
 *
 *
 * [
 * ["frederic",1]
 * ]
 *
 **/
let gagnant = [player[0]];

// je boucle sur chaque element
for(let i = 0; i < player.length; i++){

    /**
     * [
     *  ["frederic",1],
     *  ["thibaut",0],
     *  ["melissa",9]
     * ]
     */

    if(player[i][1] < gagnant[0][1]) {
        gagnant = player[i];
    }
}

/**
 * écriture dans le html
 */

document.getElementById("gagnant").innerText = "le joueur " + gagnant[0][0] + " a gagné, avec une difference de " + gagnant[0][1];
