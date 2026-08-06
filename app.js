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
   PSEUDO
========================== */


function chargerUtilisateur(){


    if(pseudo){


        pseudoPopup.style.display="none";


    }


    else{


        pseudoPopup.style.display="flex";


    }



    afficherPseudo();


}





startButton.onclick=function(){


    let valeur=pseudoInput.value.trim();



    if(valeur){


        pseudo=valeur;



        localStorage.setItem(
            "pseudo",
            pseudo
        );



        pseudoPopup.style.display="none";



        messageSnake.innerHTML=

        `Salut ${pseudo} 🐍 !
        Prêt à progresser ?`;

    }



};







function afficherPseudo(){


    if(pseudo){


        pseudoProfil.textContent=pseudo;



        messageSnake.innerHTML=


        `Coucou ${pseudo} 👋
        On reprend là où on s'était arrêté ? 🐍`;

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


    xpElement.textContent=xp;


    xpProfil.textContent=xp;


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




    niveau.textContent=niveauTexte;


    niveauProfil.textContent=niveauTexte;





    let progression=(xp%100);



    xpProgress.style.width=
    progression+"%";



}










/* ==========================
   MESSAGES PREPSNAKE
========================== */



function snakeMessage(type){


    let nom=pseudo || "champion";



    const messages={



        succes:

        `YES ${nom} 🐍🔥
        Ton code fonctionne ! +10 XP`,



        erreur:

        `Pas grave ${nom} 😌
        Même les développeurs font des bugs.
        On cherche ensemble ?`,




        debut:

        `Coucou ${nom} 👋
        On reprend où on en était ?`,




        indice:

        `Petit indice ${nom} 💡 :
        regarde bien la structure du problème 😉`,



        aide:

        `Je suis ton serpent assistant 🐍
        Je peux t'aider à réfléchir,
        mais je ne vais pas manger l'exercice à ta place 😄`



    };



    messageSnake.innerHTML=
    messages[type];

}









/* ==========================
   BOUTONS ASSISTANT
========================== */


const boutonIndice=
document.getElementById("indice");


const boutonIA=
document.getElementById("aideIA");





boutonIndice.onclick=function(){


    snakeMessage("indice");


};






boutonIA.onclick=function(){


    snakeMessage("aide");


};






/* ==========================
   NAVIGATION
========================== */


const accueil=
document.getElementById("accueil");


const cours=
document.getElementById("cours");


const profil=
document.getElementById("profil");



const pageAccueil=
document.getElementById("pageAccueil");


const pageCours=
document.getElementById("pageCours");


const pageProfil=
document.getElementById("pageProfil");





function changerPage(page){


    pageAccueil.classList.add("hidden");

    pageCours.classList.add("hidden");

    pageProfil.classList.add("hidden");



    page.classList.remove("hidden");



}




accueil.onclick=function(){


    changerPage(pageAccueil);


};




cours.onclick=function(){


    changerPage(pageCours);


};




profil.onclick=function(){


    changerPage(pageProfil);


};/* ==========================
   MENU MOBILE
========================== */


const menuMobile =
document.getElementById("menuMobile");


const fermerMenu =
document.getElementById("fermerMenu");


const menuChapitre =
document.getElementById("menuChapitre");





menuMobile.onclick=function(){


    menuChapitre.classList.add("active");


};





fermerMenu.onclick=function(){


    menuChapitre.classList.remove("active");


};








/* Fermer le menu en cliquant sur un chapitre */


document.querySelectorAll(".chapitres button")
.forEach(bouton=>{


    bouton.onclick=function(){


        menuChapitre.classList.remove("active");


        snakeMessage("debut");


    }


});









/* ==========================
   CHANGEMENT PSEUDO
========================== */


const changerPseudo =
document.getElementById("changerPseudo");





changerPseudo.onclick=function(){


    let nouveau=
    prompt(
        "🐍 Nouveau pseudo :",
        pseudo
    );



    if(nouveau && nouveau.trim()){


        pseudo=
        nouveau.trim();



        localStorage.setItem(
            "pseudo",
            pseudo
        );



        afficherPseudo();



    }


};









/* ==========================
   BARRE IPHONE AUTO HIDE
========================== */


const bottomNav =
document.querySelector(".bottom-nav");



let timerNav;






function cacherNavigation(){


    if(window.innerWidth<=768){


        bottomNav.classList.add("hide");


    }


}





function montrerNavigation(){


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
    "mousemove",
    montrerNavigation
);









/* ==========================
   BOUTONS NAV ACTIFS
========================== */



document.querySelectorAll(".nav-btn")
.forEach(btn=>{


    btn.onclick=function(){


        document
        .querySelectorAll(".nav-btn")
        .forEach(b=>
            b.classList.remove("active")
        );



        btn.classList.add("active");


    }


});









/* ==========================
   EXEMPLE VERIFICATION
========================== */



const verifier =
document.getElementById("verifier");



const suivant =
document.getElementById("suivant");





verifier.onclick=function(){


    ajouterXP(10);



    snakeMessage("succes");



};






suivant.onclick=function(){


    ajouterXP(5);



    snakeMessage("debut");


};









/* ==========================
   INITIALISATION
========================== */


chargerUtilisateur();


actualiserXP();


montrerNavigation();








/* ==========================
   MESSAGE ALEATOIRE AU RETOUR
========================== */


setTimeout(()=>{


    if(pseudo){


        const messages=[


        `Bienvenue ${pseudo} 🐍`,
        

        `Prêt pour un nouvel exercice ${pseudo} ?`,


        `Le Python t'attend ${pseudo} 😎`


        ];



        messageSnake.innerHTML=
        messages[
            Math.floor(
                Math.random()*messages.length
            )
        ];


    }



},3000);
