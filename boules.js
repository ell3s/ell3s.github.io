/*
Tableau contenant les différentes boules représentant les émotions.

 Chaque émotion est composée d'une boule principale qui est placé au centre de la fenêtre.
 boule0 = sérénité
 boule1 = surprise
 boule2 = enervement
 boule3 + boulez + boulef + bouler + boulet = joie
 boule4 + boulea + bouleb + boulec + bouled = séduction
 boule5 = stress
 boule6 = peur
 boule7 = explosion partie 1
 boule8 = néant
 boule10 = coquille
 boule0 + boule10 = reconstruction
 boule11 = explosion partie 2

 La boule joie et sérénité sont composées de plusieurs boules,
 une principale au centre et quatre autres boules, plus petites, gravitant autour d'elle.

 ***** Construction des boules *****

 L'outil ellipse étant trop statique au niveau de sa forme,
 nous avons voulu créé une forme qui se déforme plus ou moins.
 Pour cela nous avons créé une forme composé de povars.
 Grâce à un compteur, nous avons définit des valeurs différentes pour
 un povar sur deux de la forme, donnant un effet plus de bulle que d'ellipse.

 Random = les povars bougent aléatoirement, indépendamment les uns des autres
 Noise = les povars bougent aléatoirement mais en prennant en compte les valeurs
 des povars qui leurs sont proches pour une meilleur fluidité
 Nous avons appliqué la notion de Noise aux coordonnées de chaque povar pour rendre
 notre boule vivante. Un mode random n'étant pas toujours adapté.

 Avec l'outil curveTightness nous avons rendu cette forme plus ou moins
 piquante ou arrondie.

 Grâce à un FrameRate et au Noise, nous avons pu changer le rythme des boules,
 rendant certaines plus rapidew et nerveusew (stress, peur, explosion...),
 et d'autres plus lentes, calmes é reposante (sérénité, danse, néant,
 */



var counter;

//coordonnées de 3 povars de la forme permettant de fermer la forme
var xc1 = 0;
var yc1 = 0;
var xc2 = 0;
var yc2 = 0;
var xc3 = 0;
var yc3 = 0;

var xoff = 0;

//************************************************************************************
/* BOULE 0 = SERENITE
 Vitesse : lente
 Contour : courbe
 Taille : Moyenne
 */

function boule0() {
  stroke(255);
  noFill();
  beginShape();
  curveTightness(0);
  counter = 0;

  xoff = xoff + .005;
  for (var angle = 0; angle < 360; angle += 30) {

    var xc = 0;
    var yc = 0;

    if (counter%2 == 0) { //coordonées des povars pairs (counter%2)
      xc = width/2 + (125 + noise(xoff, angle/10, 80) * 175) * cos(radians(angle));
      yc = height*3/8 + (125 + noise(xoff, angle/10, 80) * 175) * sin(radians(angle));
    } else { //coordonées des povars impairs
      xc = width/2 + (125 + noise(xoff/2, angle/10, 100) * 155) * cos(radians(angle));
      yc = height*3/8 + (125 + (noise(xoff/2, angle/10, 100) * 155))  * sin(radians(angle));
    }

    // cette partie permet de fermer la forme grâce au trois premiers points la composant
    curveVertex(xc, yc);
    if (counter == 0) {
      xc1 = xc;
      yc1 = yc;
    } else if (counter == 1) {
      xc2 = xc;
      yc2 = yc;
    } else if (counter == 2) {
      xc3 = xc;
      yc3 = yc;
    }
    counter++;
  }
  curveVertex(xc1, yc1);
  curveVertex(xc2, yc2);
  curveVertex(xc3, yc3);

  endShape();
}

//************************************************************************************
/* BOULE 1 = SURPRISE
 Vitesse : moyen
 Contour : courbe
 Taille : Moyenne
 */

