let myCanvas, photo, maskImage, myValue, timestamp, a;
let circleX, circleY;
//let history = JSON.parse(localStorage.getItem('storeObj'));
let history;
//var data = JSON.parse(localStorage.getItem('storeObj'));
var data;

function preload() {
    //preload the body image
    maskImage = loadImage('uploads/body-front.png');
}

function setup() {
    //create canvas
    var myCanvas = createCanvas(147, 412);
    myCanvas.parent('humanBody');

    //select buttons from DOM and assign functions
    //    resetButton = select('#resetButton');
    //    resetButton.mousePressed(resetSketch);
    //    
    //    saveButton = select('#savePainMap');
    //    saveButton.mousePressed(downloadPainMap);
    //
    slider = select('#history-slider');
}

function draw() {
    a = slider.value();
    //history = window.localStorage.key(0);
    data = JSON.parse(localStorage.getItem(localStorage.key(a)));
    //console.log(data);
    //draw pain circles
    circlesHistory();

    //draw body mask over repeatedly
    image(maskImage, 0, 0);
}

function mouseReleased() {
    //var KeyName = window.localStorage.key(a);
    //console.log(KeyName);
    //console.log(data);
}

function circlesHistory() {
    //draw circles
    for (var i = 0, j = data.length; i < j; i++) {
        //console.log(data[i].mouseX); // any property is undefined
        //var obj = JSON.parse(data[i]); // parse it instead
        //console.log(data.title); // use it as an object now
        //console.log(data[i].timestamp);
        if (data[i].myValue == 0) {
            //level 0
            fill(250);
        } else if (data[i].myValue == 1) {
            //level 1
            fill(224, 247, 250);
        } else if (data[i].myValue == 2) {
            //level 2
            fill(232, 245, 233);
        } else if (data[i].myValue == 3) {
            //level 3
            fill(240, 244, 195);
        } else if (data[i].myValue == 4) {
            //level 4
            fill(230, 238, 156);
        } else if (data[i].myValue == 5) {
            //level 5
            fill(255, 241, 118);
        } else if (data[i].myValue == 6) {
            //level 6
            fill(255, 238, 88);
        } else if (data[i].myValue == 7) {
            //level 7
            fill(255, 213, 79);
        } else if (data[i].myValue == 8) {
            //level 8
            fill(255, 167, 38);
        } else if (data[i].myValue == 9) {
            //level 9
            fill(255, 87, 34);
        } else if (data[i].myValue == 10) {
            //level 10
            fill(216, 67, 21);
        }

        noStroke();
        ellipse(data[i].mouseX, data[i].mouseY, 20, 20);
    }
}

function updateImage() {
    clear();
}