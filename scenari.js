function scenario0() {
    push()
    image(video1, width / 2, height / 2, width, height)
    textAlign(CENTER, CENTER);
    textSize(dialogSize);

    //Son du vibreur et de l'ambiance de la sérénité
    if (millis() - chrono < 12000) {
        if (!hit_playing) {
            hit.play();
            hit.setVolume(1)
            hit_playing = true;
        }

    }
    if (millis() - chrono > 5000) {
        if (!debut_playing) {
            debut.play();
            debut.setVolume(1);
            debut_playing = true;
        }

    }

    //Le texte apparait en fonction d'un temps que nous avons défini grâce à un chronomètre
    if (millis() - chrono > 6000) {
        stroke(255, (millis() - chrono - 6000) / 10);
        fill(255, (millis() - chrono - 6000) / 10);
        if (french) text("Pour répondre SECOUER le téléphone ", width / 2, height * 6.8 / 8);
        else text("To answer: SHAKE your phone ", width / 2, height * 6.8 / 8);
        deverouiller.display(width / 2, height * 6 / 8, animSize, animSize);
    }

    boule0();
    pop()
}


function scenario1() {
    push()
    image(video1, width / 2, height / 2, width, height)

    textAlign(CENTER, CENTER);
    textSize(dialogSize);

    boule0();

    var maintenant = millis() - chrono;

    if ((maintenant > 0) && (maintenant < 4000)) {

        if (!verouiller_playing) {
            verouiller.play();
            verouiller.setVolume(1)
            verouiller_playing = true;
        }

        textAlign(CENTER, CENTER);
        stroke(255, (millis() - chrono) / 10);
        fill(255, (millis() - chrono) / 10);
        if (french) text("SMS : “ Hey ! Tu viens à ma fête ce soir ?! ” ", width / 2, height * 6.8 / 8);
        else text("SMS: “Hey ! Are you coming to my party tonight?!” ", width / 2, height * 6.8 / 8);

    } else if ((maintenant > 4000) && (maintenant < 8000)) {

        stroke(255, 255, 255, (millis() - chrono - 4000) / 10);
        fill(255, 255, 255, (millis() - chrono - 4000) / 10);
        if (french) text("SMS : “ Alors tu viens ou pas ? ” ", width / 2, height * 6.8 / 8);
        else text("SMS: “So, are you coming or not?” ", width / 2, height * 6.8 / 8);
    }

    //le texte de gauche (choix A) apparaît avant le texte de droite (choix B)
    else if (maintenant > 8000) {

        if (millis() - chrono > 9000) {

            fairechoix.display(width / 2, height * 6.8 / 8, animSize * 2, animSize);

            if (!habits_playing) {
                habits.play();
                habits.setVolume(1)
                habits_playing = true;
            }

            textAlign(RIGHT, CENTER);
            stroke(255, 255, 255, (millis() - (chrono + 9000)) / 10);
            fill(255, 255, 255, (millis() - (chrono + 9000)) / 10);
            if (french) text("Chouette ! je vais pouvoir mettre ma nouvelle jupe ", width * 1 / 12, height * 6.8 / 8, width * 4 / 12);
            else text("Great ! I'm going to wear my new skirt ", width * 1 / 12, height * 6.8 / 8, width * 4 / 12);
            stroke(255, 255, 255, (millis() - (chrono + 10000)) / 10);
            fill(255, 255, 255, (millis() - (chrono + 10000)) / 10);
            textAlign(LEFT, CENTER);
            if (french) text("Rien de plus confortable qu’un vieux jean pour passer une bonne soirée ", width * 7 / 12, height * 6.8 / 8, width * 4 / 12);
            else text("Nothing better than a good old pair of jeans to enjoy a good party ", width * 7 / 12, height * 6.8 / 8, width * 4 / 12);
        }

    }

    pop()
}


