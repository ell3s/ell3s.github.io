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
var avancement = -1;
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

var animSize
var dialogSize

var capture
var w = 640
var h = 480


var canvas

var french = false


function windowResized() {

    resizeCanvas(windowWidth, windowHeight);
    animSize = ((width + height) / 2) / 10
    dialogSize = ((width + height) / 2) / 40
}



function preload() {



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

    logo = loadImage("assets/images/logo.png")



}

function setup() {
    canvas = createCanvas(windowWidth - 2, windowHeight - 2);
    canvas.position(1, 1)

    animSize = ((width + height) / 2) / 10
    dialogSize = ((width + height) / 2) / 35

    pixelDensity(1);


    setShakeThreshold(20);

    capture = createCapture({
        audio: false,
        video: {
            width: w,
            height: h
        }
    }, function () {
        console.log('capture ready.')
        capture.loadPixels();
        ambientL = 0;
        if (capture.pixels.length > 0) { // don't forget this!
            var total = 0;
            var i = 0;
            for (var y = 0; y < h; y++) {
                for (var x = 0; x < w; x++) {
                    var redValue = capture.pixels[i];
                    total += redValue;
                    i += 4;
                }
            }
            var n = w * h;
            ambientL = int(total / n);


        }
        //console.log(ambientL)
    });
    capture.elt.setAttribute('playsinline', '');
    capture.size(w, h);
    capture.hide();


    frameRate(25);
    textFont('Lato');
    textAlign(CENTER, BOTTOM);
    textSize(dialogSize);
    imageMode(CENTER);

     //Chargement de nos animations
    lumiere = new Animation("assets/anim_lumiere/lumiere_", 120);
    deverouiller = new Animation("assets/anim_deverouiller/deverrouiller_", 48);
    fairechoix = new Animation("assets/anim_choix/fairechoix_", 75);
    boussole = new Animation("assets/anim_boussole/boussole_", 143);
    agression = new Animation("assets/anim_agression/agression_", 36);
    marcherue = new Animation("assets/anim_marche/marcherrue_", 32);


    video1 = createVideo('assets/videos/PARTIE_1_boucle.mp4');
    video2 = createVideo('assets/videos/TRANSITION_1.mp4');
    video3 = createVideo('assets/videos/PARTIE_2_boucle.mp4');
    video4 = createVideo('assets/videos/TRANSITION_2.mp4');
    video5 = createVideo('assets/videos/PARTIE_3_boucle.mp4');
    video6 = createVideo('assets/videos/TRANSITION_3.mp4');
    video7 = createVideo('assets/videos/PARTIE_4_boucle.mp4');
    video8 = createVideo('assets/videos/TRANSITION_4.mp4');
    video9 = createVideo('assets/videos/TRANSITION_5.mp4');
    video10 = createVideo('assets/videos/TRANSITION_6.mp4');
    video11 = createVideo('assets/videos/TRANSITION_7.mp4');
    video12 = createVideo('assets/videos/PARTIE_8_boucle.mp4');
    video13 = createVideo('assets/videos/TRANSITION_8.mp4');


    video1.hide();
    video2.hide();
    video3.hide();
    video4.hide();
    video5.hide();
    video6.hide();
    video7.hide();
    video8.hide();
    video9.hide();
    video10.hide();
    video11.hide();
    video12.hide();
    video13.hide();
    video1.loop();
    video2.loop();
    video3.loop();
    video4.loop();
    video5.loop();
    video6.loop();
    video7.loop();
    video8.loop();
    video9.loop();
    video10.loop();
    video11.loop();
    video12.loop();
    video13.loop();
    console.log(deviceOrientation)


}


