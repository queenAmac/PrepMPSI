/* ==========================
   PREPMPSI 2.0 - APP.JS
========================== */


/* ==========================
   VARIABLES
========================== */


let xp = Number(localStorage.getItem("xp")) || 0;


let pseudo = localStorage.getItem("pseudo");



const pseudoPopup = document.getElementById("pseudoPopup");
const pseudoInput = document.getElementById("pseudoInput");
const startButton = document.getElementById("startButton");

const pseudoProfil = document.getElementById("pseudoProfil");

const xpElement = document.getElementById("xp");
const xpProfil = document.getElementById("xpProfil");
const xpText = document.getElementById("xpText");

const niveau = document.getElementById("niveau");
const niveauProfil = document.getElementById("niveauProfil");

const xpProgress = document.getElementById("xpProgress");

const messageSnake = document.getElementById("messageSnake");





/* ==========================
   UTILISATEUR
========================== */


function chargerUtilisateur(){


    if(!pseudoPopup) return;



    if(pseudo){


        pseudoPopup.style.display="none";


    }

    else{


        pseudoPopup.style.display="flex";


    }



    afficherPseudo();


}







if(startButton){


startButton.onclick=function(){



    let valeur=pseudoInput.value.trim();



    if(valeur===""){


        alert("Entre un pseudo 🐍");


        return;


    }



    pseudo=valeur;



    localStorage.setItem(
        "pseudo",
        pseudo
    );



    pseudoPopup.style.display="none";



    afficherPseudo();



};



}







function afficherPseudo(){


    if(!pseudo) return;



    if(pseudoProfil){

        pseudoProfil.textContent=pseudo;

    }



    if(messageSnake){


        messageSnake.innerHTML=

        `Coucou ${pseudo} 👋🐍<br>
        On reprend où on en était ?`;


    }


}







/* ==========================
   XP
========================== */


function ajouterXP(nombre){


    xp+=nombre;


    localStorage.setItem(
        "xp",
        xp
    );



    actualiserXP();


}