function scenario2() {
    push()
    var maintenant = millis() - chrono;
    textSize(dialogSize);

    if ((maintenant > 0) && (maintenant < 4000)) {

        image(video2, width / 2, height / 2, width, height)

        if (millis() - chrono < 4000) {
            if (!porte_playing) {
                porte.play();
                porte.setVolume(1)
                porte_playing = true;
            }
        }

        stroke(255, 255, 255, (millis() - chrono) / 10);
        fill(255, 255, 255, (millis() - chrono) / 10);
        textAlign(CENTER, BOTTOM);
        if (french) text("Je suis prête ! J’y vais ! ", width / 2, height * 6.8 / 8);
        else text("I’m ready! Let’s go! ", width / 2, height * 6.8 / 8);

        //video3.loop();
        boule0();

    }


    if ((maintenant > 4000) && (maintenant < 8000)) {

        image(video3, width / 2, height / 2, width, height)

        if (millis() - chrono > 4000) {

            if (!marche_playing) {
                marche.play();
                marche.setVolume(1)
                marche_playing = true;
            }
            if (!ruepeur_playing) {
                ruepeur.loop(); // TODO baisser le volume de ce son manuellement
                ruepeur.setVolume(0.7);
                ruepeur_playing = true;
            }

            //ruepeur.setVolume(1);
            debut.setVolume(0.6);

        }

        // porte.stop();


        boule1();
        textAlign(CENTER, CENTER)
        stroke(255, 255, 255, (millis() - chrono - 4000) / 10);
        fill(255, 255, 255, (millis() - chrono - 4000) / 10);
        if (french) text("Je marche tranquillement dans la rue quand soudain un homme m’interpelle en me sifflant ", width / 4, height * 6.8 / 8, width / 2);
        else text("I walk peacefully in the street when suddenly a man whistles at me ", width / 4, height * 6.8 / 8, width / 2);

    }
    if (maintenant > 8000) {

        image(video3, width / 2, height / 2, width, height)
        boule1();
        if (millis() - chrono > 100) {
            ruepeur.setVolume(1.2);
        }

        if (millis() - chrono > 9000) {


            fairechoix.display(width / 2, height * 6.8 / 8, animSize * 2, animSize);
            stroke(255, 255, 255, (millis() - chrono - 9000) / 10);
            fill(255, 255, 255, (millis() - chrono - 9000) / 10);

            textAlign(RIGHT, CENTER);
            if (french) text("Je continue mon chemin l’air de rien ", width * 1 / 12, height * 6.8 / 8, width * 4 / 12);
            else text("I continue on my way like nothing ever happened ", width * 1 / 12, height * 6.8 / 8, width * 4 / 12);

        }
        if (millis() - chrono > 10000) {

            stroke(255, 255, 255, (millis() - chrono - 10000) / 10);
            fill(255, 255, 255, (millis() - chrono - 10000) / 10);
            textAlign(LEFT, CENTER);
            if (french) text("Je me retourne pour voir qui c'est ", width * 7 / 12, height * 6.8 / 8, width * 4 / 12);
            else text("I look back to see who it is ", width * 7 / 12, height * 6.8 / 8, width * 4 / 12);

        }

    }

    pop()
}


function scenario3() {
    push()
    textSize(dialogSize);
    image(video3, width / 2, height / 2, width, height)
    boule2();
    if (millis() - chrono < 4000) {
        if (!run_playing) {
            run.loop();
            run.setVolume(1)
            debut.setVolume(0.8);
            marche.setVolume(0)
            run_playing = true;
        }
    }
    if (millis() - chrono < 6000) {
        //marche.stop();

        // TODO baisser le volume de ce son manuellement
        stroke(255, 255, 255, (millis() - chrono) / 10);
        fill(255, 255, 255, (millis() - chrono) / 10);
        textAlign(CENTER, CENTER);
        if (french) text("“Hé t’as pas un 06 ? ” ...  ", width / 4, height * 6.8 / 8, width / 2);
        else text("“Hey do you have a 06?”... ", width / 4, height * 6.8 / 8, width / 2);
    }
    var maintenant = millis() - chrono;
    if ((maintenant > 6000) && (maintenant < 11000)) {

        debut.setVolume(0.4);
        ruepeur.setVolume(1.2);

        stroke(255, 255, 255, (millis() - chrono - 6000) / 10);
        fill(255, 255, 255, (millis() - chrono - 6000) / 10);
        textAlign(CENTER, CENTER);
        if (french) text("Je ne lui répond pas et accélère le pas. \n J’ai peur qu’il me suive... ", width / 4, height * 6.8 / 8, width / 2);
        else text("I don’t answer him and I speed up. \n I am afraid he'll follow me... ", width / 4, height * 6.8 / 8, width / 2);
    }

    textAlign(CENTER, CENTER)
    stroke(255)
    fill(255)
    if (millis() - chrono > 11000) {
        if (french) text("Pour marcher plus vite SECOUER le téléphone ", width / 2, height * 6.8 / 8);
        else text("To walk faster: SHAKE the smartphone ", width / 2, height * 6.8 / 8);
    }
    if (millis() - chrono > 11000) marcherue.display(width / 2, height * 6 / 8, animSize, animSize);

    pop()
}



