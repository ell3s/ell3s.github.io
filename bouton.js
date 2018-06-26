/*
Ce programme permet de récuperer les GIFs qui seront appelés dans le programme sc_nario.
 */

function Button(txtfr, txteng) {
    this.txtfr = txtfr;
    this.txteng = txteng;
    this.isPressed = false;
    this.xpos;
    this.ypos;
    this.xsize
    this.ysize

    this.display = function (xpos, ypos) {
        this.xpos = xpos
        this.ypos = ypos

        push()
        rectMode(CENTER)
        noFill()
        strokeWeight(3)
        stroke(255)

        if (french) this.xsize = textWidth(this.txtfr)+20;
        else this.xsize = textWidth(this.txteng) +20;

        this.ysize =dialogSize+20

        rect(xpos, ypos, this.xsize, this.ysize,25)

        fill(255)
        stroke(255)
        strokeWeight(1)
        textAlign(CENTER, CENTER)
        if (french) text(this.txtfr, xpos, ypos)
        else text(this.txteng, xpos, ypos)
        pop()
    }

    this.over = function (mx, my) {
        if (mx > this.xpos - this.xsize / 2 && mx < this.xpos + this.xsize / 2 && my > this.ypos - this.ysize / 2 && my < this.ypos + this.ysize / 2) {
            if (mouseIsPressed) {
                this.isPressed = true
            }
        } else {
            this.isPressed = false
        }
    }
}
