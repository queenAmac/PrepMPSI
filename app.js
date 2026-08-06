console.log("PrepMPSI chargé");



const titre = document.getElementById("titre");
const compteur = document.getElementById("compteur");
const enonce = document.getElementById("enonce");
const code = document.getElementById("code");
const output = document.querySelector(".output");

const boutonVerifier = document.getElementById("verifier");
const boutonSuivant = document.getElementById("suivant");

const xpElement = document.getElementById("xp");
const niveau = document.getElementById("niveau");

const menuMobile = document.getElementById("menuMobile");
const menuChapitre = document.getElementById("menuChapitre");



let chapitreActuel = "Variables";

let numeroExercice = 0;



let xp = Number(localStorage.getItem("xp")) || 0;



let progression = JSON.parse(
    localStorage.getItem("progression")
) || {};





/* =====================
   NIVEAU
===================== */


function mettreAJourNiveau(){


    if(xp < 100){

        niveau.textContent="Débutant";

    }

    else if(xp < 300){

        niveau.textContent="Apprenti Python";

    }

    else if(xp < 600){

        niveau.textContent="Programmeur";

    }

    else{

        niveau.textContent="Niveau MPSI 🚀";

    }


}



function sauvegarder(){


    localStorage.setItem(
        "xp",
        xp
    );


    localStorage.setItem(
        "progression",
        JSON.stringify(progression)
    );


}






/* =====================
   AFFICHER EXERCICE
===================== */


function afficherExercice(){


    let exercice =
    exercices[chapitreActuel][numeroExercice];


    titre.textContent =
    chapitreActuel;



    compteur.textContent =
    `Exercice ${numeroExercice+1} / ${exercices[chapitreActuel].length}`;



    enonce.textContent =
    exercice.titre +
    " : " +
    exercice.enonce;



    code.value="";


    output.textContent="Sortie :";


}







/* =====================
   CHAPITRES
===================== */


document
.querySelectorAll("aside button")
.forEach(button=>{


    button.addEventListener(
        "click",
        ()=>{


        chapitreActuel =
        button.textContent;


        numeroExercice =
        progression[chapitreActuel] || 0;


        afficherExercice();



        // ferme menu mobile

        menuChapitre.classList.remove("active");


        }
    );


});







/* =====================
   VERIFIER
===================== */


boutonVerifier.addEventListener(
"click",
()=>{


let exercice =
exercices[chapitreActuel][numeroExercice];



if(code.value.includes(exercice.solution)){


    output.textContent =
    "✅ Correct ! +" +
    exercice.xp +
    " XP";



    xp += exercice.xp;



    progression[chapitreActuel] =
    numeroExercice + 1;



    sauvegarder();



    xpElement.textContent=xp;


    mettreAJourNiveau();


}


else{


    output.textContent =
    "❌ Pas encore";


}



});








/* =====================
   SUIVANT
===================== */


boutonSuivant.addEventListener(
"click",
()=>{


if(numeroExercice <
exercices[chapitreActuel].length-1){


    numeroExercice++;

    afficherExercice();


}

else{


    output.textContent =
    "🎉 Chapitre terminé !";


}



});








/* =====================
   MENU MOBILE
===================== */


menuMobile.addEventListener(
"click",
()=>{


menuChapitre.classList.toggle("active");


});








/* =====================
   BARRE DU BAS
===================== */


document
.getElementById("cours")
.addEventListener(
"click",
()=>{


menuChapitre.classList.add("active");


});




document
.getElementById("profil")
.addEventListener(
"click",
()=>{


alert(
`🏆 XP : ${xp}\n🚀 ${niveau.textContent}`
);


});



document
.getElementById("accueil")
.addEventListener(
"click",
()=>{


chapitreActuel="Variables";

numeroExercice=0;

afficherExercice();


});








/* INITIALISATION */


xpElement.textContent=xp;

mettreAJourNiveau();

afficherExercice();