function scenario4() {
    push()

    textSize(dialogSize);

    /*
    La boule joie est composée de plusieurs boules,
     une grosse au milieu et d'autre plus petites autour
     */

    if (millis() - chrono < 5000) {
        //porte.stop();
        if (!fete_playing) {
            fete.loop();
            fete.setVolume(1)
            fete_playing = true;
            debut.setVolume(0.5);
        }
    }
    var maintenant = millis() - chrono;
    if ((maintenant > 0) && (maintenant < 2200)) {
        image(video4, width / 2, height / 2, width, height)
    } else {
        image(video5, width / 2, height / 2, width, height)
    }
    boule3(); // boule principale
    boulez(); // petite boule autour (haut - gauche)
    boulef(); // petite boule autour (haut - droit)
    bouler(); // petite boule autour (bas - droit)
    boulet(); // petite boule autour (bas - gauche)
    if ((maintenant > 0) && (maintenant < 5000)) {

        //boule3();
        //boulez();
        //boulef();
        //bouler();
        //boulet();

        //ruepeur.stop();
        textAlign(CENTER, CENTER);
        stroke(255, 255, 255, (millis() - chrono - 1) / 10);
        fill(255, 255, 255, (millis() - chrono - 1) / 10);
        if (french) text("J’arrive enfin chez mon amie, la fête bat déjà son plein.", width / 4, height * 6.8 / 8, width / 2);
        else text("I finally arrive to my friend’s home, the party is already at its best.", width / 4, height * 6.8 / 8, width / 2);
    }
    if ((maintenant > 6000) && (maintenant < 10000)) {
        textAlign(CENTER, CENTER);
        stroke(255, 255, 255, (millis() - chrono - 6000) / 10);
        fill(255, 255, 255, (millis() - chrono - 6000) / 10);
        if (french) text("Je me faufile jusqu’au bar en saluant des amis sur le passage. ", width / 4, height * 6.8 / 8, width / 2);
        else text("I sneak into the bar, greeting friends on the way. ", width / 4, height * 6.8 / 8, width / 2);
    }
    if (millis() - chrono > 10000) {
        //boule3();
        //boulez();
        //boulef();
        //bouler();
        //boulet();
        stroke(255, 255, 255, (millis() - chrono - 10000) / 10);
        fill(255, 255, 255, (millis() - chrono - 10000) / 10);
        //    textFont(police, 15);
        textAlign(CENTER, CENTER);
        if (french) text("pour danser SECOUER le téléphone ", width / 2, height * 6.8 / 8);
        else text("To dance: SHAKE the smartphone ", width / 2, height * 6.8 / 8);
        marcherue.display(width / 2, height * 6 / 8, animSize, animSize);
    }
    pop()
}


function scenario5() {
    push()
    textSize(dialogSize);
    // image(video4, width / 2, height / 2, width, height)
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
        if (!amour_playing) {
            amour.loop();
            amour_playing = true;
            amour.setVolume(0.7); // TODO baisser le volume de ce son manuellement
            debut.setVolume(0);
        }
    }
    if (millis() - chrono < 6000) {
        image(video5, width / 2, height / 2, width, height)
    } else {
        image(video6, width / 2, height / 2, width, height)
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
        if (french) text("Une personne de la soirée arrive vers moi, et me propose de danser ", width / 4, height * 6.8 / 8, width / 2);
        else text("Someone at the party comes to me, and proposes me to dance ", width / 4, height * 6.8 / 8, width / 2);
    }

    if (millis() - chrono > 7000) {
        image(video6, width / 2, height / 2, width, height)
        boule4();
        boulea();
        bouleb();
        boulec();
        bouled();
        if (millis() - chrono > 9000) {

            if (!amour_playing) {
                amour.play();
                amour_playing = true;
                debut.setVolume(0);
            }
        }

        stroke(255, 255, 255, (millis() - chrono - 7000) / 10);
        fill(255, 255, 255, (millis() - chrono - 7000) / 10);
        textAlign(RIGHT, CENTER);
        if (french) text("Par politesse j’accepte de danser avec lui ", width * 1 / 12, height * 6.8 / 8, width * 4 / 12);
        else text("Out of courtesy I agree to dance with him ", width * 1 / 12, height * 6.8 / 8, width * 4 / 12);
        fairechoix.display(width / 2, height * 6.8 / 8, animSize * 2, animSize);

    }

    if (millis() - chrono > 8000) {

        textAlign(LEFT, CENTER);
        stroke(255, 255, 255, (millis() - chrono - 8000) / 10);
        fill(255, 255, 255, (millis() - chrono - 8000) / 10);
        if (french) text("Je lui propose plutôt de discuter autour d’un verre ", width * 7 / 12, height * 6.8 / 8, width * 4 / 12);
        else text("I suggest instead to discuss over a drink ", width * 7 / 12, height * 6.8 / 8, width * 4 / 12);
    }

    pop()
}


