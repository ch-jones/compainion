let drawing = false;
let positions = [];
let myCanvas, photo, maskImage, timestamp, myValue;

function preload() {
    //preload the body image
    maskImage = loadImage('uploads/body-front.png');
}

function setup() {
    //create canvas
    var myCanvas = createCanvas(147, 412);
    myCanvas.parent('humanBody');
//    timestamp = Number(new Date());
    timestamp = new Date();

    //select buttons from DOM and assign functions
    resetButton = select('#resetButton');
    resetButton.mousePressed(resetSketch);
    
    saveButton = select('#savePainMap');
    //saveButton.mousePressed(downloadPainMap);
    saveButton.mousePressed(downloadPainMap);

    slider = select('#color-slider');
}

function draw() {
    myValue = slider.value();
    //console.log(val);
    
    //draw pain circles when mouse is pressed
    if (mouseIsPressed === true) {
        mousePosition();
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
        if (myValue == 0) {
            //level 0
            fill(250);
        } else if (myValue == 1) {
            //level 1
            fill(224, 247, 250);
        } else if (myValue == 2) {
            //level 2
            fill(232, 245, 233);
        } else if (myValue == 3) {
            //level 3
            fill(240, 244, 195);
        } else if (myValue == 4) {
            //level 4
            fill(230, 238, 156);
        } else if (myValue == 5) {
            //level 5
            fill(255, 241, 118);
        } else if (myValue == 6) {
            //level 6
            fill(255, 238, 88);
        } else if (myValue == 7) {
            //level 7
            fill(255, 213, 79);
        } else if (myValue == 8) {
            //level 8
            fill(255, 167, 38);
        } else if (myValue == 9) {
            //level 9
            fill(255, 87, 34);
        } else if (myValue == 10) {
            //level 10
            fill(216, 67, 21);
        }

        //draw circle
        noStroke();
        ellipse(mouseX, mouseY, 20, 20);
    }
}

function downloadPainMap() {
    //save pain map as png with timestamp in filename
    //saveCanvas('Body Pain Map ' + timestamp, 'png');
}

function mousePressed() {
    //timestamp = new Date();
    //timestamp = Number(new Date());
    //Number(timestamp);
    console.log(timestamp);
}

function mousePosition() {
    //console.log(mouseX + " " + mouseY);
    if (mouseX > 0 && mouseX < 147 && mouseY > 0 && mouseY < 412) {
        positions.push({timestamp, myValue, mouseX, mouseY});
        console.log(positions);
        //localStorage.setItem("painLocation", positions);
        localStorage.setItem(timestamp, JSON.stringify(positions));
    }
}

function resetSketch() {
    clear();
    positions = [];
    //timestamp = Number(new Date());
    //console.log("RESET ME");
}