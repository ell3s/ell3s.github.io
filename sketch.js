//https://kylemcdonald.github.io/cv-examples/
//https://developer.mozilla.org/en-US/docs/Web/API/DeviceLightEvent/Using_light_sensors


/*
 Elle(s) est une représentation abstraite des émotions ressenties
 par une femme victime d’agression sexuelle.

***** vareractions *****

 Grâce à une liaison avec une tablette équipée de l'appliaction OscHook nous pouvons
 récupérer des données qui nous permettent de générer des vareractions
 permetttant de naviguer dans notre histoire.
 vareractions :
 - Faire un choix entre 2 options A ou B grâce à l'accéloromètre/gravité
 - Secouer avec plus ou moins de force avec l'accéloromètre linaire
 - Déclencher une explosion avec le capteur de luminosité

 S'il n'y a pas de tablette, il est possible de passer les vareractions avec les touches
 du clavier :
 - choix A (gauche) = touche G
 - choix B (droite) = touche D
 - secouer (quelque soit les forces de secouement) : touche S
 - déclancher l'explosion (cacher la lumière) = touche E

 ***** Visuel *****

 Le programme sc_nario fait appel à une fonction nommée boules qui génère un tableau
 contenant différentes boules représentant les différentes émotions traversées par la
 femme au cours de la soirée. Les boules sont donc appelée dans ce programme pour
 qu'elles se descinent.

 Nous avons varégré des GIFs grâce à un programme nommé animation.
 Ce programme permet de traiter les GIFs et c'est dans le programme nommé sc_nario
 que sont appelés les GIFs pour qu'ils s'affichent.


 Le programme sc_nario permet également de traité le fond vidéo
 et appelle des so  ns stockés dans un tableau.
 */



var x0, y0, x1, y1;
var avancement = 0;
var derniere_action = 0;
var moment_derniere_action = 0;

//Bibliothèque des différents sons chargés
var marche;
var verouiller;
var heatbeat;
var fin1;
var fin2;
var reconstruction;
var ruepeur;
var peur2;
var debut;
var hit;
var run;
var porte;
var habits;
var fete;
var fete2;
var agres;
var amour;


var hit_playing = false;
var marche_playing = false;
var run_playing = false;
var porte_playing = false;
var habits_playing = false;
var fete_playing = false;
var agres_playing = false;
var debut_playing = false;
var ruepeur_playing = false;
var amour_playing = false;
var peur2_playing = false;
var fin1_playing = false;
var fin2_playing = false;
var reconstruction_playing = false;
var verouiller_playing = false;
var heatbeat_playing = false;

var choix_ok = -1;
/*
 1 : gauche
 2 : droite
 3 : secoué
 */

var chrono = 0;
var DEBUG = true;
var police;


//nom de nos animations
var deverouiller
var fairechoix
var boussole
var agression
var marcherue
var lumiere

var cap

//Movie video;

function windowResized() {

    resizeCanvas(windowWidth, windowHeight);
}



function preload() {
    //Chargement de nos animations
    lumiere = new Animation("assets/anim_lumiere/lumiere_", 120);
    deverouiller = new Animation("assets/anim_deverouiller/deverrouiller_", 48);
    fairechoix = new Animation("assets/anim_choix/fairechoix_", 75);
    boussole = new Animation("assets/anim_boussole/boussole_", 143);
    agression = new Animation("assets/anim_agression/agression_", 36);
    marcherue = new Animation("assets/anim_marche/marcherrue_", 32);


    hit = loadSound("assets/vibeurtelephone.mp3");
    run = loadSound("assets/run.mp3");
    porte = loadSound("assets/porte2.mp3");
    habits = loadSound("assets/habits.mp3");
    marche = loadSound("assets/marche3.mp3");
    fete = loadSound("assets/fete2.mp3");
    fete2 = loadSound("assets/fete2_lop.mp3");
    agres = loadSound("assets/agression.mp3");
    debut = loadSound("assets/debut.mp3");
    ruepeur = loadSound("assets/ruepeur.mp3");
    amour = loadSound("assets/amour.mp3");
    peur2 = loadSound("assets/peur2.mp3");
    fin2 = loadSound("assets/fin2.mp3");
    fin1 = loadSound("assets/fin1.mp3");
    reconstruction = loadSound("assets/reconstruction.mp3");
    verouiller = loadSound("assets/verouiller.mp3");
    heatbeat = loadSound("assets/heatbeat.mp3");


}