function actualiserXP(){



    if(xpElement)
        xpElement.textContent=xp;


    if(xpProfil)
        xpProfil.textContent=xp;


    if(xpText)
        xpText.textContent=xp+" XP";



    let niveauTexte;



    if(xp<100){


        niveauTexte="🐣 Débutant";


    }

    else if(xp<300){


        niveauTexte="🐍 Python Initié";


    }

    else if(xp<700){


        niveauTexte="🔥 Codeur Confirmé";


    }

    else{


        niveauTexte="👑 Maître Python";


    }



    if(niveau)
        niveau.textContent=niveauTexte;


    if(niveauProfil)
        niveauProfil.textContent=niveauTexte;



    if(xpProgress){


        xpProgress.style.width=
        (xp%100)+"%";


    }/* ==========================
   PREPSNAKE ASSISTANT
========================== */


function snakeMessage(type){


    if(!messageSnake) return;



    let nom=pseudo || "champion";



    const messages={


        succes:

        `YES ${nom} 🐍🔥<br>
        Ton code fonctionne ! +10 XP`,



        erreur:

        `Pas grave ${nom} 😌<br>
        Les bugs font partie de l'apprentissage.`,



        debut:

        `Coucou ${nom} 👋🐍<br>
        On reprend où on en était ?`,



        indice:

        `Petit indice ${nom} 💡<br>
        Regarde la structure avant de chercher la réponse.`,



        aide:

        `Je suis ton serpent assistant 🐍<br>
        Je t'aide à réfléchir, pas à faire l'exercice à ta place 😉`


    };



    messageSnake.innerHTML =
    messages[type] || messages.debut;


}









/* ==========================
   BOUTONS ASSISTANT
========================== */


const boutonIndice =
document.getElementById("indice");


const boutonIA =
document.getElementById("aideIA");



if(boutonIndice){


boutonIndice.onclick=function(){


    snakeMessage("indice");


};


}





if(boutonIA){


boutonIA.onclick=function(){


    snakeMessage("aide");


};


}









/* ==========================
   NAVIGATION MOBILE / APP
========================== */


const pages={


    accueil:
    document.getElementById("pageAccueil"),



    cours:
    document.getElementById("pageCours"),



    profil:
    document.getElementById("pageProfil")

};






function ouvrirPage(nom){



    Object.values(pages).forEach(page=>{


        if(page){

            page.classList.add("hidden");

        }


    });




    if(pages[nom]){


        pages[nom].classList.remove("hidden");


    }


}







const navAccueil =
document.getElementById("accueil");


const navCours =
document.getElementById("cours");


const navProfil =
document.getElementById("profil");







if(navAccueil){


navAccueil.onclick=function(){


    ouvrirPage("accueil");


};


}






if(navCours){


navCours.onclick=function(){


    ouvrirPage("cours");


};


}






if(navProfil){


navProfil.onclick=function(){


    ouvrirPage("profil");


};


}









/* ==========================
   MENU CHAPITRES MOBILE
========================== */


const menuMobile =
document.getElementById("menuMobile");


const fermerMenu =
document.getElementById("fermerMenu");


const menuChapitre =
document.getElementById("menuChapitre");






if(menuMobile && menuChapitre){


menuMobile.onclick=function(){


    menuChapitre.classList.add("active");


};


}





if(fermerMenu && menuChapitre){


fermerMenu.onclick=function(){


    menuChapitre.classList.remove("active");


};


}






document.querySelectorAll(".chapitres button")
.forEach(bouton=>{


    bouton.onclick=function(){


        if(menuChapitre){


            menuChapitre.classList.remove("active");


        }



        snakeMessage("debut");


    };


});/* ==========================
   CHANGEMENT PSEUDO
========================== */


const changerPseudo =
document.getElementById("changerPseudo");




if(changerPseudo){



changerPseudo.onclick=function(){



    let nouveau = prompt(
        "🐍 Nouveau pseudo :",
        pseudo || ""
    );



    if(nouveau && nouveau.trim()){


        pseudo = nouveau.trim();



        localStorage.setItem(
            "pseudo",
            pseudo
        );



        afficherPseudo();



    }


};



}









/* ==========================
   BARRE IPHONE AUTO HIDE
========================== */


const bottomNav =
document.querySelector(".bottom-nav");



let timerNav;





function cacherNavigation(){


    if(!bottomNav) return;



    if(window.innerWidth<=768){


        bottomNav.classList.add("hide");


    }


}







function montrerNavigation(){


    if(!bottomNav) return;



    bottomNav.classList.remove("hide");



    clearTimeout(timerNav);



    timerNav=setTimeout(

        cacherNavigation,

        1750

    );



}







window.addEventListener(
    "scroll",
    montrerNavigation
);



window.addEventListener(
    "touchstart",
    montrerNavigation
);



window.addEventListener(
    "touchmove",
    montrerNavigation
);









/* ==========================
   NAVIGATION ACTIVE
========================== */


document.querySelectorAll(".nav-btn")
.forEach(btn=>{


    btn.onclick=function(){


        document
        .querySelectorAll(".nav-btn")
        .forEach(b=>{


            b.classList.remove("active");


        });



        btn.classList.add("active");


    };


});









/* ==========================
   BOUTONS EXERCICES
========================== */


const verifier =
document.getElementById("verifier");


const suivant =
document.getElementById("suivant");





if(verifier){


verifier.onclick=function(){



    ajouterXP(10);



    snakeMessage("succes");



};


}






if(suivant){


suivant.onclick=function(){



    ajouterXP(5);



    snakeMessage("debut");



};


}









/* ==========================
   INITIALISATION
========================== */


chargerUtilisateur();


actualiserXP();


montrerNavigation();









/* ==========================
   MESSAGE DE RETOUR
========================== */


setTimeout(()=>{



    if(pseudo && messageSnake){



        const messages=[


        `Bienvenue ${pseudo} 🐍`,


        `Prêt pour coder aujourd'hui ${pseudo} ? 😎`,


        `Le Python t'attend ${pseudo} 🔥`


        ];



        messageSnake.innerHTML =

        messages[
            Math.floor(
                Math.random()*messages.length
            )
        ];



    }



},3000);


}