function boule1() {
  stroke(255);
  noFill();
  beginShape();
  curveTightness(0);
  counter = 0;

  xoff = xoff + .5;
  for (var angle = 0; angle < 360; angle += 30) {

    var xc = 0;
    var yc = 0;


   if (counter%2 == 0) {
      xc =  width/2  + (125 + noise(xoff, angle/10, 80) * 125) * cos(radians(angle));
      yc = height*3/8 + (125 + noise(xoff, angle/10, 80) * 125) * sin(radians(angle));
    } else {
      xc =  width/2  + (125 + noise(xoff/2, angle/10, 100) * 125) * cos(radians(angle));
      yc = height*3/8 + (125 + (noise(xoff/2, angle/10, 100) * 125))  * sin(radians(angle));
    }


    curveVertex(xc, yc);
    if (counter == 0) {
      xc1 = xc;
      yc1 = yc;
    } else if (counter == 1) {
      xc2 = xc;
      yc2 = yc;
    } else if (counter == 2) {
      xc3 = xc;
      yc3 = yc;
    }
    counter++;
  }
  curveVertex(xc1, yc1);
  curveVertex(xc2, yc2);
  curveVertex(xc3, yc3);

  endShape();
}


//************************************************************************************
/* BOULE 2 = ENERVEMENT
 Vitesse : moyen rapide
 Contour : courbe
 Taille : Moyenne
 */

function boule2() {
  stroke(255);
  noFill();
  beginShape();
  curveTightness(0);
  counter = 0;

  xoff = xoff + .25;
  for (var angle = 0; angle < 360; angle = angle + 5) {

    var xc = 0, yc = 0;


    if (counter%2 == 0) {

      xc = width/2  + noise(xoff, angle/10, 100) * 300 * cos(radians(angle));
      yc = height*3/8 + noise(xoff, angle/10, 100) * 300 * sin(radians(angle));
    } else {
      xc = width/2  + noise(xoff/2, angle/10, 100) * 300 * cos(radians(angle));
      yc = height*3/8 + noise(xoff/2, angle/10, 100) * 300  * sin(radians(angle));
    }

    curveVertex(xc, yc);
    if (counter == 0) {
      xc1 = xc;
      yc1 = yc;
    } else if (counter == 1) {
      xc2 = xc;
      yc2 = yc;
    } else if (counter == 2) {
      xc3 = xc;
      yc3 = yc;
    }
    counter++;
  }
  curveVertex(xc1, yc1);
  curveVertex(xc2, yc2);
  curveVertex(xc3, yc3);

  endShape();
}


//************************************************************************************
/* BOULE 3 = JOIE
 Vitesse : moyen
 Contour : courbe
 Taille : Moyenne
 */

function boule3() {
  stroke(255);
  noFill();
  beginShape();
  curveTightness(0);
  counter = 0;

  xoff = xoff + .005;
  for (var angle = 0; angle < 360; angle += 28) {

    var xc = 0, yc = 0;


    if (counter%2 == 0) {
      xc = width/2 + (125 + noise(xoff, angle/10, 80) * 25) * cos(radians(angle));
      yc = height*3/8 + (125 + noise(xoff, angle/10, 80) * 25) * sin(radians(angle));
    } else {
      xc = width/2 + (125 + noise(xoff/2, angle/10, 100) * 23) * cos(radians(angle));
      yc = height*3/8 + (125 + (noise(xoff/2, angle/10, 100) * 23))  * sin(radians(angle));
    }

    curveVertex(xc, yc);
    if (counter == 0) {
      xc1 = xc;
      yc1 = yc;
    } else if (counter == 1) {
      xc2 = xc;
      yc2 = yc;
    } else if (counter == 2) {
      xc3 = xc;
      yc3 = yc;
    }
    counter++;
  }
  curveVertex(xc1, yc1);
  curveVertex(xc2, yc2);
  curveVertex(xc3, yc3);

  endShape();
}

//************************************************************************************
/* PETITE BOULE 1 joie
 Vitesse : moyen
 Contour : courbe
 Taille : petite
 Placement : haut gauche
 */

