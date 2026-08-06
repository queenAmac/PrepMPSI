console.log("🐍 PrepMPSI chargé");



/* ELEMENTS */


const titre = document.getElementById("titre");
const compteur = document.getElementById("compteur");
const enonce = document.getElementById("enonce");
const code = document.getElementById("code");
const output = document.querySelector(".output");


const boutonVerifier =
document.getElementById("verifier");

const boutonSuivant =
document.getElementById("suivant");



const xpElement =
document.getElementById("xp");

const niveau =
document.getElementById("niveau");



const xpProfil =
document.getElementById("xpProfil");

const niveauProfil =
document.getElementById("niveauProfil");



const xpProgress =
document.getElementById("xpProgress");

const xpProgressProfil =
document.getElementById("xpProgressProfil");



const menuChapitre =
document.getElementById("menuChapitre");

const menuMobile =
document.getElementById("menuMobile");





/* DONNEES */


let chapitreActuel = "Variables";


let numeroExercice = 0;



let xp =
Number(localStorage.getItem("xp")) || 0;



let progression =
JSON.parse(
localStorage.getItem("progression")
)
||
{};








/* XP + NIVEAU */


function mettreAJourNiveau(){


let niveauTexte;


if(xp < 100){

niveauTexte="Débutant";

}


else if(xp < 300){

niveauTexte="Apprenti Python";

}


else if(xp < 600){

niveauTexte="Programmeur";

}


else{

niveauTexte="Niveau MPSI 🚀";

}



niveau.textContent=niveauTexte;

niveauProfil.textContent=niveauTexte;



}




function mettreAJourXP(){



xpElement.textContent=xp;

xpProfil.textContent=xp;



let objectif=100;


if(xp>=100 && xp<300){

objectif=300;

}

else if(xp>=300 && xp<600){

objectif=600;

}

else if(xp>=600){

objectif=1000;

}



let pourcentage =
Math.min(
(xp/objectif)*100,
100
);



xpProgress.style.width =
pourcentage+"%";


xpProgressProfil.style.width =
pourcentage+"%";



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




/* AFFICHAGE EXERCICE */


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








/* CHAPITRES */


document
.querySelectorAll(".chapitres button")
.forEach(button=>{


button.addEventListener(
"click",
()=>{


chapitreActuel =
button.textContent;



numeroExercice =
progression[chapitreActuel] || 0;



afficherExercice();



menuChapitre.classList.remove("active");


});


});









/* VERIFICATION */


boutonVerifier.addEventListener(
"click",
()=>{


let exercice =
exercices[chapitreActuel][numeroExercice];



if(
code.value.includes(exercice.solution)
){



output.textContent =
"✅ Correct ! +" +
exercice.xp +
" XP";



xp += exercice.xp;



progression[chapitreActuel]
=
numeroExercice+1;



sauvegarder();



mettreAJourXP();

mettreAJourNiveau();



}



else{


output.textContent =
"❌ Pas encore";


}



});








/* SUIVANT */


boutonSuivant.addEventListener(
"click",
()=>{


if(
numeroExercice <
exercices[chapitreActuel].length-1
){


numeroExercice++;


afficherExercice();



}


else{


output.textContent =
"🎉 Chapitre terminé !";


}



});









/* MENU MOBILE */


menuMobile.addEventListener(
"click",
()=>{


menuChapitre.classList.toggle("active");


});








/* NAVIGATION MOBILE */


const pageAccueil =
document.getElementById("pageAccueil");

const pageCours =
document.getElementById("pageCours");

const pageProfil =
document.getElementById("pageProfil");




function changerPage(page){


pageAccueil.classList.add("hidden");

pageCours.classList.add("hidden");

pageProfil.classList.add("hidden");


page.classList.remove("hidden");


}





document
.getElementById("accueil")
.onclick =
()=>{


changerPage(pageAccueil);


};






document
.getElementById("cours")
.onclick =
()=>{


changerPage(pageCours);


chargerCours();


};






document
.getElementById("profil")
.onclick =
()=>{


changerPage(pageProfil);


mettreAJourXP();

mettreAJourNiveau();


};










/* LISTE COURS MOBILE */


function chargerCours(){


const liste =
document.getElementById("listeCours");


liste.innerHTML="";



Object.keys(exercices)
.forEach(chapitre=>{


let bouton =
document.createElement("button");


bouton.textContent =
"📘 "+chapitre;



bouton.onclick =
()=>{


chapitreActuel =
chapitre;



numeroExercice =
progression[chapitre] || 0;



changerPage(pageAccueil);


afficherExercice();


};



liste.appendChild(bouton);



});


}







/* INITIALISATION */


mettreAJourXP();

mettreAJourNiveau();


afficherExercice();
