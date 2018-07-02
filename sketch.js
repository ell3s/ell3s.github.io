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
var DEBUG = false;
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

var french = true


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

    logo = loadImage("assets/images/logoelles.png")



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

    console.log(deviceOrientation)

    buttonfr = new Button("Français", "French", 1)
    buttoneng = new Button("Anglais", "English",1)
    buttonstart = new Button("Cliquer pour démarrer", "Click to start",3)
    buttonhome = new Button("Retour", "Home",3)


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

        if (french) text("Représentation abstraire des émotions ressenties par une femme victime d’agression sexuelle.", width / 4, height * 4.3 / 8, width / 2)
        else text("Abstract representation of a woman's emotions being sexually assaulted", width / 4, height * 4.3 / 8, width / 2)


        buttonstart.display(width / 2, height * 3 / 4, dialogSize * 2)
        buttonstart.over(mouseX, mouseY)


        buttoneng.display(width - 100, 50, dialogSize * 0.5)
        buttoneng.over(mouseX, mouseY)
        if (buttoneng.isPressed) {
            french = false
        }

        buttonfr.display(width - 250, 50, dialogSize * 0.5)
        buttonfr.over(mouseX, mouseY)
        if (buttonfr.isPressed) {
            french = true
        }
        /*
        textFont('La+Belle+Aurore');
        textAlign(CENTER, BOTTOM);
        textSize(dialogSize);
            text("Elle(s)", width / 2, height / 3,)
        */
        image(logo, width / 2, height / 3, animSize * 4, animSize * 4);

        if (buttonstart.isPressed) {
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
                if (rotationY < -45) evenement(1)
                if (rotationY > 45) evenement(2)
            } else {
                if (rotationX < -45) evenement(2)
                if (rotationX > 45) evenement(1)
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


            if (deviceOrientation === 'portrait') {
                if (rotationY < -45) evenement(1)
                if (rotationY > 45) evenement(2)
            } else {
                if (rotationX < -45) evenement(2)
                if (rotationX > 45) evenement(1)
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
        scenario3()

        if (millis() - chrono > 4500) {

            if (derniere_action == 3) {
                derniere_action = 0;
                chrono = millis();
                avancement = 4;
                run.stop();
                video4.loop()
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

            if (deviceOrientation === 'portrait') {
                if (rotationY < -45) evenement(1)
                if (rotationY > 45) evenement(2)
            } else {
                if (rotationX < -45) evenement(2)
                if (rotationX > 45) evenement(1)
            }

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

            textAlign(LEFT, CENTER)
            textSize(dialogSize);
            if (DEBUG) text("appuyer sur a ou z pour passer à l'étape suivante", 20, 140)



            if (deviceOrientation === 'portrait') {
                if (rotationY < -45) evenement(1)
                if (rotationY > 45) evenement(2)
            } else {
                if (rotationX < -45) evenement(2)
                if (rotationX > 45) evenement(1)
            }

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

        if (millis() - chrono > 26000) {




            moment_derniere_action = millis();
            avancement = 10
            marche.setVolume(0)
            verouiller.setVolume(0)
            heatbeat.setVolume(0)
            fin1.setVolume(0)
            fin2.setVolume(0)
            reconstruction.setVolume(0)
            ruepeur.setVolume(0)
            peur2.setVolume(0)
            debut.setVolume(0)
            hit.setVolume(0)
            run.setVolume(0)
            porte.setVolume(0)
            habits.setVolume(0)
            fete.setVolume(0)
            fete2.setVolume(0)
            agres.setVolume(0)
            amour.setVolume(0)


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
            chrono = millis()


            textSize(dialogSize);
            if (DEBUG) text("appuyer sur m pour revenir au début", 20, 140)
        }

    }

    if (avancement == 10) {
        var maintenant = millis() - chrono;
        image(video3, width / 2, height / 2, width, height)
        buttonhome.display(width / 2, height * 4.5 / 5, dialogSize * 3)
        buttonhome.over(mouseX, mouseY)
        if (buttonhome.isPressed) {
            avancement = -1;

        }
        if ((maintenant > 2600) && (maintenant < 12600)) {

            textAlign(CENTER, CENTER)
            textSize(dialogSize);
            fill(255, 255, 255);
            fill(255, 255, 255);
            textStyle(BOLD);
            textSize(dialogSize*0.8);
            text("Merci à Bérenger RECOULES", width / 4, height * 1 / 8, width / 2)
            textStyle(NORMAL);
            textSize(dialogSize * 0.7);
            text("d'avoir participer à la conception de notre projet et de nous avoir aidé à le réaliser", width / 4, height * 1.5 / 8, width / 2)
            textStyle(BOLD);
            textSize(dialogSize*0.8);
            text("Merci à Pierre COMMENGE", width / 4, height * 2.7 / 8, width / 2)
            textStyle(NORMAL);
            textSize(dialogSize * 0.7);
            text("pour son aide lors du workshop", width / 4, height * 3.2 / 8, width / 2)
            noFill();
            stroke(255)
            textStyle(BOLD);
            textSize(dialogSize);
            var txt1 = " Par Auriane POUZIN, Raphaëlle GORENBOUH "
            var txt2 = " Camille CAMPO et Bérenger RECOULES "
            line(width / 4, height * 4 / 8, width * 3 / 4, height * 4 / 8)
            text(txt1, width / 4, height * 4.5 / 8, width / 2)
            text(txt2, width / 4, height * 5 / 8, width / 2)
            line(width / 4, height * 5.5 / 8, width * 3 / 4, height * 5.5 / 8)
            textStyle(NORMAL);
            strokeWeight(1)
            text("L'Ecole de design de Nantes Atlantique  ", width / 4, height * 6 / 8, width / 2)
            text("Bachelor design d'interactivité - 2018", width / 4, height * 6.5 / 8, width / 2)
        }

        if ((maintenant > 12600) && (maintenant < 20000)) {

            textAlign(CENTER, CENTER)
            textSize(dialogSize * 0.7);
            fill(255, 255, 255);
            fill(255, 255, 255);
            text("1- vibeur_telephone.wav", width / 4, height * 0.5 / 8, width / 2)
            text("https://freesound.org/people/SpliceSound/sounds/369841/ ", width / 4, height * 0.8 / 8, width / 2)
            text("Auteur : SpliceSound", width / 4, height * 1.1 / 8, width / 2)
            text("2- touche_telephone.wav ", width / 4, height * 1.7 / 8, width / 2)
            text("https://freesound.org/people/halimturk/sounds/392634/", width / 4, height * 2 / 8, width / 2)
            text("Auteur : halimturk", width / 4, height * 2.3 / 8, width / 2)
            text("3- verouiller_d_telephone.wav", width / 4, height * 2.9 / 8, width / 2)
            text("https://freesound.org/people/thegoose09/sounds/125384/", width / 4, height * 3.2 / 8, width / 2)
            text("4- marche.wav", width / 4, height * 3.8 / 8, width / 2)
            text("https://freesound.org/people/allrealsound/sounds/161756/", width / 4, height * 4.1 / 8, width / 2)
            text("Auteur : allrealsound", width / 4, height * 4.4 / 8, width / 2)
            text("5- marche2.wav ", width / 4, height * 5 / 8, width / 2)
            text("https://freesound.org/people/Robinhood76/sounds/318900/ ", width / 4, height * 5.3 / 8, width / 2)
            text("Auteur : Robinhood76", width / 4, height * 5.6 / 8, width / 2)
            text("6- habits", width / 4, height * 6.2 / 8, width / 2)
            text("https://freesound.org/people/pfranzen/sounds/331354/", width / 4, height * 6.5 / 8, width / 2)


        }
        if ((maintenant > 20000) && (maintenant < 30000)) {

            textAlign(CENTER, CENTER)
            textSize(dialogSize * 0.7);
            fill(255, 255, 255);
            fill(255, 255, 255);
            text("7-fête.wav", width / 4, height * 0.5 / 8, width / 2)
            text("https://freesound.org/people/winsx87/sounds/152026/", width / 4, height * 0.8 / 8, width / 2)
            text("Auteur : winsx87", width / 4, height * 1.1 / 8, width / 2)
            text("8- personnebourée.wav", width / 4, height * 2.1 / 8, width / 2)
            text("https://freesound.org/people/Robinhood76/sounds/271447/", width / 4, height * 2.4 / 8, width / 2)
            text("Auteur : Robinhood76", width / 4, height * 2.7 / 8, width / 2)
            text("9- fete2.wav", width / 4, height * 3.7 / 8, width / 2)
            text("https://freesound.org/people/soundhunterjulie/sounds/395315/", width / 4, height * 4 / 8, width / 2)
            text("Auteur : soundhunterjulie", width / 4, height * 4.3 / 8, width / 2)
            text("10-streetsound.wav", width / 4, height * 5.3 / 8, width / 2)
            text("https://freesound.org/people/smsh110/sounds/346945/", width / 4, height * 5.6 / 8, width / 2)
            text("Auteur : smsh110", width / 4, height * 5.9 / 8, width / 2)

        }

        if (millis() - chrono > 30000) {

            textAlign(CENTER, CENTER)
            textSize(dialogSize * 0.7);
            fill(255, 255, 255);
            fill(255, 255, 255);
            text("11-run", width / 4, height * 0.5 / 8, width / 2)
            text("https://freesound.org/people/AlexMurphy53/sounds/328458/", width / 4, height * 0.8 / 8, width / 2)
            text("Auteur : AlexMurphy53", width / 4, height * 1.1 / 8, width / 2)
            text("12- marchecouloir", width / 4, height * 2.1 / 8, width / 2)
            text("https://freesound.org/people/Robinhood76/sounds/70914/", width / 4, height * 2.4 / 8, width / 2)
            text("Auteur:Robinhood76", width / 4, height * 2.7 / 8, width / 2)
            text("13- porte", width / 4, height * 3.7 / 8, width / 2)
            text("https://freesound.org/people/rivernile7/sounds/234244/", width / 4, height * 4 / 8, width / 2)
            text("Auteur:rivernile7", width / 4, height * 4.3 / 8, width / 2)
            text("14- agression", width / 4, height * 5.3 / 8, width / 2)
            text("https://freesound.org/people/alex_audio/sounds/179129/", width / 4, height * 5.6 / 8, width / 2)
            text("Auteur :alex_audio", width / 4, height * 5.9 / 8, width / 2)

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

function mousePressed(){
     video1.loop();
    video3.loop();
   // video4.loop();
    video5.loop();
   // video6.loop();
    video7.loop();
   // video8.loop();
    video9.loop();
    video10.loop();
    video11.loop();
    video12.loop();
    video13.loop();


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