function draw() {

    // mouseIsPressed = false;

    if (avancement == -1) {
        push()
        image(video1, width / 2, height / 2, width, height)
        textAlign(CENTER, CENTER)
        textSize(dialogSize);
        fill(255)
        stroke(255)
        if (french) {
            text("cliquer pour démarrer ", width / 2, height / 2)
        } else {
            text("click to start ", width / 2, height / 2)
        }

        image(logo, width / 2, height / 3, animSize * 2, animSize * 2);

        if (mouseIsPressed) {
            avancement = 0
            video1.loop()
            chrono = millis()
        }
        pop()
    }

    // *************************************************************
    /* ETAPE 1
     Contexte : début, elle est chez elle
     Fond : orangé
     Action : Elle doit déverouiller son téléphone en le secouant
     */
    if (avancement == 0) {

        scenario0()

        if (millis() - chrono > 6000) {
            if (key == '1') evenement(3);
            if (mouseIsPressed) evenement(3);
            textSize(dialogSize);
            textAlign(LEFT, CENTER)
            if (DEBUG) text("appuyer sur 1 pour passer à l'étape suivante", 20, 140)
        }

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

        scenario1()

        if (millis() - chrono > 10500) {
            if (key == '2') evenement(1)
            if (key == '3') evenement(2)

            if (mouseIsPressed && mouseX < width / 2) {
                evenement(1)
            } else if (mouseIsPressed && mouseX > width / 2) {
                evenement(2)
            }
            textSize(dialogSize);
            textAlign(LEFT, CENTER)
            textSize(dialogSize);
            if (DEBUG) text("appuyer sur 2 ou 3 pour passer à l'étape suivante", 20, 140)

            if (deviceOrientation === 'portrait') {
                if (rotationX < -45) evenement(1)
                if (rotationX > 45) evenement(2)
            } else {
                if (rotationY < -45) evenement(1)
                if (rotationY > 45) evenement(2)
            }
        }


        if (derniere_action == 1) {

            if (choix_ok == -1) {
                choix_ok = 50;
            } else if (choix_ok > 0) {

                stroke(140, 140, 140);
                fill(140, 140, 140);
                textAlign(RIGHT, CENTER);
                textSize(dialogSize);

                if (french) text("Chouette ! je vais pouvoir mettre ma nouvelle jupe ", width * 1 / 12, height * 6.8 / 8, width * 4 / 12);
                else text("Great ! I'm going to wear my new skirt ", width * 1 / 12, height * 6.8 / 8, width * 4 / 12);
                choix_ok--;

            } else {

                avancement = 2;
                derniere_action = 0;
                chrono = millis();
                choix_ok = -1;
                video1.stop()
                video2.loop()

            }

        } else if (derniere_action == 2) {

            if (choix_ok == -1) {
                choix_ok = 50;
            } else if (choix_ok > 0) {
                stroke(140, 140, 140);
                fill(140, 140, 140);
                textAlign(LEFT, CENTER);
                textSize(dialogSize);
                if (french) text("Rien de plus confortable qu’un vieux jean pour passer une bonne soirée ", width * 7 / 12, height * 6.8 / 8, width * 4 / 12);
                else text("Nothing better than a good old pair of jeans to enjoy a good party ", width * 7 / 12, height * 6.8 / 8, width * 4 / 12);
                choix_ok--;

            } else {

                avancement = 2;
                derniere_action = 0;
                chrono = millis();
                choix_ok = -1;
                video1.stop()
                video2.loop()

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

        scenario2()

        if (millis() - chrono > 8500) {

            if (derniere_action == 1) {

                if (choix_ok == -1) {
                    choix_ok = 50;
                } else if (choix_ok > 0) {

                    stroke(140, 140, 140);
                    fill(140, 140, 140);
                    textAlign(RIGHT, CENTER);
                    textSize(dialogSize);
                    if (french) text("Je continue mon chemin l’air de rien ", width * 1 / 12, height * 6.8 / 8, width * 4 / 12);
                    else text("I continue on my way like nothing ever happened ", width * 1 / 12, height * 6.8 / 8, width * 4 / 12);
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
                } else if (choix_ok > 0) {

                    stroke(140, 140, 140);
                    fill(140, 140, 140);
                    textAlign(LEFT, CENTER);
                    textSize(dialogSize);
                    if (french) text("Je me retourne pour voir qui c’est ", width * 7 / 12, height * 6.8 / 8, width * 4 / 12);
                    else text("I look back to see who it is ", width * 7 / 12, height * 6.8 / 8, width * 6.8 / 12);
                    choix_ok--;

                } else {

                    avancement = 3;
                    derniere_action = 0;
                    chrono = millis();
                    choix_ok = -1;

                }

            }

            if (mouseIsPressed && mouseX < width / 2) {
                evenement(1)
            } else if (mouseIsPressed && mouseX > width / 2) {
                evenement(2)
            }

            if (key == '4') evenement(1)
            if (key == '5') evenement(2)

            textAlign(LEFT, CENTER)
            textSize(dialogSize);
            if (DEBUG) text("appuyer sur 4 ou 5 pour passer à l'étape suivante", 20, 140)

            if (rotationX < -45 || rotationY < -45) evenement(2)
            if (rotationX > 45 || rotationY > 45) evenement(1)
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
        scenario3()

        if (millis() - chrono > 4500) {

            if (derniere_action == 3) {
                derniere_action = 0;
                chrono = millis();
                avancement = 4;
                run.stop();
            }


            if (key == '6') evenement(3)
            if (mouseIsPressed) evenement(3)
            textAlign(LEFT, CENTER)
            textSize(dialogSize);
            if (DEBUG) text("appuyer sur 6 pour passer à l'étape suivante", 20, 140)


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
        scenario4()

        if (millis() - chrono > 4000) {
            if (derniere_action == 3) {
                avancement = 5;
                derniere_action = 0;
                chrono = millis();
            }

            if (key == '7') evenement(3)
            if (mouseIsPressed) evenement(3)

            textAlign(LEFT, CENTER)
            stroke(255)
            fill(255)
            textSize(dialogSize);
            if (DEBUG) text("appuyer sur 7 pour passer à l'étape suivante", 20, 140)
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
        scenario5()

        if (millis() - chrono > 8000) {

            if (derniere_action == 1) {
                if (choix_ok == -1) {
                    choix_ok = 50;
                }
                if (choix_ok > 0) {
                    textAlign(RIGHT, CENTER);
                    stroke(140, 140, 140);
                    fill(140, 140, 140);
                    textSize(dialogSize);
                    if (french) text("Par politesse j’accepte de danser avec lui ", width * 1 / 12, height * 6.8 / 8, width * 4 / 12);
                    else text("Out of courtesy I agree to dance with him ", width * 1 / 12, height * 6.8 / 8, width * 4 / 12);
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
                    textSize(dialogSize);
                    if (french) text("Je lui propose plutôt de discuter autour d’un verre", width * 7 / 12, height * 6.8 / 8, width * 4 / 12);
                    else text("I suggest instead to discuss over a drink ", width * 7 / 12, height * 6.8 / 8, width * 4 / 12);
                    choix_ok--;
                } else {
                    avancement = 6;
                    derniere_action = 0;
                    chrono = millis();
                    choix_ok = -1;
                }
            }
            if (key == '7') evenement(1)
            if (key == '8') evenement(2)
            textAlign(LEFT, CENTER)
            textSize(dialogSize);
            if (DEBUG) text("appuyer sur 7 ou 8 pour passer à l'étape suivante", 20, 140)

            if (rotationX < -45 || rotationY < -45) evenement(1)
            if (rotationX > 45 || rotationY > 45) evenement(2)


            if (mouseIsPressed && mouseX < width / 2) {
                evenement(1)
            } else if (mouseIsPressed && mouseX > width / 2) {
                evenement(2)
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

        scenario6()

        if (millis() - chrono > 20000) {


            if (derniere_action == 1) {
                if (choix_ok == -1) {
                    choix_ok = 50;
                }
                if (choix_ok > 0) {
                    textAlign(RIGHT, CENTER);
                    stroke(140, 140, 140);
                    fill(140, 140, 140);
                    textSize(dialogSize);
                    if (french) text("Je le repousse ", width * 1 / 12, height * 6.8 / 8, width * 4 / 12);
                    else text("I reject him ", width * 1 / 12, height * 6.8 / 8, width * 4 / 12);
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
                    textSize(dialogSize);
                    if (french) text("Je suis surprise mais le laisse faire ", width * 7 / 12, height * 6.8 / 8, width * 4 / 12);
                    else text("I'm surprised but let him go ", width * 7 / 12, height * 6.8 / 8, width * 4 / 12);
                    choix_ok--;
                } else {
                    avancement = 7;
                    derniere_action = 0;
                    chrono = millis();
                    choix_ok = -1;
                }
            }

            if (key == 'a') evenement(1)
            if (key == 'z') evenement(2)
            if (rotationX < -45 || rotationY < -45) evenement(1)
            if (rotationX > 45 || rotationY > 45) evenement(2)
            textAlign(LEFT, CENTER)
            textSize(dialogSize);
            if (DEBUG) text("appuyer sur a ou z pour passer à l'étape suivante", 20, 140)


            if (mouseIsPressed && mouseX < width / 2) {
                evenement(1)
            } else if (mouseIsPressed && mouseX > width / 2) {
                evenement(2)
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

        scenario7();

        if (millis() - chrono > 8000) {

            if (derniere_action == 3) {
                avancement = 8;
                derniere_action = 0;
                chrono = millis();
            }

            if (mouseIsPressed) evenement(3)
            if (key == 'e') evenement(3)

            textAlign(LEFT, CENTER)
            textSize(dialogSize);
            if (DEBUG) text("appuyer sur e pour passer à l'étape suivante", 20, 140)


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
        scenario8()

        if (millis() - chrono > 8000) {

            if (derniere_action == 5) {
                avancement = 9;
                derniere_action = 0;
                chrono = millis();
            }
            if (key == 'l') {
                evenement(5)
            }

            textAlign(LEFT, CENTER)
            textSize(dialogSize);
            if (DEBUG) text("appuyer sur l pour passer à l'étape suivante", 20, 140)

            capture.loadPixels();
            if (capture.pixels.length > 0) { // don't forget this!
                var total = 0;
                var i = 0;
                for (var y = 0; y < h; y++) {
                    for (var x = 0; x < w; x++) {
                        var redValue = capture.pixels[i];
                        total += redValue;
                        i += 4;
                    }
                }
                var n = w * h;
                var avg = int(total / n);
                if (avg > ambientL + 200) evenement(5)
            }
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

        scenario9()

        if (millis() - chrono > 21000) {

            if (key == 'm') {
                moment_derniere_action = millis();
                avancement = 0
                marche.stop();
                verouiller.stop();
                heatbeat.stop();
                fin1.stop();
                fin2.stop();
                reconstruction.stop();
                ruepeur.stop();
                peur2.stop();
                debut.stop();
                hit.stop();
                run.stop();
                porte.stop();
                habits.stop();
                fete.stop();
                fete2.stop();
                agres.stop();
                amour.stop();


                hit_playing = false;
                marche_playing = false;
                run_playing = false;
                porte_playing = false;
                habits_playing = false;
                fete_playing = false;
                agres_playing = false;
                debut_playing = false;
                ruepeur_playing = false;
                amour_playing = false;
                peur2_playing = false;
                fin1_playing = false;
                fin2_playing = false;
                reconstruction_playing = false;
                verouiller_playing = false;
                heatbeat_playing = false;

            }
            textSize(dialogSize);
            if (DEBUG) text("appuyer sur m pour revenir au début", 20, 140)
        }
    }





    push()
    //  background(0);
    fill(255);
    textAlign(LEFT, CENTER)
    textSize(16)
    if (DEBUG) text("avancement : " + avancement, 20, 20);
    if (DEBUG) text("dernière action : " + derniere_action, 20, 45);
    if (DEBUG) text("chrono : " + nf((millis() - chrono) / 1000, 3, 1), 20, 70);
    pop()

    mouseIsPressed = false
}




function evenement(action) {
    moment_derniere_action = millis();
    derniere_action = action;
}

function deviceShaken() {
    if (millis() - moment_derniere_action > 5000) evenement(3);
}


/*
window.addEventListener('devicelight', function(event) {
    console.log("event",event)
    tLight = event.value / 100;
    if (event.value < 1000) {
        alert('Hey, you! You are working in a dark environment');
      //  evenement(5)
    }
});*/
