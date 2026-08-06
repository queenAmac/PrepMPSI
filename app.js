/* ==========================
   PREPMPSI 2.0 - APP.JS
   Updated: add exercises rendering, improved PrepSnake hints, mobile nav handling
========================= */

/* ==========================
   VARIABLES
========================= */

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
const aideTexte = document.getElementById("aideTexte");

// exercise UI
const titreEl = document.getElementById('titre');
const compteurEl = document.getElementById('compteur');
const enonceEl = document.getElementById('enonce');
const codeEl = document.getElementById('code');
const verifierBtn = document.getElementById('verifier');
const suivantBtn = document.getElementById('suivant');

// chapter buttons (dynamically from .chapitres buttons)
const chapitreButtons = document.querySelectorAll('.chapitres button');

// keep track of current chapter and index
let currentChapter = localStorage.getItem('currentChapter') || 'Variables';
let currentIndex = Number(localStorage.getItem('currentIndex_' + currentChapter)) || 0;

/* ==========================
   UTILISATEUR / PSEUDO
========================= */

function chargerUtilisateur(){
    if(!pseudoPopup) return;

    if(pseudo){
        pseudoPopup.style.display = 'none';
    } else {
        pseudoPopup.style.display = 'flex';
    }

    afficherPseudo();
}

if(startButton){
    startButton.addEventListener('click', ()=>{
        let valeur = (pseudoInput && pseudoInput.value || '').trim();
        if(valeur === ''){
            alert('Entre un pseudo 🐍');
            return;
        }
        pseudo = valeur;
        localStorage.setItem('pseudo', pseudo);
        if(pseudoPopup) pseudoPopup.style.display = 'none';
        if(pseudoProfil) pseudoProfil.textContent = pseudo;
        if(messageSnake) messageSnake.innerHTML = `Coucou ${pseudo} 👋🐍<br>On reprend où on en était ?`;
    });
}

function afficherPseudo(){
    if(!pseudo) return;
    if(pseudoProfil) pseudoProfil.textContent = pseudo;
    if(messageSnake) messageSnake.innerHTML = `Coucou ${pseudo} 👋<br>On reprend là où on s'était arrêté ? 🐍`;
}

/* ==========================
   XP
========================= */

function ajouterXP(nombre){
    xp += Number(nombre) || 0;
    localStorage.setItem('xp', xp);
    actualiserXP();
}

function actualiserXP(){
    if(xpElement) xpElement.textContent = xp;
    if(xpProfil) xpProfil.textContent = xp;
    if(xpText) xpText.textContent = xp + ' XP';

    let niveauTexte = '🐣 Débutant';
    if(xp >= 700) niveauTexte = '👑 Maître Python';
    else if(xp >= 300) niveauTexte = '🔥 Codeur Confirmé';
    else if(xp >= 100) niveauTexte = '🐍 Python Initié';

    if(niveau) niveau.textContent = niveauTexte;
    if(niveauProfil) niveauProfil.textContent = niveauTexte;

    if(xpProgress){
        let progression = (xp % 100);
        xpProgress.style.width = progression + '%';
    }
}

/* ==========================
   PREPSNAKE MESSAGES & HINTS
========================= */