function scenario6() {
    push()
    textSize(dialogSize);
    // background(0);
    var maintenant = millis() - chrono;
    image(video7, width / 2, height / 2, width, height)
    if (maintenant > 1 && maintenant < 10000) {
        if (!peur2_playing) {
            peur2.play();
            peut2.setVolume(1)
            peur2_playing = true;
        }
        if (!heatbeat_playing) {
            heatbeat.loop();
            heartbeat.setVolume(1)
            heatbeat_playing = true;
            amour.setVolume(0.2); // // TODO baisser le volume de ce son manuellement
        }


    } else {
        fete.setVolume(0);
        //fete.stop();
        debut.setVolume(0)
        amour.setVolume(0);
        //  amour.stop();
    }

    if ((maintenant > 0) && (maintenant < 5000)) {
        boule4();
        boulea();
        bouleb();
        boulec();
        bouled();
        if (millis() - chrono < 10000)
            // fete.setVolume(0);
            //fete.stop();
            stroke(255, 255, 255, (millis() - chrono) / 10);
        fill(255, 255, 255, (millis() - chrono) / 10);
        textAlign(CENTER, CENTER);

        if (french) text("Il me dit quelque chose mais le volume sonore de la fête augmente et je ne l’entend pas.", width / 4, height * 6.8 / 8, width / 2);
        else text("He tells me something but sound level of the party increases and I do not hear him.", width / 4, height * 6.8 / 8, width / 2);
        amour.setVolume(0.5); // // TODO baisser le volume de ce son manuellement
    }




    //var maintenant = millis() - chrono;
    if ((maintenant > 5000) && (maintenant < 10000)) {
        boule4();
        boulea();
        bouleb();
        boulec();
        bouled();
        if (millis() - chrono < 10000)
            //fete.stop();
            stroke(255, 255, 255, (millis() - chrono - 5000) / 10);
        fill(255, 255, 255, (millis() - chrono - 5000) / 10);
        textAlign(CENTER, CENTER);
        if (french) text("Il m’attire vers une pièce à l’étage.\n Je me laisse entraîner. ", width / 4, height * 6.8 / 8, width / 2);
        else text("He attracts me to a room upstairs.\n  I let myself be dragged into it. ", width / 4, height * 6.8 / 8, width / 2);

    }

    if ((maintenant > 10000) && (maintenant < 16000)) {
        peur2.setVolume(1.3); // TODO augmenter le volume de ce son manuellement

        boule5();
        textAlign(CENTER, CENTER);
        stroke(255, 255, 255, (millis() - chrono - 10000) / 10);
        fill(255, 255, 255, (millis() - chrono - 10000) / 10);
        if (french) text("On entre dans une chambre, il ferme la porte derrière nous. Je suis un peu mal à l’aise.", width / 4, height * 6.8 / 8, width / 2);
        else text("We enter a room, he closes the door behind us. I am a little uncomfortable.", width / 4, height * 6.8 / 8, width / 2);

    }

    if ((maintenant > 16000) && (maintenant < 20000)) {
        amour.setVolume(0);

        boule5();
        textAlign(CENTER, CENTER);
        stroke(255, 255, 255, (millis() - chrono - 16000) / 10);
        fill(255, 255, 255, (millis() - chrono - 16000) / 10);
        if (french) text("Que dois-je faire ? \n Il tente de m’embrasser. ", width / 4, height * 6.8 / 8, width / 2);
        else text("What should I do ? He tries to kiss me. ", width / 4, height * 6.8 / 8, width / 2);

    }


    if (maintenant > 20000) {
        amour.setVolume(0);

        boule5();
        if (millis() - chrono > 21000) {
            stroke(255, 255, 255, (millis() - chrono - 21000) / 10);
            fill(255, 255, 255, (millis() - chrono - 21000) / 10);
            textAlign(RIGHT, CENTER);
            if (french) text("Je le repousse ", width * 1 / 12, height * 6.8 / 8, width * 4 / 12);
            else text("I reject him ", width * 1 / 12, height * 6.8 / 8, width * 4 / 12);
        }
        if (millis() - chrono > 21000) {
            //boule5();
            stroke(255, 255, 255, (millis() - chrono - 22000) / 10);
            fill(255, 255, 255, (millis() - chrono - 22000) / 10);
            textAlign(LEFT, CENTER);
            if (french) text("Je suis surprise mais le laisse faire ", width * 7 / 12, height * 6.8 / 8, width * 4 / 12);
            else text("I'm surprised but let him go ", width * 7 / 12, height * 6.8 / 8, width * 4 / 12);
        }
        if (millis() - chrono > 21000) fairechoix.display(width / 2, height * 6.8 / 8, animSize * 2, animSize);



    }

    pop()
}