function setup() {
    createCanvas(windowWidth, windowHeight);

    pixelDensity(4);


    setShakeThreshold(15);

    /*
    var constraints = {
    video: {
      mandatory: {
        minWidth: 320,
        minHeight: 240
      },
      optional: [{ maxFrameRate: 10 }]
    },
    audio: false
  };
 capture =  createCapture(constraints, function(stream) {
    console.log(stream);
  });

    //capture = createCapture(VIDEO);
    capture.size(320, 240);
*/
    // cap = createCapture(VIDEO);
    //cap.hide();


    frameRate(25);
    textFont('Lato');
    textAlign(CENTER, BOTTOM);
    textSize(20);
    imageMode(CENTER);
}


function draw() {
    background(0);
    fill(255);
    textAlign(LEFT, CENTER)
    if (DEBUG) text("avancement : " + avancement, 20, 40);
    if (DEBUG) text("dernière action : " + derniere_action, 20, 70);
    if (DEBUG) text("chrono : " + nf((millis() - chrono) / 1000, 3, 1), 20, 100);

    // *************************************************************
    /* ETAPE 1
     Contexte : début, elle est chez elle
     Fond : orangé
     Action : Elle doit déverouiller son téléphone en le secouant
     */
    if (avancement == 0) {
        textAlign(CENTER, CENTER);
        //Son du vibreur et de l'ambiance de la sérénité
        if (millis() - chrono < 12000) {
            if (!hit_playing) hit.play();
            hit_playing = true;
        }
        if (millis() - chrono > 5000) {
            if (!debut_playing) debut.play();
            debut_playing = true;
        }
        fill(255, 255, 255, 255);

        //Le texte apparait en fonction d'un temps que nous avons défini grâce à un chronomètre
        if (millis() - chrono > 6000) {
            stroke(255, (millis() - chrono - 6000) / 10);
            fill(255, (millis() - chrono - 6000) / 10);
            text("Pour répondre SECOUER le téléphone", width / 2, height * 7 / 8);
            deverouiller.display(width / 2, height * 6 / 8, 150, 150);

        }
        textAlign(LEFT, CENTER)
        if (key == '1') evenement(3);
        if (DEBUG) text("appuer sur 1 pour passer à l'étape suivante", 20, 140)
        //Appel d'une des boules du tableau par son nom (boule0, boule1,...)
        boule0();

        // derniere_action correspond aux différentes vareractions réalisé avec la tablette,
        // ces varerections permettent de passé à la case/partie suivant (avancement = 1, 2, 3,...)
        /*
         - dernière_action = 1 : Choix A
         - dernière_action = 2 : Choix B
         - dernière_action = 3 : Secouer
         - dernière_action = 5 : Explosion
         */
        // Permet d'avancer à l'étape, action numéro 2
        if (derniere_action == 3) {

            avancement = 1;
            derniere_action = 0;
            chrono = millis();
            hit.stop();
        }
    }

    // *************************************************************
    /* ETAPE 2
     Contexte : elle est toujours chez elle
     Fond : orangé
     Action : Elle doix choisir entre 2 choix : A - porter une jupe, B - porter un pantalon
     */
    if (avancement == 1) {
        textAlign(CENTER, CENTER);
        boule0();
        var mavarenant = millis() - chrono;
        if ((mavarenant > 0) && (mavarenant < 4000)) {

            if (!verouiller_playing) {
                verouiller.play();
                verouiller_playing = true;
            }

            textAlign(CENTER, CENTER);

            stroke(255, (millis() - chrono) / 10);
            fill(255, (millis() - chrono) / 10);
            text("SMS: “Hey ! Tu viens à ma fête ce soir ?!”", width / 2, height * 7 / 8);
        }
        if ((mavarenant > 4000) && (mavarenant < 8000)) {
            stroke(255, 255, 255, (millis() - chrono - 4000) / 10);
            fill(255, 255, 255, (millis() - chrono - 4000) / 10);
            text("SMS: “Alors tu viens ou pas ?”", width / 2, height * 7 / 8);
        }

        //le texte de gauche (choix A) apparaît avant le texte de droite (choix B)
        if (mavarenant > 8000) {
            if (millis() - chrono > 9000) {
                fairechoix.display(width / 2, height * 7.2 / 8, 280, 130);

                if (!habits_playing) {
                    habits.play();
                    habits_playing = true;
                }

                textAlign(RIGHT, CENTER);
                stroke(255, 255, 255, (millis() - (chrono + 9000)) / 10);
                fill(255, 255, 255, (millis() - (chrono + 9000)) / 10);
                text("Chouette je vais pouvoir mettre ma nouvelle jupe", width * 1 / 12, height * 7.2 / 8, width * 4 / 12);
                stroke(255, 255, 255, (millis() - (chrono + 10000)) / 10);
                fill(255, 255, 255, (millis() - (chrono + 10000)) / 10);
                textAlign(LEFT, CENTER);
                text("Rien de plus confortable qu’un vieux jean pour passer une bonne soirée", width * 7 / 12, height * 7.2 / 8, width * 4 / 12);

                if (key == '2') evenement(1)
                if (key == '3') evenement(2)

                textAlign(LEFT, CENTER)
                if (DEBUG) text("appuer sur 2 ou 3 pour passer à l'étape suivante", 20, 140)

                if (rotationX < -45 || rotationY < -45) evenement(1)
                if (rotationX > 45 || rotationY > 45) evenement(2)
            }
        }

        if (derniere_action == 1) {
            if (choix_ok == -1) {
                choix_ok = 50;
            }
            if (choix_ok > 0) {
                stroke(140, 140, 140);
                fill(140, 140, 140);
                textAlign(RIGHT, CENTER);
                text("Chouette je vais pouvoir mettre ma nouvelle jupe", width * 1 / 12, height * 7.2 / 8, width * 4 / 12);
                choix_ok--;
            } else {
                avancement = 2;
                derniere_action = 0;
                chrono = millis();
                choix_ok = -1;
            }
        } else if (derniere_action == 2) {
            if (choix_ok == -1) {
                choix_ok = 50;
            }
            if (choix_ok > 0) {
                stroke(140, 140, 140);
                fill(140, 140, 140);
                textAlign(LEFT, CENTER);
                text("Rien de plus confortable qu’un vieux jean pour passer une bonne soirée", width * 7 / 12, height * 7.2 / 8, width * 4 / 12);
                choix_ok--;
            } else {
                avancement = 2;
                derniere_action = 0;
                chrono = millis();
                choix_ok = -1;
            }
        }
    }

    // *************************************************************
    /* ETAPE 3
     Contexte : Elle marche dans la rue, un homme la siffle
     Fond : bleu gris
     Action : Elle doix choisir entre 2 choix : A - l'ignorer, B - voir qui c'est
     Emotion : surprise
     */
    if (avancement == 2) {
        boule0();
        var mavarenant = millis() - chrono;
        if ((mavarenant > 0) && (mavarenant < 4000)) {
            if (millis() - chrono < 4000) {
                if (!porte_playing) porte.play();
                porte_playing = true;
            }
            stroke(255, 255, 255, (millis() - chrono) / 10);
            fill(255, 255, 255, (millis() - chrono) / 10);
            textAlign(CENTER, BOTTOM);
            text("Je suis prête ! J’y vais ! ", width / 2, height * 7 / 8);
        }
        if ((mavarenant > 4000) && (mavarenant < 8000)) {
            if (millis() - chrono > 4000) {
                if (!marche_playing) marche.loop();
                marche_playing = true;
            }
            //porte.stop();
            if (millis() - chrono > 4000) {
                boule1();

                if (!ruepeur_playing) ruepeur.loop(); // TODO baisser le volume de ce son manuellement
                ruepeur_playing = true;

                //ruepeur.amp(0.8);
            }
            stroke(255, 255, 255, (millis() - chrono - 4000) / 10);
            fill(255, 255, 255, (millis() - chrono - 4000) / 10);
            text("Je marche tranquillement dans la rue quand soudain un homme m’interpelle en me sifflant", width / 2, height * 7.2 / 8);
        }
        if (mavarenant > 8000) {
            boule1();

            if (millis() - chrono > 9000) {
                //ruepeur.amp(1);
                fairechoix.display(width / 2, height * 6.95 / 8, 280, 130);
                stroke(255, 255, 255, (millis() - chrono - 9000) / 10);
                fill(255, 255, 255, (millis() - chrono - 9000) / 10);

                textAlign(RIGHT, CENTER);
                text("Je continue mon chemin l’air de rien ", width * 1 / 12, height * 7.2 / 8, width * 4 / 12);
            }
            if (millis() - chrono > 10000) {

                stroke(255, 255, 255, (millis() - chrono - 10000) / 10);
                fill(255, 255, 255, (millis() - chrono - 10000) / 10);
                textAlign(LEFT, CENTER);
                text("Je me retourne pour voir qui c'est", width * 7 / 12, height * 7.2 / 8, width * 4 / 12);

            }
            if (key == '4') evenement(1)
            if (key == '5') evenement(2)



            textAlign(LEFT, CENTER)
            if (DEBUG) text("appuer sur 4 ou 5 pour passer à l'étape suivante", 20, 140)

            if (rotationX < -45 || rotationY < -45) evenement(2)
            if (rotationX > 45 || rotationY > 45) evenement(1)
        }



        if (derniere_action == 1) {
            if (choix_ok == -1) {
                choix_ok = 50;
            }
            if (choix_ok > 0) {
                stroke(140, 140, 140);
                fill(140, 140, 140);
                textAlign(RIGHT, CENTER);
                text("Je continue mon chemin l’air de rien ", width * 1 / 12, height * 7.2 / 8, width * 4 / 12);
                choix_ok--;
            } else {
                avancement = 3;
                derniere_action = 0;
                chrono = millis();
                choix_ok = -1;
            }
        } else if (derniere_action == 2) {
            if (choix_ok == -1) {
                choix_ok = 50;
            }
            if (choix_ok > 0) {
                stroke(140, 140, 140);
                fill(140, 140, 140);
                textAlign(LEFT, CENTER);
                text("Je me retourne pour voir qui c’est ", width * 7 / 12, height * 7.2 / 8, width * 4 / 12);
                choix_ok--;
            } else {
                avancement = 3;
                derniere_action = 0;
                chrono = millis();
                choix_ok = -1;
            }
        }
    }

    // *************************************************************
    /* ETAPE 4
     Contexte : Elle est toujours dans la rue, l'homme l'varerpelle
     Fond : bleu gris
     Action : elle accélère le pas (secouer la tablette)
     Emotion : énervement
     */
    if (avancement == 3) {
        boule2();
        if (millis() - chrono < 4000) {
            if (!run_playing) run.loop();
            run_playing = true;
        }
        if (millis() - chrono < 4000) {
            // ruepeur.amp(1);
            marche.stop();

            //debut.amp(0.3);// TODO baisser le volume de ce son manuellement
            stroke(255, 255, 255, (millis() - chrono) / 10);
            fill(255, 255, 255, (millis() - chrono) / 10);
            textAlign(CENTER, CENTER);
            text("“Hé t’as pas un 06” Je ne lui répond pas et accélère le pas. J’ai peur qu’il me suive...", width / 2, height * 7.2 / 8);
        }

        //    textFont(police, 15);
        if (millis() - chrono > 4000) text("Pour marcher plus vite SECOUER le téléphone", width / 2, height * 7.2 / 8);
        if (millis() - chrono > 4000) marcherue.display(width / 2, height * 6.3 / 8, 150, 150);

        if (key == '6') evenement(3)
        textAlign(LEFT, CENTER)
        if (DEBUG) text("appuer sur 6 pour passer à l'étape suivante", 20, 140)

        if (derniere_action == 3) {

            derniere_action = 0;
            chrono = millis();
            avancement = 4;
            run.stop();
        }
    }

    // *************************************************************
    /* ETAPE 5
     Contexte : Elle arrive à la fête de son amie et va danser
     Fond : orange rose
     Action : danser (secouer la tablette)
     Emotion : joie
     */
    if (avancement == 4) {
        /*
        La boule joie est composée de plusieurs boules,
         une grosse au milieu et d'autre plus petites autour
         */
        boule3(); // boule principale
        boulez(); // petite boule autour (haut - gauche)
        boulef(); // petite boule autour (haut - droit)
        bouler(); // petite boule autour (bas - droit)
        boulet(); // petite boule autour (bas - gauche)
        if (millis() - chrono < 5000) {
            porte.stop();
            if (!fete_playing) fete.loop();
            fete_playing = true;
        }
        if (millis() - chrono < 3000) {
            boule3();
            boulez();
            boulef();
            bouler();
            boulet();
            //debut.amp(1);
            ruepeur.stop();
            textAlign(CENTER, CENTER);
            stroke(255, 255, 255, (millis() - chrono) / 10);
            fill(255, 255, 255, (millis() - chrono) / 10);
            text("J’arrive enfin chez mon amie, la fête bat déjà son plein. Je me faufile jusqu’au bar en saluant des amis sur le passage.", width / 2, height * 7.2 / 8);
        }
        if (millis() - chrono > 4000) {
            boule3();
            boulez();
            boulef();
            bouler();
            boulet();
            stroke(255, 255, 255, 255);
            fill(255, 255, 255, 255);
            //    textFont(police, 15);
            textAlign(CENTER, CENTER);
            text("pour danser SECOUER le téléphone", width / 2, height * 7.2 / 8);
            marcherue.display(width / 2, height * 6 / 8, 150, 150);

            if (key == '7') evenement(3)
            textAlign(LEFT, CENTER)
            if (DEBUG) text("appuer sur 7 pour passer à l'étape suivante", 20, 140)



            if (derniere_action == 3) {
                avancement = 5;
                derniere_action = 0;
                chrono = millis();
            }
        }

    }

    // *************************************************************
    /* ETAPE 6
     Contexte : Elle est à la fête, un iconnu lui propose de danser
     Fond : rose violet
     Action : Elle doix choisir entre 2 choix : A - aller danser, B - discuter
     Emotion : séduction
     */
    if (avancement == 5) {
        /*
        La boule séduction est composée de plusieurs boules,
         une grosse au milieu et d'autre plus petites autour
         */
        boule4(); // boule principale
        boulea(); // petite boule autour (haut - gauche)
        bouleb(); // petite boule autour (haut - droit)
        boulec(); // petite boule autour (bas - droit)
        bouled(); // petite boule autour (bas - gauche)
        if (millis() - chrono > 1) {
            if (!amour_playing) amour.play();
            amour_playing = true;
            //  amour.amp(0.7);// TODO baisser le volume de ce son manuellement
            debut.stop();
        }

        if (millis() - chrono < 6000) {
            boule4();
            boulea();
            bouleb();
            boulec();
            bouled();
            stroke(255, 255, 255, (millis() - chrono) / 10);
            fill(255, 255, 255, (millis() - chrono) / 10);
            textAlign(CENTER, CENTER);
            text("Une personne de la soirée arrive vers moi, et me propose de danser", width / 2, height * 7 / 8);
        }

        if (millis() - chrono > 7000) {
            if (millis() - chrono > 9000) {
                if (!amour_playing) amour.play();
                amour_playing = true;
                debut.stop();
            }

            stroke(255, 255, 255, (millis() - chrono - 7000) / 10);
            fill(255, 255, 255, (millis() - chrono - 7000) / 10);
            textAlign(RIGHT, CENTER);
            text("Par politesse j’accepte de danser avec lui", width * 1 / 12, height * 7 / 8, width * 4 / 12, 100);
            fairechoix.display(width / 2, height * 6.8 / 8, 280, 130);
            if (key == 'a') evenement(1)
            if (key == 'b') evenement(2)
        }

        if (millis() - chrono > 8000) {
            boule4();
            boulea();
            bouleb();
            boulec();
            bouled();
            textAlign(LEFT, CENTER);
            stroke(255, 255, 255, (millis() - chrono - 8000) / 10);
            fill(255, 255, 255, (millis() - chrono - 8000) / 10);
            text("Je lui propose plutôt de discuter autour d’un verre", width * 7 / 12, height * 7 / 8, width * 4 / 12, 100);
        }

        if (key == '7') evenement(1)
        if (key == '8') evenement(2)
        textAlign(LEFT, CENTER)
        if (DEBUG) text("appuer sur 7 ou 8 pour passer à l'étape suivante", 20, 140)

        if (rotationX < -45 || rotationY < -45) evenement(1)
        if (rotationX > 45 || rotationY > 45) evenement(2)

        if (derniere_action == 1) {
            if (choix_ok == -1) {
                choix_ok = 50;
            }
            if (choix_ok > 0) {
                textAlign(RIGHT, CENTER);
                stroke(140, 140, 140);
                fill(140, 140, 140);
                text("Par politesse j’accepte de danser avec lui", width * 1 / 12, height * 7 / 8, width * 4 / 12, 100);
                choix_ok--;
            } else {
                avancement = 6;
                derniere_action = 0;
                chrono = millis();
                choix_ok = -1;
            }
        } else if (derniere_action == 2) {
            if (choix_ok == -1) {
                choix_ok = 50;
            }
            if (choix_ok > 0) {
                textAlign(LEFT, CENTER);
                stroke(140, 140, 140);
                fill(140, 140, 140);
                text("Je lui propose plutôt de discuter autour d’un verre", width * 7 / 12, height * 7 / 8, width * 4 / 12, 100);
                choix_ok--;
            } else {
                avancement = 6;
                derniere_action = 0;
                chrono = millis();
                choix_ok = -1;
            }
        }
    }

    // *************************************************************
    /* ETAPE 7
     Contexte : L'inconnu embarque la femme dans une chambre, pièce isolé.
     Il ferme la porte, et tente de l'embrasser.
     Fond : bleu gris
     Action : Elle doix choisir entre 2 choix : A - le repousser, B - le laisser faire
     Emotion : stress
     */
    if (avancement == 6) {
        if (millis() - chrono > 1) {
            if (!peur2_playing) peur2.play();
            peur2_playing = true;
            //peur2.amp(3); // TODO augmenter le volume de ce son manuellement
            if (!heatbeat_playing) heatbeat.play();
            heatbeat_playing = true;
            //heatbeat.amp(4); // TODO baisser le volume de ce son manuellement
            //amour.amp(0.2); // // TODO baisser le volume de ce son manuellement
            debut.stop();
        }
        var mavarenant = millis() - chrono;
        if ((mavarenant > 0) && (mavarenant < 10000)) {
            boule4();
            boulea();
            bouleb();
            boulec();
            bouled();
            if (millis() - chrono < 10000)
                //fete.stop();
                stroke(255, 255, 255, (millis() - chrono) / 10);
            fill(255, 255, 255, (millis() - chrono) / 10);
            textAlign(CENTER, CENTER);
            text("Il me dit quelque chose mais le volume sonore de la fête augmente et je ne l’entend pas. Il m’attire vers une pièce à l’étage. Je me laisse entraîner.", width / 2, height * 7 / 8, width / 4);

        }
        if ((mavarenant > 10000) && (mavarenant < 20000)) {
            boule5();
            stroke(255, 255, 255, (millis() - chrono - 10000) / 10);
            fill(255, 255, 255, (millis() - chrono - 10000) / 10);
            text("On entre dans une chambre, il ferme la porte derrière nous. Je suis un peu mal à l’aise.Que dois-je faire ? Il tente de m’embrasser.", width / 2, height * 7 / 8, width / 4);

        }


        if (mavarenant > 20000) {
            boule5();
            if (millis() - chrono > 21000) {
                stroke(255, 255, 255, (millis() - chrono - 21000) / 10);
                fill(255, 255, 255, (millis() - chrono - 21000) / 10);
                textAlign(RIGHT, CENTER);
                text("Je le repousse", width * 1 / 12, height * 7.2 / 8, width * 4 / 12);
            }
            if (millis() - chrono > 21000) {
                boule5();
                stroke(255, 255, 255, (millis() - chrono - 22000) / 10);
                fill(255, 255, 255, (millis() - chrono - 22000) / 10);
                textAlign(LEFT, CENTER);
                text("Je suis surprise mais le laisse faire", width * 7 / 12, height * 7.2 / 8, width * 4 / 12);
            }
            if (millis() - chrono > 21000) fairechoix.display(width / 2, height * 6.95 / 8, 280, 130);
            if (key == 'a') evenement(1)
            if (key == 'z') evenement(2)
            if (rotationX < -45 || rotationY < -45) evenement(1)
            if (rotationX > 45 || rotationY > 45) evenement(2)
            textAlign(LEFT, CENTER)
            if (DEBUG) text("appuer sur a ou z pour passer à l'étape suivante", 20, 140)
        }


        if (derniere_action == 1) {
            if (choix_ok == -1) {
                choix_ok = 50;
            }
            if (choix_ok > 0) {
                textAlign(RIGHT, CENTER);
                stroke(140, 140, 140);
                fill(140, 140, 140);
                text("Je le repousse", width * 1 / 12, height * 7.2 / 8, width * 4 / 12);
                choix_ok--;
            } else {
                avancement = 7;
                derniere_action = 0;
                chrono = millis();
                choix_ok = -1;
            }
        } else if (derniere_action == 2) {
            if (choix_ok == -1) {
                choix_ok = 50;
            }
            if (choix_ok > 0) {
                textAlign(LEFT, CENTER);
                stroke(140, 140, 140);
                fill(140, 140, 140);
                text("Je suis surprise mais le laisse faire", width * 7 / 12, height * 7.2 / 8, width * 4 / 12);
                choix_ok--;
            } else {
                avancement = 7;
                derniere_action = 0;
                chrono = millis();
                choix_ok = -1;
            }
        }
    }

    // *************************************************************
    /* ETAPE 8
     Contexte : L'homme commence à avoir des gestes insistant.
     Fond : bleu foncé
     Action : se débattre (secouer la tablette)
     Emotion : peur
     */
    if (avancement == 7) {
        boule5();
        if (millis() - chrono < 4000) {
            if (!agres_playing) agres.play();
            agres_playing = true;
        }
        if (millis() - chrono < 20000) {
            stroke(255, 255, 255, (millis() - chrono) / 10);
            fill(255, 255, 255, (millis() - chrono) / 10);
            textAlign(CENTER, CENTER);
            text("Il est insistant et commence à avoir des gestes déplacés.", width / 2, height * 7 / 8);
        }
        if (millis() - chrono > 3000) text("pour me débattre SECOUER VIGOUREUSEMENT le téléphone ", width / 2, height * 7 / 8);
        if (millis() - chrono > 3000) agression.display(width / 2, height * 6.7 / 8, 150, 150);
        if (key == 'e') evenement(3)

        textAlign(LEFT, CENTER)
        if (DEBUG) text("appuer sur e pour passer à l'étape suivante", 20, 140)
        if (derniere_action == 3) {
            avancement = 8;
            derniere_action = 0;
            chrono = millis();
        }
    }


    // *************************************************************
    /* ETAPE 9
     Contexte : Il continu et va trop loin.
     Fond : bleu foncé
     Action : Explosion (lumière cachée)
     Emotion : peur, grande colère
     */
    if (avancement == 8) {
        if (millis() - chrono < 5000) {
            if (!fin1_playing) fin1.play();
            fin1_playing = true;
            // peur2.amp(0.7); // TODO baisser le volume de ce son manuellement
        }
        if (millis() - chrono > 5000) {
            if (!fin2_playing) fin2.play();
            fin2_playing = true;
        }
        if (millis() - chrono < 80000) {
            boule6();
            textAlign(CENTER, CENTER);
            stroke(255, 255, 255, (millis() - chrono) / 10);
            fill(255, 255, 255, (millis() - chrono) / 10);
            text("Mais il continue, il est allé trop loin…", width / 2, height * 7 / 8);
        }

        textAlign(CENTER, CENTER);
        stroke(255, 255, 255, 255);
        fill(255, 255, 255, 255);

        if (millis() - chrono > 3000) text("Cacher le capteur de luminosité du téléphone", width / 2, height * 7.2 / 8);
        if (millis() - chrono > 3000) lumiere.display(width / 2, height * 6.2 / 8, 150, 200);
        if (key == 'l') {
            evenement(5)
        }
        textAlign(LEFT, CENTER)
        if (DEBUG) text("appuer sur l pour passer à l'étape suivante", 20, 140)

        /*
        cap.loadPixels();
        for (var cy = 0; cy < cap.height; cy += 10) {
            for (var cx = 0; cx < cap.width; cx += 5) {
                var offset = ((cy * cap.width) + cx) * 4;
                var xpos = (cx / cap.width) * width;
                var ypos = (cy / cap.height) * height;
                rect(xpos, ypos, 10,
                    10 * (cap.pixels[offset + 1] / 255));
            }
        }

        if (tlight < 500) {
            evenement(5)
        }*/

        if (derniere_action == 5) {
            avancement = 9;
            derniere_action = 0;
            chrono = millis();
        }
    }

    // *************************************************************
    /* ETAPE 10
     Contexte : L'inconnu embarque la femme dans une chambre, pièce isolé.
     Il ferme la porte, et tente de l'embrasser.
     Fond : bleu foncé noir
     Action : Elle doix choisir entre 2 choix : A - le repousser, B - le laisser faire
     Emotion : explosion (en 2 temps)
     */
    if (avancement == 9) {


        var mavarenant = millis() - chrono;
        if ((mavarenant > 0) && (mavarenant < 4000)) {
            boule7();
        }
        if ((mavarenant > 4000) && (mavarenant < 8000)) {
            boule11();
        }

        // FIN HISTOIRE - FOND NOIR "RIDEAU" - FINALITÉ
        /*
         Contexte : Elle est complètement anéantie.
         Elle se reconstruit petit à petit, en créant une coquille de protection autour
         de sa boule d'émotion.
         Fond : bleu foncé qui s'éclairci
         Emotion : néant et reconstruction
         + Message de dénonciation (statistique du nombre de victime de viol)
         */

        if ((mavarenant > 13000) && (mavarenant < 21000)) {
            boule8();
        }
        if (mavarenant > 21000) {
            boule0();
            boule10();
            textAlign(CENTER, CENTER);
            stroke(255, 255, 255, (millis() - chrono - 10000) / 10);
            fill(255, 255, 255, (millis() - chrono - 10000) / 10);
            text("62 000 femmes sont victimes chaque année de viol et de tentative de viol. ", width / 2, height * 7 / 8);
        }

        if (key == 'm') {
            moment_derniere_action = millis();
            avancement = 0
        }
        if (DEBUG) text("appuer sur m pour revenir au début", 20, 140)
    }



    if (derniere_action == 5) {
        avancement = 9;
        derniere_action = 0;
        chrono = millis();
    }
}




function evenement(action) {
    moment_derniere_action = millis();
    derniere_action = action;
    //prvarln("derniere action : " + derniere_action);
}

function deviceShaken() {
    if (millis() - moment_derniere_action > 5000) evenement(3);
}


var tlight


/*

window.addEventListener('devicelight', function(event) {
		console.log("event",event)
			tLight = event.value / 100;

    if (event.value < 1000) {

alert('Hey, you! You are working in a dark environment');
      //  evenement(5)
    }
	});*/