function snakeMessage(type){
    if(!messageSnake) return;
    let nom = pseudo || 'champion';

    const messages = {
        succes: `YES ${nom} 🐍🔥<br>Ton code fonctionne ! +10 XP`,
        erreur: `Pas grave ${nom} 😌<br>Les bugs font partie de l'apprentissage.`,
        debut: `Coucou ${nom} 👋🐍<br>On reprend où on en était ?`,
        indice: `Petit indice ${nom} 💡<br>Regarde la structure avant de chercher la réponse.`,
        aide: `Je suis ton serpent assistant 🐍<br>Je t'aide à réfléchir, pas à faire l'exercice à ta place 😉`
    };

    messageSnake.innerHTML = messages[type] || messages.debut;

    // aideTexte area: show longer hint or course when requested
    if(aideTexte){
        clearTimeout(aideTexte._timeout);
        if(type === 'indice'){
            // if current exercise has an indice, show it
            try{
                const ex = (window.exercices && window.exercices[currentChapter] && window.exercices[currentChapter][currentIndex]);
                const hint = (ex && ex.indice) ? ex.indice : 'Commence par lire attentivement l\'énoncé.';
                aideTexte.innerHTML = `<strong>Indice :</strong> ${hint}`;
                aideTexte.classList.add('visible');
                aideTexte._timeout = setTimeout(()=>{ aideTexte.innerHTML=''; aideTexte.classList.remove('visible'); }, 10000);
            }catch(e){
                aideTexte.innerHTML = '';
            }
        } else if(type === 'aide'){
            // show course related to current exercise
            try{
                const ex = (window.exercices && window.exercices[currentChapter] && window.exercices[currentChapter][currentIndex]);
                const cours = (ex && ex.cours) ? ex.cours : 'Je peux t\'expliquer un point précis si tu le demandes.';
                aideTexte.innerHTML = `<strong>Aide :</strong> ${cours}`;
                aideTexte.classList.add('visible');
                aideTexte._timeout = setTimeout(()=>{ aideTexte.innerHTML=''; aideTexte.classList.remove('visible'); }, 15000);
            }catch(e){ aideTexte.innerHTML=''; }
        } else if(type === 'succes'){
            aideTexte.innerHTML = `<em>+10 XP</em>`;
            aideTexte.classList.add('visible');
            aideTexte._timeout = setTimeout(()=>{ aideTexte.innerHTML=''; aideTexte.classList.remove('visible'); }, 3000);
        } else {
            // clear for other types
            aideTexte.innerHTML = '';
            aideTexte.classList.remove('visible');
        }
    }
}

/* ==========================
   ASSISTANT BUTTONS
========================= */
const boutonIndice = document.getElementById('indice');
const boutonIA = document.getElementById('aideIA');
if(boutonIndice) boutonIndice.addEventListener('click', ()=> snakeMessage('indice'));
if(boutonIA) boutonIA.addEventListener('click', ()=> snakeMessage('aide'));

/* ==========================
   EXERCISES: load / render / check
========================= */

function loadExercise(chapter = currentChapter, index = currentIndex){
    if(!window.exercices) return;
    const list = window.exercices[chapter];
    if(!list || list.length === 0) return;

    // clamp index
    if(index < 0) index = 0;
    if(index >= list.length) index = list.length - 1;

    currentChapter = chapter;
    currentIndex = index;

    localStorage.setItem('currentChapter', currentChapter);
    localStorage.setItem('currentIndex_' + currentChapter, currentIndex);

    const ex = list[currentIndex];

    if(titreEl) titreEl.textContent = ex.titre || chapter;
    if(compteurEl) compteurEl.textContent = `Exercice ${currentIndex + 1} / ${list.length}`;
    if(enonceEl) enonceEl.textContent = ex.enonce || '';
    if(codeEl) codeEl.value = ex.template || '';

    // highlight active chapter button
    chapitreButtons.forEach(btn=>{
        if(btn.textContent.trim() === chapter) btn.classList.add('active');
        else btn.classList.remove('active');
    });
}

function checkSolution(userCode, solutionToken){
    if(!solutionToken) return false;
    const u = (userCode || '').trim();
    const s = (solutionToken || '').trim();
    if(u.length === 0) return false;

    // if solution looks like a full line (contains = or parentheses or spaces), try exact match or contains
    if(s.includes('=') || s.includes('(') || s.length > 6){
        // tolerate small differences: remove spaces and compare
        const normalize = str => str.replace(/\s+/g,'').replace(/;$/,'');
        return normalize(u).includes(normalize(s)) || normalize(s).includes(normalize(u));
    }

    // otherwise check that user included the expected token
    return u.includes(s);
}

// verifier handler
if(verifierBtn){
    verifierBtn.addEventListener('click', ()=>{
        const ex = window.exercices && window.exercices[currentChapter] && window.exercices[currentChapter][currentIndex];
        if(!ex){ snakeMessage('erreur'); return; }
        const user = codeEl && codeEl.value || '';
        const ok = checkSolution(user, ex.solution);
        if(ok){
            ajouterXP(ex.xp || 10);
            snakeMessage('succes');
        } else {
            snakeMessage('erreur');
        }
    });
}