function boulez() {
  stroke(255);
  noFill();
  beginShape();
  curveTightness(0);
  counter = 0;

  xoff = xoff + .006;
  for (var angle = 0; angle < 360; angle += 95) {

    var xc = 0, yc = 0;


    if (counter%2 == 0) {
      xc = width/3 + (10 + noise(xoff, angle/10, 80) * 6) * cos(radians(angle));
      yc = height*1.5/12 + (10 + noise(xoff, angle/10, 80) * 6) * sin(radians(angle));
    } else {
      xc = width/3 + (10 + noise(xoff/2, angle/10, 100) * 3) * cos(radians(angle));
      yc = height*1.5/12 + (10 + (noise(xoff/2, angle/10, 100) * 3))  * sin(radians(angle));
    }

    curveVertex(xc, yc);
    if (counter == 0) {
      xc1 = xc;
      yc1 = yc;
    } else if (counter == 1) {
      xc2 = xc;
      yc2 = yc;
    } else if (counter == 2) {
      xc3 = xc;
      yc3 = yc;
    }
    counter++;
  }
  curveVertex(xc1, yc1);
  curveVertex(xc2, yc2);
  curveVertex(xc3, yc3);

  endShape();
}


//************************************************************************************
/* PETITE BOULE 2 joie
 Vitesse : moyen
 Contour : courbe
 Taille : petite
 Placement : haut droit
 */

function boulef() {
  stroke(255);
  noFill();
  beginShape();
  curveTightness(0);
  counter = 0;

  xoff = xoff + .006;
  for (var angle = 0; angle < 360; angle += 80) {

    var xc = 0, yc = 0;


    if (counter%2 == 0) {
      xc = width*2/3 + (12 + noise(xoff, angle/10, 80) * 20) * cos(radians(angle));
      yc = height*1.5/12 + (12 + noise(xoff, angle/10, 80) * 20) * sin(radians(angle));
    } else {
      xc = width*2/3 + (12 + noise(xoff/2, angle/10, 100) * 12) * cos(radians(angle));
      yc = height*1.5/12 + (12+ (noise(xoff/2, angle/10, 100) * 12))  * sin(radians(angle));
    }

    curveVertex(xc, yc);
    if (counter == 0) {
      xc1 = xc;
      yc1 = yc;
    } else if (counter == 1) {
      xc2 = xc;
      yc2 = yc;
    } else if (counter == 2) {
      xc3 = xc;
      yc3 = yc;
    }
    counter++;
  }
  curveVertex(xc1, yc1);
  curveVertex(xc2, yc2);
  curveVertex(xc3, yc3);

  endShape();
}



//************************************************************************************
/* PETITE BOULE 3 joie
 Vitesse : moyen
 Contour : courbe
 Taille : petite
 Placement : bas gauche
 */

function boulet() {
  stroke(255);
  noFill();
  beginShape();
  curveTightness(0);
  counter = 0;

  xoff = xoff + .006;
  for (var angle = 0; angle < 360; angle += 80) {

    var xc = 0, yc = 0;


    if (counter%2 == 0) {
      xc = width/3 + (10 + noise(xoff, angle/10, 80) * 6) * cos(radians(angle));
      yc = height*1.7/3 + (10 + noise(xoff, angle/10, 80) * 6) * sin(radians(angle));
    } else {
      xc = width/3 + (10 + noise(xoff/2, angle/10, 100) * 3) * cos(radians(angle));
      yc = height*1.7/3 + (10 + (noise(xoff/2, angle/10, 100) * 3))  * sin(radians(angle));
    }

    curveVertex(xc, yc);
    if (counter == 0) {
      xc1 = xc;
      yc1 = yc;
    } else if (counter == 1) {
      xc2 = xc;
      yc2 = yc;
    } else if (counter == 2) {
      xc3 = xc;
      yc3 = yc;
    }
    counter++;
  }
  curveVertex(xc1, yc1);
  curveVertex(xc2, yc2);
  curveVertex(xc3, yc3);

  endShape();
}