function scenario7() {
    push()
    image(video9, width / 2, height / 2, width, height)
    textSize(dialogSize);

    boule5();
    if (millis() - chrono < 4000) {

        if (!agres_playing) {
            agres.play();
            agres.setVolume(1)
            agres_playing = true;
        }
    }
    if (millis() - chrono < 8000) {
        stroke(255, 255, 255, (millis() - chrono) / 10);
        fill(255, 255, 255, (millis() - chrono) / 10);
        textAlign(CENTER, CENTER);
        if (french) text("Il est insistant et commence à avoir des gestes déplacés. ", width / 4, height * 6.8 / 8, width / 2);
        else text("He is insistent and begins to have inappropriate gestures. ", width / 4, height * 6.8 / 8, width / 2);
    }
    if (millis() - chrono > 8000) {

        textAlign(CENTER, CENTER)
        stroke(255)
        fill(255)
        if (french) text("pour se débattre SECOUER VIGOUREUSEMENT le téléphone ", width / 4, height * 6.8 / 8, width / 2);
        else text("To struggle: SHAKE VIGOROUSLY the smartphone ", width / 4, height * 6.8 / 8, width / 2);

    }
    if (millis() - chrono > 8000) agression.display(width / 2, height * 6 / 8, animSize, animSize);
    pop()
}


function scenario8() {
    push()

    textSize(dialogSize);
    // background(0);
    if (millis() - chrono < 5000) {
        image(video9, width / 2, height / 2, width, height)
        if (!fin1_playing) {
            fin1.play();
            fin.setVolume(1)
            fin1_playing = true;
            peur2.setVolume(0.7); // TODO baisser le volume de ce son manuellement
            heatbeat.setVolume(0);
        }
    }
    if (millis() - chrono > 5000) {
        image(video10, width / 2, height / 2, width, height)

    }
    var maintenant = millis() - chrono;
    if ((maintenant > 0) && (maintenant < 5000)) {
        boule6();
        textAlign(CENTER, CENTER);
        stroke(255, 255, 255, (millis() - chrono) / 10);
        fill(255, 255, 255, (millis() - chrono) / 10);
        if (french) text("Mais il continue, il est allé trop loin… ", width / 4, height * 6.8 / 8, width / 2);
        else text("But he continues, he went too far… ", width / 4, height * 6.8 / 8, width / 2);
    }

    if (millis() - chrono > 5000) {


        textAlign(CENTER, CENTER);
        stroke(255, 255, 255, 255);
        fill(255, 255, 255, 255);

        if (millis() - chrono > 8000) {
            image(video11, width / 2, height / 2, width, height)
            if (french) text("Cacher le capteur de luminosité du téléphone ", width / 2, height * 6.8 / 8);
            else text("Hide the light sensor of the smartphone ", width / 2, height * 6.8 / 8);
        }
        if (millis() - chrono > 8000) lumiere.display(width / 2, height * 6 / 8, animSize * 3 / 4, animSize * 1.5);
        boule6();
    }

    pop()
}


function scenario9() {
    push()
    textSize(dialogSize);
    //background(0);

    var maintenant = millis() - chrono;
    if (maintenant < 18000) {
        image(video12, width / 2, height / 2, width, height)
    }


    if ((maintenant > 0) && (maintenant < 4000)) {
        if (!fin2_playing) {
            fin2.play();
            fin2.setVolume(1)
            fin2_playing = true;
        }
        boule7();
    }
    if ((maintenant > 4000) && (maintenant < 8000)) {
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

    if ((maintenant > 10000) && (maintenant < 18000)) {
        boule8();
    }
    if (maintenant > 18000) {
        image(video12, width / 2, height / 2, width, height)
        boule0bis();
        boule10();
        textAlign(CENTER, CENTER);
        stroke(255, 255, 255, (millis() - chrono - 18000) / 10);
        fill(255, 255, 255, (millis() - chrono - 18000) / 10);
        if (french) text("62 000 femmes sont victimes, chaque année, de viol et de tentative de viol. ", width / 4, height * 6.8 / 8, width / 2);
        else text("62,000 women are victims of rape and attempt of sexual assault each year. ", width / 4, height * 6.8 / 8, width / 2);
    }

    pop()
}