// suivant handler
if(suivantBtn){
    suivantBtn.addEventListener('click', ()=>{
        const list = window.exercices && window.exercices[currentChapter];
        if(!list) return;
        currentIndex = currentIndex + 1;
        if(currentIndex >= list.length) currentIndex = 0; // wrap
        loadExercise(currentChapter, currentIndex);
        snakeMessage('debut');
    });
}

// chapter click handlers
chapitreButtons.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        const chapterName = btn.textContent.trim();
        currentChapter = chapterName;
        currentIndex = Number(localStorage.getItem('currentIndex_' + currentChapter)) || 0;
        loadExercise(currentChapter, currentIndex);
        if(menuChapitre) menuChapitre.classList.remove('active');
    });
});

/* ==========================
   NAVIGATION / PAGES
========================= */
const accueil = document.getElementById('accueil');
const cours = document.getElementById('cours');
const profil = document.getElementById('profil');
const pageAccueil = document.getElementById('pageAccueil');
const pageCours = document.getElementById('pageCours');
const pageProfil = document.getElementById('pageProfil');

function changerPage(pageEl){
    [pageAccueil, pageCours, pageProfil].forEach(p=>{ if(p) p.classList.add('hidden'); });
    if(pageEl) pageEl.classList.remove('hidden');
}

if(accueil) accueil.addEventListener('click', ()=> changerPage(pageAccueil));
if(cours) cours.addEventListener('click', ()=> changerPage(pageCours));
if(profil) profil.addEventListener('click', ()=> changerPage(pageProfil));

/* ==========================
   MENU MOBILE
========================= */
const menuMobile = document.getElementById('menuMobile');
const fermerMenu = document.getElementById('fermerMenu');
const menuChapitre = document.getElementById('menuChapitre');
if(menuMobile && menuChapitre) menuMobile.addEventListener('click', ()=> menuChapitre.classList.add('active'));
if(fermerMenu && menuChapitre) fermerMenu.addEventListener('click', ()=> menuChapitre.classList.remove('active'));

/* close menu on chapter click handled earlier */

/* ==========================
   CHANGER PSEUDO
========================= */
const changerPseudo = document.getElementById('changerPseudo');
if(changerPseudo){
    changerPseudo.addEventListener('click', ()=>{
        const nouveau = prompt('🐍 Nouveau pseudo :', pseudo || '');
        if(nouveau && nouveau.trim()){
            pseudo = nouveau.trim();
            localStorage.setItem('pseudo', pseudo);
            afficherPseudo();
        }
    });
}

/* ==========================
   BOTTOM NAV AUTO-HIDE & ACTIVE
========================= */
const bottomNav = document.querySelector('.bottom-nav');
let timerNav;
function cacherNavigation(){ if(!bottomNav) return; if(window.innerWidth<=768) bottomNav.classList.add('hide'); }
function montrerNavigation(){ if(!bottomNav) return; bottomNav.classList.remove('hide'); clearTimeout(timerNav); timerNav = setTimeout(cacherNavigation, 1750); }
['scroll','touchstart','touchmove','mousemove'].forEach(ev => window.addEventListener(ev, montrerNavigation));

// active class for bottom nav buttons
document.querySelectorAll('.nav-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
        document.querySelectorAll('.nav-btn').forEach(b=> b.classList.remove('active'));
        btn.classList.add('active');
    });
});

/* ==========================
   VERIFIER / SUIVANT already wired above
========================= */

/* ==========================
   INITIALISATION
========================= */
chargerUtilisateur();
actualiserXP();
montrerNavigation();

// load first exercise once exercices is available
if(window.exercices){
    loadExercise(currentChapter, currentIndex);
} else {
    // try again shortly if data file may load after
    setTimeout(()=>{ if(window.exercices) loadExercise(currentChapter, currentIndex); }, 300);
}

/* ==========================
   MESSAGE ALEATOIRE AU RETOUR
========================= */
setTimeout(()=>{
    if(pseudo && messageSnake){
        const messages = [`Bienvenue ${pseudo} 🐍`, `Prêt pour un nouvel exercice ${pseudo} ?`, `Le Python t'attend ${pseudo} 😎`];
        messageSnake.innerHTML = messages[Math.floor(Math.random()*messages.length)];
    }
},3000);