//************************************************************************************
/* PETITE BOULE 4 joie
 Vitesse : moyen
 Contour : courbe
 Taille : petite
 Placement : bas droit
 */

function bouler() {
  stroke(255);
  noFill();
  beginShape();
  curveTightness(0);
  counter = 0;

  xoff = xoff + .006;
  for (var angle = 0; angle < 360; angle += 85) {

    var xc = 0, yc = 0;


    if (counter%2 == 0) {
      xc = width*2/3 + (10 + noise(xoff, angle/10, 80) * 12) * cos(radians(angle));
      yc = height*1.7/3 + (10 + noise(xoff, angle/10, 80) * 12) * sin(radians(angle));
    } else {
      xc = width*2/3 + (10 + noise(xoff/2, angle/10, 100) * 6) * cos(radians(angle));
      yc = height*1.7/3 + (10 + (noise(xoff/2, angle/10, 100) * 6))  * sin(radians(angle));
    }

    curveVertex(xc, yc);
    if (counter == 0) {
      xc1 = xc;
      yc1 = yc;
    } else if (counter == 1) {
      xc2 = xc;
      yc2 = yc;
    } else if (counter == 2) {
      xc3 = xc;
      yc3 = yc;
    }
    counter++;
  }
  curveVertex(xc1, yc1);
  curveVertex(xc2, yc2);
  curveVertex(xc3, yc3);

  endShape();
}




//************************************************************************************
/* BOULE 4 = SÉDUCTION
 Vitesse : moyen rapide
 Contour : courbe
 Taille : Moyenne
 */

function boule4() {
  stroke(255);
  noFill();
  beginShape();
  curveTightness(0);
  counter = 0;

  xoff = xoff + .005;
  for (var angle = 0; angle < 360; angle += 30) {

    var xc = 0, yc = 0;


    if (counter%2 == 0) {
      xc = width/2 + (100 + noise(xoff, angle/10, 80) * 140) * cos(radians(angle));
      yc = height*3/8 + (100 + noise(xoff, angle/10, 80) * 140) * sin(radians(angle));
    } else {
      xc = width/2 + (100 + noise(xoff/2, angle/10, 100) * 120) * cos(radians(angle));
      yc = height*3/8 + (100 + (noise(xoff/2, angle/10, 100) * 120))  * sin(radians(angle));
    }

    curveVertex(xc, yc);
    if (counter == 0) {
      xc1 = xc;
      yc1 = yc;
    } else if (counter == 1) {
      xc2 = xc;
      yc2 = yc;
    } else if (counter == 2) {
      xc3 = xc;
      yc3 = yc;
    }
    counter++;
  }
  curveVertex(xc1, yc1);
  curveVertex(xc2, yc2);
  curveVertex(xc3, yc3);

  endShape();
}

//************************************************************************************
/* PETITE BOULE 1 séduction
 Vitesse : moyen rapide
 Contour : courbe
 Taille : petite
 Placement : haut gauche
 */

function boulea() {
  stroke(255);
  noFill();
  beginShape();
  curveTightness(0);
  counter = 0;

  xoff = xoff + .00000005;
  for (var angle = 0; angle < 360; angle += 67) {

    var xc = 0, yc = 0;


    if (counter%2 == 0) {
      xc = width/3 + (15 + noise(xoff, angle/1, 80) * 55) * cos(radians(angle));
      yc = height*1.5/12 + (15 + noise(xoff, angle/1, 80) * 55) * sin(radians(angle));
    } else {
      xc = width/3 + (15 + noise(xoff/.2, angle/1, 102) * 35) * cos(radians(angle));
      yc = height*1.5/12 + (15 + (noise(xoff/.2, angle/1, 107) * 35))  * sin(radians(angle));
    }

    curveVertex(xc, yc);
    if (counter == 0) {
      xc1 = xc;
      yc1 = yc;
    } else if (counter == 1) {
      xc2 = xc;
      yc2 = yc;
    } else if (counter == 2) {
      xc3 = xc;
      yc3 = yc;
    }
    counter++;
  }
  curveVertex(xc1, yc1);
  curveVertex(xc2, yc2);
  curveVertex(xc3, yc3);

  endShape();
}

