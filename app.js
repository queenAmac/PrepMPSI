document.addEventListener('DOMContentLoaded', () => {
  console.log("🐍 PrepMPSI chargé (avec menu et profil)");

  /* ==============
     Éléments DOM
     ============== */
  const menuMobile = document.getElementById('menuMobile');
  const menuChapitre = document.getElementById('menuChapitre');
  const closeMenu = document.getElementById('closeMenu');
  const overlay = document.getElementById('overlay');

  const userBtn = document.getElementById('userBtn');
  const editNameBtn = document.getElementById('editNameBtn');
  const displayName = document.getElementById('displayName');

  // éléments existants (XP, niveau, pages...)
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
  const pageAccueil = document.getElementById("pageAccueil");
  const pageCours = document.getElementById("pageCours");
  const pageProfil = document.getElementById("pageProfil");
  const listeCoursElement = document.getElementById("listeCours");

  /* ==============
     État & chargement safe
     ============== */
  let chapitreActuel = "Variables";
  let numeroExercice = 0;

  function loadXP() {
    const raw = localStorage.getItem("xp");
    const n = Number(raw);
    return Number.isFinite(n) ? n : 0;
  }
  function loadProgression() {
    const raw = localStorage.getItem("progression");
    if (!raw) return {};
    try {
      const parsed = JSON.parse(raw);
      return (parsed && typeof parsed === "object") ? parsed : {};
    } catch (e) {
      console.warn("progression corrompue :", e);
      return {};
    }
  }

  let xp = loadXP();
  let progression = loadProgression();

  /* ==============
     Niveaux config
     ============== */
  const XP_LEVELS = [
    { max: 100, name: "🌱 Débutant" },
    { max: 300, name: "🐍 Python Initié" },
    { max: 700, name: "💻 Programmeur" },
    { max: 1200, name: "⚡ Algorithmicien" },
    { max: Infinity, name: "🚀 Niveau MPSI" },
  ];

  function getLevelName(xpValue) {
    for (const lvl of XP_LEVELS) if (xpValue < lvl.max) return lvl.name;
    return XP_LEVELS[XP_LEVELS.length - 1].name;
  }
  function getCurrentObjective(xpValue) {
    for (const lvl of XP_LEVELS) if (xpValue < lvl.max) return lvl.max;
    return XP_LEVELS[XP_LEVELS.length - 1].max;
  }

  function save() {
    try {
      localStorage.setItem("xp", String(xp));
      localStorage.setItem("progression", JSON.stringify(progression));
    } catch (e) {
      console.error("Impossible de sauvegarder :", e);
    }
  }

  function updateLevelUI() {
    const name = getLevelName(xp);
    niveauElement.textContent = name;
    niveauProfil.textContent = name;
  }

  function updateXPUI() {
    xpElement.textContent = xp;
    xpProfil.textContent = xp;
    const objectif = getCurrentObjective(xp);
    const pourcentage = Math.min((xp / objectif) * 100, 100);
    xpProgress.style.width = pourcentage + "%";
    xpProgressProfil.style.width = pourcentage + "%";
  }

  /* ==============
     Exercices affichage
     ============== */
  function getExercisesOrWarn() {
    if (typeof exercices === "undefined" || !exercices || typeof exercices !== "object") {
      output.textContent = "⚠️ Les exercices ne sont pas chargés.";
      console.warn("Global `exercices` manquant.");
      return null;
    }
    return exercices;
  }

  function afficherExercice() {
    const all = getExercisesOrWarn();
    if (!all) return;
    const chapitreList = all[chapitreActuel];
    if (!chapitreList || chapitreList.length === 0) {
      titre.textContent = chapitreActuel;
      enonce.textContent = "Aucun exercice disponible.";
      compteur.textContent = "";
      code.value = "";
      return;
    }
    const exercice = chapitreList[numeroExercice];
    titre.textContent = chapitreActuel;
    compteur.textContent = `Exercice ${numeroExercice + 1} / ${chapitreList.length}`;
    enonce.textContent = (exercice.titre ? exercice.titre + " : " : "") + (exercice.enonce || "");
    code.value = exercice.starterCode || "";
    output.textContent = "Sortie :";
  }

  /* ==============
     Chapitres / charger cours
     ============== */
  function chargerCours() {
    const all = getExercisesOrWarn();
    if (!all) return;
    listeCoursElement.innerHTML = "";
    Object.keys(all).forEach(chapitre => {
      const bouton = document.createElement("button");
      bouton.type = "button";
      bouton.textContent = "📘 " + chapitre;
      bouton.addEventListener("click", () => {
        chapitreActuel = chapitre;
        numeroExercice = progression[chapitre] || 0;
        changerPage(pageAccueil);
        fermerMenu();
        afficherExercice();
      });
      listeCoursElement.appendChild(bouton);
    });
  }

  document.querySelectorAll(".chapitres button").forEach(button => {
    button.addEventListener("click", () => {
      chapitreActuel = button.textContent;
      numeroExercice = progression[chapitreActuel] || 0;
      afficherExercice();
      fermerMenu();
    });
  });

  /* ==============
     Vérifier / validator
     ============== */
  function defaultValidator(exercice, userCode) {
    if (typeof exercice.solution === "string") return userCode.includes(exercice.solution);
    if (exercice.solution instanceof RegExp) return exercice.solution.test(userCode);
    return false;
  }

  function verifier() {
    const all = getExercisesOrWarn();
    if (!all) return;
    const exercice = all[chapitreActuel][numeroExercice];
    if (!exercice) {
      output.textContent = "Aucun exercice sélectionné.";
      return;
    }
    const userCode = (code.value || "").trim();
    let ok = false;
    try {
      if (typeof exercice.validator === "function") ok = Boolean(exercice.validator(userCode));
      else ok = defaultValidator(exercice, userCode);
    } catch (e) {
      console.error("Validator error :", e);
      ok = false;
    }
    if (ok) {
      output.textContent = `✅ Correct ! +${exercice.xp || 0} XP`;
      xp += Number(exercice.xp || 0);
      progression[chapitreActuel] = Math.max(progression[chapitreActuel] || 0, numeroExercice + 1);
      save();
      updateXPUI();
      updateLevelUI();
    } else {
      output.textContent = "❌ Essaie encore";
    }
  }

  document.getElementById("verifier").addEventListener("click", verifier);
  code.addEventListener("keydown", (e) => { if ((e.ctrlKey || e.metaKey) && e.key === "Enter") { e.preventDefault(); verifier(); } });

  /* ==============
     Suivant
     ============== */
  document.getElementById("suivant").addEventListener("click", () => {
    const all = getExercisesOrWarn();
    if (!all) return;
    const chapList = all[chapitreActuel] || [];
    if (numeroExercice < chapList.length - 1) {
      numeroExercice++;
      afficherExercice();
    } else {
      output.textContent = "🎉 Chapitre terminé !";
    }
  });

  /* ==============
     Pages nav
     ============== */
  function changerPage(page) {
    [pageAccueil, pageCours, pageProfil].forEach(p => p.classList.add("hidden"));
    page.classList.remove("hidden");
  }

  document.getElementById("accueil").addEventListener("click", () => changerPage(pageAccueil));
  document.getElementById("cours").addEventListener("click", () => { changerPage(pageCours); chargerCours(); });
  document.getElementById("profil").addEventListener("click", () => { changerPage(pageProfil); updateXPUI(); updateLevelUI(); });

  /* ==============
     Menu mobile / overlay / close
     ============== */
  function ouvrirMenu() {
    menuChapitre.classList.add("active");
    overlay.classList.remove("hidden");
    menuMobile.setAttribute('aria-expanded', 'true');
    menuChapitre.setAttribute('aria-hidden', 'false');
  }
  function fermerMenu() {
    menuChapitre.classList.remove("active");
    overlay.classList.add("hidden");
    menuMobile.setAttribute('aria-expanded', 'false');
    menuChapitre.setAttribute('aria-hidden', 'true');
  }
  menuMobile.addEventListener('click', () => { if (menuChapitre.classList.contains('active')) fermerMenu(); else ouvrirMenu(); });
  closeMenu && closeMenu.addEventListener('click', fermerMenu);
  overlay && overlay.addEventListener('click', fermerMenu);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuChapitre.classList.contains('active')) fermerMenu();
  });

  /* ==============
     Personnalisation : nom utilisateur
     ============== */
  function loadUsername() {
    return localStorage.getItem('username') || '';
  }
  function saveUsername(name) {
    try {
      if (name) localStorage.setItem('username', name);
      else localStorage.removeItem('username');
    } catch (e) {
      console.error('Impossible de sauvegarder le nom :', e);
    }
  }
  function updateUserUI() {
    const name = loadUsername();
    if (name) {
      userBtn.textContent = name;
      displayName.textContent = name;
    } else {
      userBtn.textContent = 'Se connecter';
      displayName.textContent = '—';
    }
  }
  function askNameAndSave() {
    const current = loadUsername();
    const promptText = current ? `Ton prénom/pseudo (actuel : ${current})` : 'Ton prénom ou pseudo ?';
    const name = prompt(promptText, current || '');
    if (name === null) return; // annuler
    const trimmed = name.trim();
    if (trimmed.length === 0) {
      // si vide, on supprime le nom
      saveUsername('');
    } else {
      saveUsername(trimmed);
    }
    updateUserUI();
  }

  userBtn && userBtn.addEventListener('click', askNameAndSave);
  editNameBtn && editNameBtn.addEventListener('click', askNameAndSave);

  /* ==============
     Smart bottom bar (simple show/hide) - lightweight
     ============== */
  const barreNav = document.querySelector('.bottom-nav');
  let timerBarre;
  function afficherBarre() {
    if (!barreNav) return;
    barreNav.classList.remove('hide');
    clearTimeout(timerBarre);
    timerBarre = setTimeout(() => barreNav.classList.add('hide'), 3000);
  }
  window.addEventListener('scroll', afficherBarre, { passive: true });
  window.addEventListener('mousemove', afficherBarre);
  window.addEventListener('touchstart', afficherBarre, { passive: true });

  /* ==============
     Démarrage
     ============== */
  updateXPUI();
  updateLevelUI();
  afficherExercice();
  updateUserUI();
  // assure overlay hidden au départ
  overlay && overlay.classList.add('hidden');

  // sauvegarde avant quitter
  window.addEventListener('beforeunload', save);
});
