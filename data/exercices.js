const exercices = {


Variables: [

{
titre: "Créer une variable",

cours:
"Une variable est une zone mémoire qui stocke une information. En Python, on crée une variable avec une affectation : nom = valeur. Exemple : age = 16.",

indice:
"Le symbole = sert à donner une valeur à une variable.",

enonce:
"Crée une variable x contenant la valeur 5.",

solution:
"x = 5",

correction:
"La ligne x = 5 crée une variable appelée x qui contient l'entier 5.",

xp:10

},



{
titre:"Modifier une variable",

cours:
"Une variable peut être modifiée pendant l'exécution du programme. Python utilise la nouvelle valeur pour remplacer l'ancienne.",

indice:
"Tu peux utiliser une variable dans son propre calcul.",

enonce:
"Crée x = 3 puis ajoute 7 à x.",

solution:
"x = x + 7",

correction:
"Python prend l'ancienne valeur de x et lui ajoute 7.",

xp:10

},



{
titre:"Deux variables",

cours:
"Un programme peut manipuler plusieurs variables en même temps.",

indice:
"Il faut faire deux affectations différentes.",

enonce:
"Crée deux variables a = 4 et b = 6.",

solution:
"a = 4",

correction:
"On crée deux espaces mémoire différents : a contient 4 et b contient 6.",

xp:10

},



{
titre:"Afficher une valeur",

cours:
"La fonction print() permet d'afficher une information dans la console.",

indice:
"Utilise print().",

enonce:
"Crée x = 10 puis affiche x.",

solution:
"print",

correction:
"print(x) affiche la valeur contenue dans x.",

xp:10

},



{
titre:"Addition",

cours:
"Les variables numériques peuvent être utilisées dans des opérations mathématiques.",

indice:
"Utilise l'opérateur +.",

enonce:
"Crée a = 8 et b = 12 puis affiche leur somme.",

solution:
"print",

correction:
"print(a+b) calcule puis affiche la somme.",

xp:10

},



{
titre:"Variable physique",

cours:
"En physique, les variables représentent souvent des grandeurs comme une masse, une vitesse ou une énergie.",

indice:
"Une valeur numérique peut être stockée directement.",

enonce:
"Crée m = 2 et g = 9.81.",

solution:
"g = 9.81",

correction:
"Python accepte les nombres décimaux avec un point.",

xp:15

},



{
titre:"Copier une variable",

cours:
"Une variable peut recevoir la valeur d'une autre variable.",

indice:
"Utilise une nouvelle affectation.",

enonce:
"Crée x = 5 puis y = x.",

solution:
"y = x",

correction:
"Après cette ligne, y contient la même valeur que x.",

xp:15

},



{
titre:"Résultat d'un calcul",

cours:
"Il est conseillé de stocker un résultat important dans une variable.",

indice:
"Crée une variable appelée resultat.",

enonce:
"Crée une variable resultat contenant une opération.",

solution:
"resultat",

correction:
"Une variable peut stocker le résultat d'un calcul.",

xp:10

}

],Types: [

{
titre:"Entier (int)",

cours:
"Un entier (int) est un nombre sans virgule. Exemple : age = 16. Les entiers servent souvent à compter.",

indice:
"Utilise une valeur comme 10.",

enonce:
"Crée une variable age contenant 16.",

solution:
"age = 16",

correction:
"16 est un entier Python (type int).",

xp:10
},


{
titre:"Nombre décimal (float)",

cours:
"Un float est un nombre avec une partie décimale. En Python on utilise un point : 3.14.",

indice:
"Utilise un nombre avec un point.",

enonce:
"Crée une variable pi contenant 3.14.",

solution:
"pi = 3.14",

correction:
"3.14 est automatiquement reconnu comme un float.",

xp:10
},


{
titre:"Chaîne de caractères (str)",

cours:
"Une chaîne de caractères est du texte placé entre guillemets.",

indice:
"Utilise des guillemets.",

enonce:
"Crée une variable nom contenant 'Alice'.",

solution:
"nom =",

correction:
"Les textes sont stockés dans des variables de type str.",

xp:10
},


{
titre:"Booléen (bool)",

cours:
"Un booléen possède seulement deux valeurs : True ou False.",

indice:
"Utilise True ou False.",

enonce:
"Crée une variable majeur contenant True.",

solution:
"True",

correction:
"True représente une valeur vraie.",

xp:10
},


{
titre:"Connaître le type",

cours:
"La fonction type() permet de connaître le type d'une variable.",

indice:
"Utilise type(variable).",

enonce:
"Affiche le type de x = 5.",

solution:
"type",

correction:
"type(x) renvoie <class 'int'>.",

xp:15
},


{
titre:"Conversion int",

cours:
"La fonction int() transforme une valeur en entier.",

indice:
"Utilise int().",

enonce:
"Transforme le texte '5' en entier.",

solution:
"int",

correction:
"int('5') donne le nombre 5.",

xp:15
},


{
titre:"Conversion float",

cours:
"La fonction float() transforme une valeur en nombre décimal.",

indice:
"Utilise float().",

enonce:
"Transforme 5 en nombre décimal.",

solution:
"float",

correction:
"float(5) donne 5.0.",

xp:15
},


{
titre:"Conversion str",

cours:
"La fonction str() transforme une valeur en texte.",

indice:
"Utilise str().",

enonce:
"Transforme le nombre 10 en texte.",

solution:
"str",

correction:
"str(10) donne '10'.",

xp:15
},


{
titre:"Mélange de types",

cours:
"Python distingue les types. Certaines opérations ne sont possibles qu'entre types compatibles.",

indice:
"Regarde les types avant de calculer.",

enonce:
"Explique pourquoi 5 + '5' pose problème.",

solution:
"type",

correction:
"Un entier et une chaîne ne peuvent pas être additionnés directement.",

xp:20
}


],



Affectations: [

{
titre:"Affectation simple",

cours:
"L'affectation permet de donner une valeur à une variable.",

indice:
"Utilise =.",

enonce:
"Crée une variable vitesse contenant 30.",

solution:
"vitesse = 30",

correction:
"La variable vitesse contient maintenant 30.",

xp:10
},


{
titre:"Nouvelle valeur",

cours:
"Une nouvelle affectation remplace l'ancienne valeur.",

indice:
"Réutilise le même nom de variable.",

enonce:
"Crée x = 2 puis remplace x par 10.",

solution:
"x = 10",

correction:
"La deuxième affectation écrase la première valeur.",

xp:10
},


{
titre:"Affectation multiple",

cours:
"Python permet d'affecter plusieurs variables en une seule ligne.",

indice:
"Utilise des virgules.",

enonce:
"Crée a = 1 et b = 2 sur une ligne.",

solution:
"a = 1",

correction:
"Python permet : a,b = 1,2.",

xp:15
},


{
titre:"Échange de variables",

cours:
"Python permet d'échanger deux variables facilement.",

indice:
"Utilise une affectation multiple.",

enonce:
"Échange les valeurs de a et b.",

solution:
"b",

correction:
"On peut écrire a,b = b,a.",

xp:20
},


{
titre:"Calcul pendant affectation",

cours:
"Une affectation peut contenir une opération.",

indice:
"Le calcul est fait avant l'affectation.",

enonce:
"Crée somme = 5 + 7.",

solution:
"somme",

correction:
"La variable somme contient le résultat du calcul.",

xp:15
}

],Opérations: [

{
titre:"Addition",

cours:
"Python utilise + pour additionner des nombres ou concaténer des chaînes de caractères.",

indice:
"Utilise le symbole +.",

enonce:
"Crée une variable resultat contenant 5 + 3.",

solution:
"resultat = 5 + 3",

correction:
"L'opérateur + permet de faire une addition.",

xp:10
},


{
titre:"Soustraction",

cours:
"Le symbole - permet de retirer une valeur à une autre.",

indice:
"Utilise -.",

enonce:
"Calcule 10 - 4 et stocke le résultat.",

solution:
"-",

correction:
"La soustraction donne 6.",

xp:10
},


{
titre:"Multiplication",

cours:
"Le symbole * permet de multiplier deux nombres.",

indice:
"Utilise *.",

enonce:
"Calcule 5 × 4.",

solution:
"*",

correction:
"5*4 donne 20.",

xp:10
},


{
titre:"Division",

cours:
"En Python, / réalise une division et donne un float.",

indice:
"Utilise /.",

enonce:
"Calcule 10 divisé par 2.",

solution:
"/",

correction:
"10/2 donne 5.0.",

xp:10
},


{
titre:"Division entière",

cours:
"L'opérateur // donne le quotient entier d'une division.",

indice:
"Utilise deux slashs.",

enonce:
"Calcule la division entière de 10 par 3.",

solution:
"//",

correction:
"10//3 donne 3.",

xp:15
},


{
titre:"Reste d'une division",

cours:
"L'opérateur % donne le reste d'une division entière.",

indice:
"Utilise le modulo %.",

enonce:
"Trouve le reste de 10 divisé par 3.",

solution:
"%",
 
correction:
"10%3 donne 1.",

xp:15
},


{
titre:"Puissance",

cours:
"L'opérateur ** permet de calculer une puissance.",

indice:
"Deux étoiles.",

enonce:
"Calcule 2 puissance 3.",

solution:
"**",

correction:
"2**3 donne 8.",

xp:15
},


{
titre:"Priorité des calculs",

cours:
"Python respecte les règles mathématiques : parenthèses puis puissances puis multiplications puis additions.",

indice:
"Utilise des parenthèses si besoin.",

enonce:
"Calcule (2+3)*4.",

solution:
"(",

correction:
"Les parenthèses forcent le calcul de 2+3 en premier.",

xp:20
},


{
titre:"Comparaisons",

cours:
"Les comparaisons renvoient un booléen : True ou False. Exemples : >, <, ==.",

indice:
"Utilise == pour tester une égalité.",

enonce:
"Teste si 5 est égal à 5.",

solution:
"==",

correction:
"L'opérateur == compare deux valeurs.",

xp:15
},


{
titre:"Opérations sur chaînes",

cours:
"Les chaînes peuvent être assemblées avec +.",

indice:
"Concatène deux textes.",

enonce:
"Crée un message avec 'Bonjour' et 'Python'.",

solution:
"+",

correction:
"La concaténation permet de fusionner des chaînes.",

xp:15
}

],



Conditions: [

{
titre:"Premier if",

cours:
"Une condition permet d'exécuter un bloc seulement si une expression est vraie.",

indice:
"Commence par if.",

enonce:
"Écris une condition qui teste si x > 0.",

solution:
"if",

correction:
"if x > 0: exécute le code si la condition est vraie.",

xp:10
},


{
titre:"if else",

cours:
"else permet d'exécuter un autre bloc quand la condition est fausse.",

indice:
"Ajoute else.",

enonce:
"Crée une condition avec une alternative.",

solution:
"else",

correction:
"else correspond au cas contraire.",

xp:15
},


{
titre:"elif",

cours:
"elif permet de tester plusieurs conditions successives.",

indice:
"Entre if et else.",

enonce:
"Crée une condition avec trois cas.",

solution:
"elif",

correction:
"elif évite de multiplier les if.",

xp:20
},


{
titre:"Condition booléenne",

cours:
"Une condition utilise souvent des booléens et des opérateurs logiques.",

indice:
"Utilise and ou or.",

enonce:
"Teste deux conditions en même temps.",

solution:
"and",

correction:
"and nécessite que les deux conditions soient vraies.",

xp:20
},


{
titre:"Valeur absolue",

cours:
"abs() renvoie la distance d'un nombre à zéro.",

indice:
"Utilise abs().",

enonce:
"Trouve la valeur absolue de -5.",

solution:
"abs",

correction:
"abs(-5) renvoie 5.",

xp:15
}

],Boucles: [

{
titre:"Boucle while",

cours:
"Une boucle while répète des instructions tant qu'une condition est vraie. Elle nécessite une condition d'arrêt.",

indice:
"Utilise while.",

enonce:
"Crée une boucle qui affiche les nombres de 0 à 4.",

solution:
"while",

correction:
"while condition: répète le bloc tant que la condition est vraie.",

xp:15
},


{
titre:"Boucle for",

cours:
"La boucle for permet de parcourir une séquence ou une suite de nombres.",

indice:
"Utilise for et range().",

enonce:
"Parcours les nombres de 0 à 9.",

solution:
"for",

correction:
"for i in range(10): parcourt 0 jusqu'à 9.",

xp:15
},


{
titre:"range",

cours:
"range(n) génère les nombres de 0 à n-1.",

indice:
"Utilise range.",

enonce:
"Crée une boucle avec range(5).",

solution:
"range",

correction:
"range(5) produit 0,1,2,3,4.",

xp:10
},


{
titre:"Compteur",

cours:
"Une variable compteur permet souvent de compter le nombre d'éléments rencontrés.",

indice:
"Crée compteur = 0 puis augmente-le.",

enonce:
"Compte le nombre d'éléments d'une liste.",

solution:
"compteur",

correction:
"On augmente compteur à chaque passage dans la boucle.",

xp:20
},


{
titre:"Somme avec une boucle",

cours:
"Une boucle permet d'accumuler progressivement un résultat.",

indice:
"Crée une variable somme.",

enonce:
"Calcule la somme des nombres d'une liste.",

solution:
"somme",

correction:
"On ajoute chaque élément à somme.",

xp:20
},


{
titre:"Boucle imbriquée",

cours:
"Une boucle peut contenir une autre boucle. Cela augmente souvent la complexité.",

indice:
"Utilise deux for.",

enonce:
"Crée deux boucles l'une dans l'autre.",

solution:
"for",

correction:
"Deux boucles imbriquées donnent souvent une complexité en O(n²).",

xp:25
},


{
titre:"Break",

cours:
"break permet d'arrêter immédiatement une boucle.",

indice:
"Place break dans une condition.",

enonce:
"Arrête une recherche quand une valeur est trouvée.",

solution:
"break",

correction:
"break sort directement de la boucle.",

xp:20
},


{
titre:"Continue",

cours:
"continue permet de passer directement au tour suivant.",

indice:
"Utilise continue.",

enonce:
"Ignore certains éléments d'une boucle.",

solution:
"continue",

correction:
"continue saute une itération.",

xp:20
}

],





Fonctions: [

{
titre:"Créer une fonction",

cours:
"Une fonction regroupe des instructions réutilisables. Elle se définit avec def.",

indice:
"Commence par def.",

enonce:
"Crée une fonction bonjour().",

solution:
"def",

correction:
"def nom_fonction(): crée une fonction.",

xp:15
},


{
titre:"Paramètre",

cours:
"Une fonction peut recevoir des valeurs appelées paramètres.",

indice:
"Ajoute une variable entre parenthèses.",

enonce:
"Crée une fonction prenant x en paramètre.",

solution:
"x",

correction:
"Les paramètres permettent de rendre une fonction adaptable.",

xp:20
},


{
titre:"Retourner une valeur",

cours:
"return renvoie un résultat depuis une fonction.",

indice:
"Utilise return.",

enonce:
"Crée une fonction qui renvoie x².",

solution:
"return",

correction:
"return transmet le résultat au programme principal.",

xp:20
},


{
titre:"Fonction carré",

cours:
"Les fonctions permettent d'éviter de répéter du code.",

indice:
"Multiplie x par lui-même.",

enonce:
"Crée une fonction carre(x).",

solution:
"def",

correction:
"Une fonction carre peut retourner x*x.",

xp:20
},


{
titre:"Fonction avec condition",

cours:
"Une fonction peut contenir des conditions et des boucles.",

indice:
"Mélange def et if.",

enonce:
"Crée une fonction qui teste si un nombre est positif.",

solution:
"if",

correction:
"Une fonction peut utiliser toutes les structures Python.",

xp:25
},


{
titre:"Récursivité",

cours:
"Une fonction récursive s'appelle elle-même. Elle doit avoir une condition d'arrêt.",

indice:
"Une fonction appelle son propre nom.",

enonce:
"Crée une fonction récursive simple.",

solution:
"return",

correction:
"La récursivité nécessite un cas de base.",

xp:35
},


{
titre:"Factorielle",

cours:
"La factorielle n! correspond à n × (n-1) × ... × 1.",

indice:
"Utilise une boucle ou une récursion.",

enonce:
"Programme la factorielle d'un nombre.",

solution:
"factorielle",

correction:
"Une fonction factorielle multiplie progressivement les valeurs.",

xp:40
}

],Listes: [

{
titre:"Créer une liste",

cours:
"Une liste permet de stocker plusieurs valeurs dans une seule variable. En Python une liste utilise des crochets [].",

indice:
"Utilise [ ].",

enonce:
"Crée une liste nombres contenant 1, 2 et 3.",

solution:
"[",

correction:
"Une liste se crée avec des crochets : nombres = [1,2,3].",

xp:10
},


{
titre:"Accéder à un élément",

cours:
"Les éléments d'une liste sont accessibles avec leur indice. Le premier élément possède l'indice 0.",

indice:
"Utilise liste[indice].",

enonce:
"Accède au premier élément d'une liste.",

solution:
"[0]",

correction:
"Le premier élément est à l'indice 0.",

xp:15
},


{
titre:"Modifier une liste",

cours:
"Les listes sont modifiables : on peut changer une valeur existante.",

indice:
"Utilise un indice avec une affectation.",

enonce:
"Modifie le deuxième élément d'une liste.",

solution:
"=",

correction:
"liste[1] = nouvelle_valeur modifie l'élément.",

xp:15
},


{
titre:"Ajouter un élément",

cours:
"La méthode append() ajoute un élément à la fin d'une liste.",

indice:
"Utilise append.",

enonce:
"Ajoute 5 à une liste.",

solution:
"append",

correction:
"liste.append(5) ajoute l'élément 5.",

xp:15
},


{
titre:"Supprimer un élément",

cours:
"remove() supprime une valeur précise et pop() supprime avec un indice.",

indice:
"Utilise remove ou pop.",

enonce:
"Supprime un élément d'une liste.",

solution:
"remove",

correction:
"remove(valeur) enlève la première occurrence.",

xp:15
},


{
titre:"Parcourir une liste",

cours:
"Une boucle for permet de parcourir tous les éléments d'une liste.",

indice:
"Utilise for element in liste.",

enonce:
"Affiche tous les éléments d'une liste.",

solution:
"for",

correction:
"for permet de traiter chaque élément un par un.",

xp:20
},


{
titre:"Longueur d'une liste",

cours:
"len() donne le nombre d'éléments présents dans une liste.",

indice:
"Utilise len().",

enonce:
"Trouve la taille d'une liste.",

solution:
"len",

correction:
"len(liste) renvoie le nombre d'éléments.",

xp:15
},


{
titre:"Somme d'une liste",

cours:
"On peut utiliser une boucle pour calculer une somme.",

indice:
"Crée une variable somme.",

enonce:
"Calcule la somme des éléments d'une liste.",

solution:
"somme",

correction:
"On additionne chaque élément progressivement.",

xp:25
},


{
titre:"Recherche dans une liste",

cours:
"L'opérateur in permet de vérifier si une valeur appartient à une liste.",

indice:
"Utilise in.",

enonce:
"Teste si 5 appartient à une liste.",

solution:
"in",

correction:
"5 in liste renvoie True ou False.",

xp:20
},


{
titre:"Liste en compréhension",

cours:
"Une compréhension de liste permet de créer rapidement une nouvelle liste.",

indice:
"Utilise une boucle dans des crochets.",

enonce:
"Crée une liste des carrés de 0 à 9.",

solution:
"for",

correction:
"[x*x for x in range(10)] crée une liste rapidement.",

xp:30
}

],





Dictionnaires: [

{
titre:"Créer un dictionnaire",

cours:
"Un dictionnaire associe des clés à des valeurs. Il utilise des accolades {}.",

indice:
"Utilise clé : valeur.",

enonce:
"Crée un dictionnaire contenant un âge.",

solution:
"{",

correction:
"Exemple : personne = {'age':16}.",

xp:15
},


{
titre:"Accéder à une valeur",

cours:
"On récupère une valeur avec sa clé.",

indice:
"Utilise dictionnaire[clé].",

enonce:
"Récupère une valeur dans un dictionnaire.",

solution:
"[",

correction:
"La clé permet d'accéder directement à la valeur.",

xp:15
},


{
titre:"Ajouter une entrée",

cours:
"On peut ajouter une nouvelle clé à tout moment.",

indice:
"Crée une nouvelle clé.",

enonce:
"Ajoute une ville dans un dictionnaire.",

solution:
"=",

correction:
"dico['ville']='Paris' ajoute une entrée.",

xp:20
},


{
titre:"Parcourir un dictionnaire",

cours:
"items() permet de parcourir les couples clé-valeur.",

indice:
"Utilise items().",

enonce:
"Parcours toutes les clés et valeurs.",

solution:
"items",

correction:
"for cle,valeur in dico.items() parcourt le dictionnaire.",

xp:25
}

],





Tuples: [

{
titre:"Créer un tuple",

cours:
"Un tuple est une collection non modifiable. Il utilise souvent des parenthèses.",

indice:
"Utilise ( ).",

enonce:
"Crée un tuple contenant trois nombres.",

solution:
"(",

correction:
"Un tuple ressemble à une liste mais ne peut pas être modifié.",

xp:15
},


{
titre:"Différence liste tuple",

cours:
"Une liste est modifiable alors qu'un tuple est immuable.",

indice:
"Compare modification et stockage.",

enonce:
"Explique la différence entre liste et tuple.",

solution:
"modifiable",

correction:
"Les listes peuvent changer, les tuples non.",

xp:20
}

],Algorithmique: [

{
titre:"Recherche linéaire",

cours:
"La recherche linéaire consiste à parcourir une liste élément par élément jusqu'à trouver une valeur. Sa complexité est O(n).",

indice:
"Utilise une boucle for.",

enonce:
"Créer un algorithme qui cherche une valeur dans une liste.",

solution:
"for",

correction:
"On parcourt chaque élément et on compare avec la valeur recherchée.",

xp:25
},


{
titre:"Compter des éléments",

cours:
"Pour compter des éléments, on utilise souvent une variable compteur initialisée à 0.",

indice:
"Crée compteur = 0 puis augmente-le.",

enonce:
"Compte le nombre de valeurs positives dans une liste.",

solution:
"compteur",

correction:
"Chaque fois qu'une valeur vérifie la condition, on augmente compteur.",

xp:25
},


{
titre:"Trouver un maximum",

cours:
"Pour trouver un maximum, on garde en mémoire la plus grande valeur rencontrée.",

indice:
"Crée une variable max.",

enonce:
"Trouve le maximum d'une liste sans utiliser max().",

solution:
"max",

correction:
"On compare chaque élément avec le maximum actuel.",

xp:30
},


{
titre:"Trouver un minimum",

cours:
"Le principe est identique au maximum mais en cherchant la plus petite valeur.",

indice:
"Initialise une variable minimum.",

enonce:
"Trouve le minimum d'une liste.",

solution:
"min",

correction:
"On remplace minimum lorsqu'une valeur plus petite apparaît.",

xp:30
},


{
titre:"Recherche dichotomique",

cours:
"La recherche dichotomique fonctionne sur une liste triée. Elle divise l'espace de recherche par deux à chaque étape. Complexité O(log n).",

indice:
"Utilise un milieu.",

enonce:
"Rechercher un élément dans une liste triée.",

solution:
"while",

correction:
"On compare avec l'élément du milieu puis on réduit la zone de recherche.",

xp:40
},


{
titre:"Tri par sélection",

cours:
"Le tri par sélection cherche le plus petit élément et le place au début de la partie non triée.",

indice:
"Cherche un minimum à chaque étape.",

enonce:
"Décrire le principe du tri par sélection.",

solution:
"minimum",

correction:
"À chaque tour, on sélectionne le plus petit élément.",

xp:35
},


{
titre:"Tri par insertion",

cours:
"Le tri par insertion construit progressivement une partie triée en insérant chaque élément à la bonne place.",

indice:
"Pense à une main qui trie des cartes.",

enonce:
"Expliquer le principe du tri par insertion.",

solution:
"insertion",

correction:
"Chaque nouvel élément est inséré dans la partie déjà triée.",

xp:40
},


{
titre:"Complexité O(1)",

cours:
"La complexité constante signifie que le temps d'exécution ne dépend pas de la taille des données.",

indice:
"Une seule opération.",

enonce:
"Donner un exemple d'opération en O(1).",

solution:
"accès",

correction:
"Accéder à un élément d'une liste par son indice est souvent O(1).",

xp:25
},


{
titre:"Complexité O(n)",

cours:
"Une complexité linéaire signifie que le nombre d'opérations augmente proportionnellement à n.",

indice:
"Une seule boucle sur une liste.",

enonce:
"Identifier un algorithme en O(n).",

solution:
"for",

correction:
"Une boucle parcourant tous les éléments est généralement O(n).",

xp:25
},


{
titre:"Complexité O(n²)",

cours:
"Une complexité quadratique apparaît souvent avec deux boucles imbriquées.",

indice:
"Deux boucles l'une dans l'autre.",

enonce:
"Identifier une complexité quadratique.",

solution:
"for",

correction:
"Deux parcours complets donnent souvent n*n opérations.",

xp:30
},


{
titre:"Invariant de boucle",

cours:
"Un invariant est une propriété vraie avant et après chaque passage dans une boucle. Il permet de prouver un algorithme.",

indice:
"Quelle propriété reste toujours vraie ?",

enonce:
"Expliquer ce qu'est un invariant.",

solution:
"invariant",

correction:
"Un invariant aide à démontrer la correction d'un algorithme.",

xp:50
},


{
titre:"Récursivité",

cours:
"Une fonction récursive s'appelle elle-même. Elle doit toujours avoir un cas d'arrêt.",

indice:
"La fonction appelle son propre nom.",

enonce:
"Créer une fonction récursive simple.",

solution:
"def",

correction:
"Une récursion sans condition d'arrêt provoque une boucle infinie.",

xp:40
},


{
titre:"Factorielle récursive",

cours:
"n! = n × (n-1)! avec 0! = 1.",

indice:
"Il faut un cas de base.",

enonce:
"Créer une fonction factorielle récursive.",

solution:
"return",

correction:
"La fonction retourne n * factorielle(n-1).",

xp:50
},


{
titre:"Suite récursive",

cours:
"Une suite peut être définie par une relation entre plusieurs termes.",

indice:
"Utilise le terme précédent.",

enonce:
"Programmer une suite définie par récurrence.",

solution:
"return",

correction:
"On calcule chaque terme à partir des précédents.",

xp:50
},


{
titre:"Défi MPSI",

cours:
"Un bon algorithme combine variables, conditions, boucles et fonctions.",

indice:
"Découpe le problème en plusieurs étapes.",

enonce:
"Créer un algorithme complet de recherche.",

solution:
"def",

correction:
"Un programme propre utilise des fonctions et une structure claire.",

xp:70
}

]

};