//************************************************************************************
/* PETITE BOULE 2 séduction
 Vitesse : moyen rapide
 Contour : courbe
 Taille : petite
 Placement : haut droit
 */

function bouleb() {
  stroke(255);
  noFill();
  beginShape();
  curveTightness(0);
  counter = 0;

  xoff = xoff + .00000005;
  for (var angle = 0; angle < 360; angle += 60) {

    var xc = 0, yc = 0;


    if (counter%2 == 0) {
      xc = width*2/3 + (10 + noise(xoff, angle/1, 80) * 50) * cos(radians(angle));
      yc = height*1.5/12 + (10 + noise(xoff, angle/1, 80) * 50) * sin(radians(angle));
    } else {
      xc = width*2/3 + (10 + noise(xoff/.2, angle/1, 100) * 30) * cos(radians(angle));
      yc = height*1.5/12 + (10 + (noise(xoff/.2, angle/1, 100) * 30))  * sin(radians(angle));
    }

    curveVertex(xc, yc);
    if (counter == 0) {
      xc1 = xc;
      yc1 = yc;
    } else if (counter == 1) {
      xc2 = xc;
      yc2 = yc;
    } else if (counter == 2) {
      xc3 = xc;
      yc3 = yc;
    }
    counter++;
  }
  curveVertex(xc1, yc1);
  curveVertex(xc2, yc2);
  curveVertex(xc3, yc3);

  endShape();
}


//************************************************************************************
/* PETITE BOULE 3 séduction
 Vitesse : moyen rapide
 Contour : courbe
 Taille : petite
 Placement : bas droit
 */

function boulec() {
  stroke(255);
  noFill();
  beginShape();
  curveTightness(0);
  counter = 0;

  xoff = xoff + .00000005;
  for (var angle = 0; angle < 360; angle += 56) {

    var xc = 0, yc = 0;


    if (counter%2 == 0) {
      xc = width/3 + (17 + noise(xoff, angle/1, 80) * 55) * cos(radians(angle));
      yc = height*1.7/3 + (17 + noise(xoff, angle/1, 80) * 55) * sin(radians(angle));
    } else {
      xc = width/3 + (15 + noise(xoff/.2, angle/1, 102) * 35) * cos(radians(angle));
      yc = height*1.7/3 + (15 + (noise(xoff/.2, angle/1, 107) * 35))  * sin(radians(angle));
    }

    curveVertex(xc, yc);
    if (counter == 0) {
      xc1 = xc;
      yc1 = yc;
    } else if (counter == 1) {
      xc2 = xc;
      yc2 = yc;
    } else if (counter == 2) {
      xc3 = xc;
      yc3 = yc;
    }
    counter++;
  }
  curveVertex(xc1, yc1);
  curveVertex(xc2, yc2);
  curveVertex(xc3, yc3);

  endShape();
}

//************************************************************************************
/* PETITE BOULE 4 séduction
 Vitesse : moyen rapide
 Contour : courbe
 Taille : petite
 Placement : bas gauche
 */

function bouled() {
  stroke(255);
  noFill();
  beginShape();
  curveTightness(0);
  counter = 0;

  xoff = xoff + .005;
  for (var angle = 0; angle < 360; angle += 70) {

    var xc = 0, yc = 0;


    if (counter%2 == 0) {
      xc = width*2/3 + (10 + noise(xoff, angle/1, 80) * 68) * cos(radians(angle));
      yc = height*1.7/3 + (10 + noise(xoff, angle/1, 80) * 68) * sin(radians(angle));
    } else {
      xc = width*2/3 + (12 + noise(xoff/.2, angle/1, 100) * 42) * cos(radians(angle));
      yc = height*1.7/3 + (12 + (noise(xoff/.2, angle/1, 100) * 42))  * sin(radians(angle));
    }

    curveVertex(xc, yc);
    if (counter == 0) {
      xc1 = xc;
      yc1 = yc;
    } else if (counter == 1) {
      xc2 = xc;
      yc2 = yc;
    } else if (counter == 2) {
      xc3 = xc;
      yc3 = yc;
    }
    counter++;
  }
  curveVertex(xc1, yc1);
  curveVertex(xc2, yc2);
  curveVertex(xc3, yc3);

  endShape();
}



