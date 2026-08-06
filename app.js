console.log("PrepMPSI chargé");


// ELEMENTS

const titre = document.getElementById("titre");
const compteur = document.getElementById("compteur");
const enonce = document.getElementById("enonce");
const code = document.getElementById("code");
const output = document.querySelector(".output");


const xpElement = document.getElementById("xp");
const niveau = document.getElementById("niveau");


const chapitreProgression =
document.getElementById("chapitreProgression");

const barreXP =
document.getElementById("barreXP");

const reussis =
document.getElementById("reussis");


const aideTexte =
document.getElementById("aideTexte");


const boutonCours =
document.getElementById("cours");

const boutonIndice =
document.getElementById("indice");

const boutonCorrection =
document.getElementById("correction");


const boutonVerifier =
document.getElementById("verifier");

const boutonSuivant =
document.getElementById("suivant");




// VARIABLES

let chapitreActuel = "Variables";

let numeroExercice = 0;


let xp =
Number(localStorage.getItem("xp")) || 0;



let progression =
JSON.parse(localStorage.getItem("progression")) || {};



let exercicesValides =
JSON.parse(localStorage.getItem("exercicesValides")) || {};





// AFFICHAGE XP

xpElement.textContent = xp;




// NIVEAU

function mettreAJourNiveau(){


    if(xp < 100){

        niveau.textContent = "Débutant";

    }


    else if(xp < 300){

        niveau.textContent = "Apprenti Python";

    }


    else if(xp < 600){

        niveau.textContent = "Programmeur";

    }


    else{

        niveau.textContent = "Niveau MPSI 🚀";

    }

}





// PROGRESSION CHAPITRE

function mettreAJourProgression(){


    let total =
    exercices[chapitreActuel].length;


    let fait = 0;



    for(let i=0; i<total; i++){


        let id =
        chapitreActuel + "-" + i;


        if(exercicesValides[id]){

            fait++;

        }

    }



    let pourcentage =
    Math.round((fait / total) * 100);



    chapitreProgression.textContent =
    pourcentage + " %";



    barreXP.style.width =
    pourcentage + "%";



    reussis.textContent =
    Object.keys(exercicesValides).length;



}






// AFFICHER EXERCICE

function afficherExercice(){


    let exercice =
    exercices[chapitreActuel][numeroExercice];



    titre.textContent =
    chapitreActuel;



    compteur.textContent =
    `Exercice ${numeroExercice + 1} / ${exercices[chapitreActuel].length}`;



    enonce.textContent =
    exercice.titre + " : " + exercice.enonce;



    code.value = "";

    output.textContent =
    "Sortie :";


    aideTexte.textContent = "";



    mettreAJourProgression();


}







// CHANGER CHAPITRE


document.querySelectorAll("aside button")
.forEach(button => {


    button.addEventListener("click",()=>{


        chapitreActuel =
        button.textContent;



        numeroExercice =
        progression[chapitreActuel] || 0;



        afficherExercice();



    });


});







// COURS

boutonCours.addEventListener("click",()=>{


    let exercice =
    exercices[chapitreActuel][numeroExercice];


    aideTexte.textContent =
    "📚 " + exercice.cours;


});






// INDICE

boutonIndice.addEventListener("click",()=>{


    let exercice =
    exercices[chapitreActuel][numeroExercice];


    aideTexte.textContent =
    "💡 " + exercice.indice;


});







// CORRECTION

boutonCorrection.addEventListener("click",()=>{


    let exercice =
    exercices[chapitreActuel][numeroExercice];


    aideTexte.textContent =
    "🧠 " + exercice.correction;


});








// VERIFIER

boutonVerifier.addEventListener("click",()=>{


    let exercice =
    exercices[chapitreActuel][numeroExercice];



    let id =
    chapitreActuel + "-" + numeroExercice;



    if(code.value.includes(exercice.solution)){



        if(!exercicesValides[id]){


            xp += exercice.xp;


            exercicesValides[id] = true;



            localStorage.setItem(
                "xp",
                xp
            );


            localStorage.setItem(
                "exercicesValides",
                JSON.stringify(exercicesValides)
            );


        }



        output.textContent =
        "✅ Correct ! +" + exercice.xp + " XP";



        xpElement.textContent = xp;



        mettreAJourNiveau();


        mettreAJourProgression();



        progression[chapitreActuel] =
        numeroExercice + 1;



        localStorage.setItem(
            "progression",
            JSON.stringify(progression)
        );



    }


    else{


        output.textContent =
        "❌ Pas encore";


    }



});








// SUIVANT

boutonSuivant.addEventListener("click",()=>{


    if(numeroExercice < exercices[chapitreActuel].length - 1){


        numeroExercice++;


        afficherExercice();


    }


    else{


        output.textContent =
        "🎉 Chapitre terminé !";


    }


});






// DEMARRAGE

numeroExercice =
progression[chapitreActuel] || 0;



mettreAJourNiveau();

afficherExercice();