let increase = false;
var x = 0;
let diameter = x;
let front = true;
let photo, maskImage, button;

function preload() {
    //photo = loadImage('uploads/potato.jpg');
    maskImage = loadImage('uploads/body-front.png');
    //maskImage = loadImage('uploads/body-back.png');
}

function setup() {
    //create canvas
    var myCanvas = createCanvas(195, 546);
    myCanvas.parent('humanBody');

    //saveCanvas('myCanvas', 'png');

    //select button and connect downloadPainMap function
    button = select('#savePainMap');
    button.mousePressed(downloadPainMap);
}

function draw() {
    //button.mousePressed(toggleView);
    if (mouseIsPressed === true) {
        increase = true;
        if (increase == true) {
            x++;
        }
        //draw pain location circles
        circles();
    }

    //draw mask over repeatedly
    image(maskImage, 0, 0);
}

function mouseReleased() {
    increase = false;
    x = 0;
}

function circles() {
    if (increase === true) {

        //change size and fill colour based on how long mouse is pressed
        if (x == 0) {
            //level 0
            fill(250);
        } else if (x < 9) {
            //level 1
            fill(224, 247, 250);
        } else if (x < 18) {
            //level 2
            fill(232, 245, 233);
        } else if (x < 27) {
            //level 3
            fill(240, 244, 195);
        } else if (x < 36) {
            //level 4
            fill(230, 238, 156);
        } else if (x < 45) {
            //level 5
            fill(255, 241, 118);
        } else if (x < 54) {
            //level 6
            fill(255, 238, 88);
        } else if (x < 63) {
            //level 7
            fill(255, 213, 79);
        } else if (x < 72) {
            //level 8
            fill(255, 167, 38);
        } else if (x < 81) {
            //level 9
            fill(255, 87, 34);
        } else if (x > 90) {
            //level 10
            fill(216, 67, 21);
            x--;
        }

        //draw circle
        noStroke();
        ellipse(mouseX, mouseY, x, x);
    }
}

function toggleView() {
    if (front) {
        background(255);
        maskImage = loadImage('uploads/body-front.png');
        front = false;
    }
    if (!front) {
        background(255);
        maskImage = loadImage('uploads/body-back.png');
        front = true;
    }
}

function downloadPainMap() {
    var timestamp = new Date();
    saveCanvas('Body Pain Map ' + timestamp, 'png');
}