//************************************************************************************
/* BOULE 5 = STRESS
 Vitesse : rapide
 Contour : piquant (lame + aiguille)
 Taille : Moyenne
 */

function boule5() {
  stroke(255);
  noFill();
  beginShape();
  curveTightness(1);
  counter = 0;

  xoff = xoff + .25;
  for (var angle = 0; angle < 360; angle = angle + 1) {

    var xc = 0, yc = 0;


    if (counter%2 == 0) {
      xc = width/2 + noise(xoff, angle/2, 35) * 300 * cos(radians(angle));
      yc = height*3/8 + noise(xoff, angle/2, 45) * 300 * sin(radians(angle));
    } else {
      xc = width/2 + noise(xoff, angle/25, 100) * 250 * cos(radians(angle));
      yc = height*3/8 + noise(xoff, angle/25, 105) * 250  * sin(radians(angle));
    }


    curveVertex(xc, yc);
    if (counter == 0) {
      xc1 = xc;
      yc1 = yc;
    } else if (counter == 1) {
      xc2 = xc;
      yc2 = yc;
    } else if (counter == 2) {
      xc3 = xc;
      yc3 = yc;
    }
    counter++;
  }
  curveVertex(xc1, yc1);
  curveVertex(xc2, yc2);
  curveVertex(xc3, yc3);

  endShape();
}

//************************************************************************************
/* BOULE 6 = PEUR
 Vitesse : rapide
 Contour : piquant (aiguille)
 Taille : Moyenne
 */

function boule6() {
  stroke(255);
  noFill();
  beginShape();
  curveTightness(1);
  counter = 0;
  // frameRate(50);

  xoff = xoff + .3;
  for (var angle = 0; angle < 360; angle = angle + 1) {

    var xc = 0, yc = 0;


    if (counter%2 == 0) {
      xc = width/2 + noise(xoff, angle/2, 35) * 300 * cos(radians(angle));
      yc = height*3/8 + noise(xoff, angle/2, 45) * 300 * sin(radians(angle));
    } else {
      xc = width/2 + noise(xoff, angle/25, 100) * 0 * cos(radians(angle));
      yc = height*3/8 + noise(xoff, angle/25, 105) * 0  * sin(radians(angle));
    }


    curveVertex(xc, yc);
    if (counter == 0) {
      xc1 = xc;
      yc1 = yc;
    } else if (counter == 1) {
      xc2 = xc;
      yc2 = yc;
    } else if (counter == 2) {
      xc3 = xc;
      yc3 = yc;
    }
    counter++;
  }
  curveVertex(xc1, yc1);
  curveVertex(xc2, yc2);
  curveVertex(xc3, yc3);

  endShape();
}

//************************************************************************************
/* BOULE 7 = EXPLOSION PARTIE 1
 Vitesse : rapide
 Contour : piquant (aiguille)
 Taille : grand
 */

function boule7() {
  stroke(255);
  noFill();
  beginShape();
  curveTightness(1);
  counter = 0;

  xoff = xoff + .3;
  for (var angle = 0; angle < 360; angle = angle + 1) {

    var xc = 0, yc = 0;


    if (counter%2 == 0) {
      xc = width/2 + noise(xoff, angle/2, 35) * 1000 * cos(radians(angle));
      yc = height*3/8 + noise(xoff, angle/2, 45) * 1000 * sin(radians(angle));
    } else {
      xc = width/2 + noise(xoff, angle/2, 35) * 250 * cos(radians(angle));
      yc = height*3/8 + noise(xoff, angle/2, 45) * 250  * sin(radians(angle));
    }


    curveVertex(xc, yc);
    if (counter == 0) {
      xc1 = xc;
      yc1 = yc;
    } else if (counter == 1) {
      xc2 = xc;
      yc2 = yc;
    } else if (counter == 2) {
      xc3 = xc;
      yc3 = yc;
    }
    counter++;
  }
  curveVertex(xc1, yc1);
  curveVertex(xc2, yc2);
  curveVertex(xc3, yc3);

  endShape();
}

