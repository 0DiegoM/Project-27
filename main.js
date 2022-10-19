function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(750, 300);
    video = createCapture(VIDEO);
    video.hide();
    }
    
    function draw() {
        image(video, 160, 120, 320, 240);
        stroke(74, 83, 82);
        fill(120, 156, 120);
        circle(60, 60, 100);
        circle(60, 420, 100);
        circle(580, 420, 100);
        circle(580, 60, 100);
        circle(325, 60, 100);
        circle(325, 420, 100);
        circle(60, 240, 100);
        circle(580, 240, 100);
        circle(325, 60, 120);
        circle(325, 420, 120);
        circle(60, 240, 120);
        circle(580, 240, 120);
        rect(160, 40, 50)
        rect(440, 40, 50)
        rect(160, 410, 50)
        rect(440, 410, 50)
    }
    
    function take_snapshot() {
    save("Foto.png");
    }
    
    