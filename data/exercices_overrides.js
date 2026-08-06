(function(){
  // Ensure original exercices variable exists
  if(typeof exercices === 'undefined') return;

  // expose to window for app.js which checks window.exercices
  window.exercices = window.exercices || exercices;

  // Override/fix the Variables chapter with clearer canonical solutions
  window.exercices.Variables = [
    {
      titre: "Créer une variable",
      cours: "Une variable est une zone mémoire qui stocke une information. En Python, on crée une variable avec une affectation : nom = valeur. Exemple : age = 16.",
      indice: "Le symbole = sert à donner une valeur à une variable.",
      enonce: "Crée une variable x contenant la valeur 5.",
      solution: "x = 5",
      correction: "La ligne x = 5 crée une variable appelée x qui contient l'entier 5.",
      xp:10
    },
    {
      titre:"Modifier une variable",
      cours: "Une variable peut être modifiée pendant l'exécution du programme. Python utilise la nouvelle valeur pour remplacer l'ancienne.",
      indice: "Tu peux utiliser une variable dans son propre calcul.",
      enonce: "Crée x = 3 puis ajoute 7 à x.",
      solution: "x = x + 7",
      correction: "Python prend l'ancienne valeur de x et lui ajoute 7.",
      xp:10
    },
    {
      titre:"Deux variables",
      cours: "Un programme peut manipuler plusieurs variables en même temps.",
      indice: "Il faut faire deux affectations différentes.",
      enonce: "Crée deux variables a = 4 et b = 6.",
      solution: "a = 4\nb = 6",
      correction: "On crée deux espaces mémoire différents : a contient 4 et b contient 6.",
      xp:10
    },
    {
      titre:"Afficher une valeur",
      cours: "La fonction print() permet d'afficher une information dans la console.",
      indice: "Utilise print().",
      enonce: "Crée x = 10 puis affiche x.",
      solution: "print(x)",
      correction: "print(x) affiche la valeur contenue dans x.",
      xp:10
    },
    {
      titre:"Addition",
      cours: "Les variables numériques peuvent être utilisées dans des opérations mathématiques.",
      indice: "Utilise l'opérateur +.",
      enonce: "Crée a = 8 et b = 12 puis affiche leur somme.",
      solution: "print(a + b)",
      correction: "print(a+b) calcule puis affiche la somme.",
      xp:10
    },
    {
      titre:"Variable physique",
      cours: "En physique, les variables représentent souvent des grandeurs comme une masse, une vitesse ou une énergie.",
      indice: "Une valeur numérique peut être stockée directement.",
      enonce: "Crée m = 2 et g = 9.81.",
      solution: "m = 2\ng = 9.81",
      correction: "Python accepte les nombres décimaux avec un point.",
      xp:15
    },
    {
      titre:"Copier une variable",
      cours: "Une variable peut recevoir la valeur d'une autre variable.",
      indice: "Utilise une nouvelle affectation.",
      enonce: "Crée x = 5 puis y = x.",
      solution: "x = 5\ny = x",
      correction: "Après cette ligne, y contient la même valeur que x.",
      xp:15
    },
    {
      titre:"Résultat d'un calcul",
      cours: "Il est conseillé de stocker un résultat important dans une variable.",
      indice: "Crée une variable appelée resultat.",
      enonce: "Crée une variable resultat contenant une opération.",
      solution: "resultat = 2 + 3",
      correction: "Une variable peut stocker le résultat d'un calcul.",
      xp:10
    }
  ];

  // You can add additional overrides for other chapters below if needed in the same style.
})();