//************************************************************************************
/* BOULE 8 = NÉANT
 Vitesse : lente
 Contour : courbe
 Taille : petit
 */

function boule8() {
  stroke(255);
  noFill();
  beginShape();
  curveTightness(0);
  counter = 0;

  xoff = xoff + .0015;
  for (var angle = 0; angle < 360; angle += 60) {

    var xc;
    var yc;

    if (counter%2 == 0) {
      xc = width/2 + noise(xoff, angle/1) * 150 * cos(radians(angle));
      yc =  height*3/8 + noise(xoff, angle/1) * 150 * sin(radians(angle));
    } else {
      xc = width/2 + noise(xoff, angle/1) * 150 * cos(radians(angle));
      yc = height*3/8 + noise(xoff, angle/1) * 150 * sin(radians(angle));
    }

    curveVertex(xc, yc);
    if (counter == 0) {
      xc1 = xc;
      yc1 = yc;
    } else if (counter == 1) {
      xc2 = xc;
      yc2 = yc;
    } else if (counter == 2) {
      xc3 = xc;
      yc3 = yc;
    }
    counter++;
  }
  curveVertex(xc1, yc1);
  curveVertex(xc2, yc2);
  curveVertex(xc3, yc3);

  endShape();
}



//************************************************************************************
//BOULE 0 SÉRÉNITÉ + BOULE 10 COQUILLE PROTECTION == RECONSTRUCTION

/* BOULE 10 = COQUILLE PROTECTION
 Vitesse : rapide (frémissement : bouge rapidement sur une très petite zone)
 Contour : piquant ligne (sorte d'hexagone)
 Taille : moyen
 */

function boule10() {
  stroke(255);
  noFill();
  beginShape();
  curveTightness(1);
  counter = 0;

  xoff = xoff + .0005;
  var xc = 0, yc = 0;


  for (var angle = 0; angle < 361; angle = angle += 30) {

    var xc1 = width/2 + random(208, 210) * cos(radians(angle));
    var yc1 = height*3/8 + random(208, 210) * sin(radians(angle));

    if (angle > 0) {
      line(xc, yc, xc1, yc1);
    }
    xc = xc1;
    yc = yc1;
  }
}


//************************************************************************************
/* BOULE 11 = EXPLOSION PARTIE 2
 Vitesse : rapide
 Contour : piquant (aiguille)
 Taille : très grand
 */

function boule11() {
  stroke(255);
  noFill();
  beginShape();
  curveTightness(1);
  counter = 0;

  xoff = xoff + .3;
  for (var angle = 0; angle < 360; angle = angle + 1) {

    var xc = 0, yc = 0;


    if (counter%2 == 0) {
      xc = width/2 + noise(xoff, angle/2, 35) * 2500 * cos(radians(angle));
      yc = height*3/8 + noise(xoff, angle/2, 45) * 2500 * sin(radians(angle));
    } else {
      xc = width/2 + noise(xoff, angle/2, 35) * 800 * cos(radians(angle));
      yc = height*3/8 + noise(xoff, angle/2, 45) * 800  * sin(radians(angle));
    }


    curveVertex(xc, yc);
    if (counter == 0) {
      xc1 = xc;
      yc1 = yc;
    } else if (counter == 1) {
      xc2 = xc;
      yc2 = yc;
    } else if (counter == 2) {
      xc3 = xc;
      yc3 = yc;
    }
    counter++;
  }
  curveVertex(xc1, yc1);
  curveVertex(xc2, yc2);
  curveVertex(xc3, yc3);

  endShape();
}
