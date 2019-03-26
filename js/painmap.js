let drawing = false;
let front = true;
let myCanvas, photo, maskImage, val;

function preload() {
    //preload the body image
    maskImage = loadImage('uploads/body-front.png');
    //maskImage = loadImage('uploads/body-back.png');
}

function setup() {
    //create canvas
    var myCanvas = createCanvas(147, 412);
    myCanvas.parent('humanBody');

    //select buttons from DOM and assign functions
    resetButton = select('#resetButton');
    resetButton.mousePressed(resetSketch);
    
    saveButton = select('#savePainMap');
    saveButton.mousePressed(downloadPainMap);

    
    slider = select('#color-slider');
}

function draw() {
    //button.mousePressed(toggleView);
    
    val = slider.value();
    //console.log(val);
    
    //draw pain circles when mouse is pressed
    if (mouseIsPressed === true) {
        drawing = true;
        
        //draw pain location circles
        circles();
    }

    //draw body mask over repeatedly
    image(maskImage, 0, 0);
}

function mouseReleased() {
    //switch drawing boolean when mouse is released
    drawing = false;
}

function circles() {
    if (drawing === true) {

        //change size and fill colour based on how long mouse is pressed
        if (val == 0) {
            //level 0
            fill(250);
        } else if (val == 1) {
            //level 1
            fill(224, 247, 250);
        } else if (val == 2) {
            //level 2
            fill(232, 245, 233);
        } else if (val == 3) {
            //level 3
            fill(240, 244, 195);
        } else if (val == 4) {
            //level 4
            fill(230, 238, 156);
        } else if (val == 5) {
            //level 5
            fill(255, 241, 118);
        } else if (val == 6) {
            //level 6
            fill(255, 238, 88);
        } else if (val == 7) {
            //level 7
            fill(255, 213, 79);
        } else if (val == 8) {
            //level 8
            fill(255, 167, 38);
        } else if (val == 9) {
            //level 9
            fill(255, 87, 34);
        } else if (val == 10) {
            //level 10
            fill(216, 67, 21);
        }

        //draw circle
        noStroke();
        ellipse(mouseX, mouseY, 20, 20);
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
    //save pain map as png with timestamp in filename
    saveCanvas('Body Pain Map ' + timestamp, 'png');
}

function resetSketch() {
    clear();
    //console.log("RESET ME");
}