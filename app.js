console.log("🐍 PrepMPSI chargé");



/* ======================
ELEMENTS
====================== */


const titre = document.getElementById("titre");
const compteur = document.getElementById("compteur");
const enonce = document.getElementById("enonce");
const code = document.getElementById("code");
const output = document.querySelector(".output");


const xpElement = document.getElementById("xp");
const niveauElement = document.getElementById("niveau");


const xpProfil = document.getElementById("xpProfil");
const niveauProfil = document.getElementById("niveauProfil");


const xpProgress = document.getElementById("xpProgress");
const xpProgressProfil = document.getElementById("xpProgressProfil");



const menuMobile = document.getElementById("menuMobile");
const menuChapitre = document.getElementById("menuChapitre");



/* ======================
DONNEES
====================== */


let chapitreActuel = "Variables";

let numeroExercice = 0;



let xp = Number(
    localStorage.getItem("xp")
) || 0;



let progression =
JSON.parse(
    localStorage.getItem("progression")
)
|| {};






/* ======================
NIVEAUX
====================== */


function mettreAJourNiveau(){


let nom;


if(xp < 100){

    nom="🌱 Débutant";

}

else if(xp < 300){

    nom="🐍 Python Initié";

}

else if(xp < 700){

    nom="💻 Programmeur";

}

else if(xp < 1200){

    nom="⚡ Algorithmicien";

}

else{

    nom="🚀 Niveau MPSI";

}



niveauElement.textContent = nom;

niveauProfil.textContent = nom;


}







function mettreAJourXP(){



xpElement.textContent=xp;

xpProfil.textContent=xp;



let objectif=100;


if(xp>=100 && xp<300)
objectif=300;


else if(xp>=300 && xp<700)
objectif=700;


else if(xp>=700 && xp<1200)
objectif=1200;


else if(xp>=1200)
objectif=1500;




let pourcentage =
Math.min(
    xp/objectif*100,
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









/* ======================
EXERCICES
====================== */


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


output.textContent =
"Sortie :";


}








/* ======================
CHAPITRES
====================== */


document
.querySelectorAll(".chapitres button")
.forEach(button=>{


button.onclick=()=>{


chapitreActuel =
button.textContent;



numeroExercice =
progression[chapitreActuel] || 0;



afficherExercice();



menuChapitre.classList.remove("active");


};



});









/* ======================
VERIFIER
====================== */


document
.getElementById("verifier")
.onclick=()=>{


let exercice =
exercices[chapitreActuel][numeroExercice];



if(
code.value.includes(
exercice.solution
)
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
"❌ Essaie encore";


}


};









/* ======================
SUIVANT
====================== */


document
.getElementById("suivant")
.onclick=()=>{


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


};








/* ======================
MENU MOBILE
====================== */


menuMobile.onclick=()=>{


menuChapitre
.classList.toggle("active");


};









/* ======================
NAVIGATION MOBILE
====================== */


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
.onclick=()=>{


changerPage(pageAccueil);


};






document
.getElementById("cours")
.onclick=()=>{


changerPage(pageCours);


chargerCours();


};







document
.getElementById("profil")
.onclick=()=>{


changerPage(pageProfil);


mettreAJourXP();

mettreAJourNiveau();


};









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



bouton.onclick=()=>{


chapitreActuel=chapitre;


numeroExercice =
progression[chapitre] || 0;


changerPage(pageAccueil);


afficherExercice();


};



liste.appendChild(bouton);



});


}









/* ======================
BARRE MOBILE INTELLIGENTE
====================== */


const barreNav =
document.querySelector(".bottom-nav");


let timerBarre;



function afficherBarre(){


barreNav.classList.remove("hide");



clearTimeout(timerBarre);



timerBarre=setTimeout(()=>{


barreNav.classList.add("hide");


},3000);


}



window.addEventListener(
"scroll",
afficherBarre
);



window.addEventListener(
"touchstart",
afficherBarre
);



window.addEventListener(
"mousemove",
afficherBarre
);









/* ======================
START
====================== */


mettreAJourXP();

mettreAJourNiveau();

afficherBarre();

afficherExercice();
