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
const joueurs = [];
const NB_JOUEURS = 4 ;
//récupération des données du formulaire
const form = document.getElementById("monFormulaire");
const liste = document.getElementById("liste");


function afficherjoueurs(){
    liste.innerHTML = '';
     joueurs.forEach((joueur)=> {
      let element = document.createElement("li");
      element.innerText = 
      "Nom du joueur : " +
      joueur.name +
      " Prix choisi : " +
      joueur.price;
      liste.append(element);
     });  
}

function calculerVainqueur() {
  joueurs.forEach((joueur) => {
    joueur.absolue = Math.abs(joueur.price - justePrix);
  });
  let gagnant = joueurs[0] ;
  for (let i = 1; i < joueurs.length; i++) {
    if (gagnant.absolue > joueurs[i].absolue) {
      gagnant = joueurs[i];
    }
  }


  /***
   * gagnant: {
   *  name ,
   *  price
   *  absolue
   * }
   */

  document.getElementById("gagnant").innerText =
    "le joueur " +
    gagnant.name +
    " a gagné, avec une difference de " +
    gagnant.absolue;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //const values= new FormData(form);
  const name = document.getElementById("name").value;
  const price = document.getElementById("goodprice").value;
  const joueur = {
    name: name,
    price: price,
    absolue: -1
  };
  joueurs.push(joueur);
  afficherjoueurs();
  if (joueurs.length === NB_JOUEURS) {
    calculerVainqueur();
  }
  document.getElementById("name").value = '';
  document.getElementById("goodprice").value = null;
});
