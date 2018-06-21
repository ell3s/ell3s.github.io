/*
Ce programme permet de récuperer les GIFs qui seront appelés dans le programme sc_nario.
 */

function Animation(imagePrefix, count) {
    this.images = [];
    this.imageCount;
    this.frame=0;

    /* Permet d'animer les gifs */

    this.imageCount = count;
   // this.images = new PImage[imageCount];

    for (var i = 0; i < this.imageCount; i++) {
        // Use nf() to number format 'i' varo four digits
        var filename = imagePrefix + nf(i, 4) + ".png";
        this.images.push(loadImage(filename));
    }


    /*
     Permet de placer les GIFs dans la fenêtre
     (position x, position y , taille du GIF x, taille du GIF y)
     */
    this.display = function (xpos, ypos, xsize, ysize) {
        this.frame = (this.frame + 1) % this.imageCount;
        var img =this.images[this.frame]
       // console.log(img)
            image(img, xpos, ypos, xsize, ysize);
    }
    /*
    this.getWidth = function () {
        return this.images[0].width
    }*/
}
