
      window.alert ("Press the mouse to Play or  Pause the music");
      
      
      let numberLines = 40;
      let spaceBetweenLines;
      let lineLength;
      const lines = [];
      let christmas_sound;
      let ySpeed = 10;
      let col = [
        "#d02a37",
        "#2524cf",
        "#1abf5d",
        "#170720",
        "#280881",
        "#f1d02f",
        "#6a1437",
        "#1a0657",
        "#1d5925",
      ];
      let balls = [];
     let ballX;
     let soundIsPlay=false;


    function preload (){
    christmas_sound=loadSound ("sound/jingle_bells.mp3");
      
     }

  function setup() {
    cv= createCanvas(windowWidth, windowHeight);


  if (soundIsPlay) {
    christmas_sound.play();
      } else {
    christmas_sound.stop ();
  }
      generateLine();
    spaceBetweenLines = height / numberLines - 1;
    frameRate(24);
      }

      function draw() {
        background("black");
   
       

        for (let i = 0; i < lines.length; i++) {
          if (
            !lines[i].locked &&
            lines[i].y < height - spaceBetweenLines * (i + 1)
          ) {
            lines[i].y += ySpeed;

          } else if (!lines[i].locked && i < numberLines) {
            lines[i].locked = true;
            generateLine();
          }

          strokeWeight(4);
          stroke ('white')
          line(lines[i].x1, lines[i].y, lines[i].x2, lines[i].y);
          push();
          noStroke();

          for (let i = balls.length - 1; i > 0; i--) {
            
            randomColor = random (col);
           fill (color(randomColor));
            circle(balls[i].ballX, balls[i].y, balls[i].ballSize);
            }
          pop();
        }



for (let i = 0; i < lines.length; i++) {  
    for (let j = balls.length - 1; j > 0; j--) {
        if (!balls [j].ballLocked  &&
            lines[i].y < height - spaceBetweenLines * (i + 1)) {
            balls[j].y += ySpeed;
        } else if (!balls [j].ballLocked && !lines[i].locked) {
            balls [j].ballLocked=true;
            }
        }
    }


      
    textAlign (CENTER);
    textSize (50);
    fill (color(randomColor));
    text ('MERRY CHRISTMAS',width*0.5 , height*0.07);

      }

      function generateLine() {
        if (typeof lineLength === "undefined") {
          lineLength = width * 0.8;
        } else {
          lineLength = lineLength * 0.9;
        }

        console.log (lineLength)

        if (lineLength>35) { 
        let y = 0;
        let x1 = (width - lineLength) / 2;
        let x2 = x1 + lineLength;
        let locked = false;


        lines.push({ x1, y, x2, locked });

        let ballLocked = false;
        ballSize = lineLength / 50;
        for (let i = 0; i<5 ; i++) {
          let ballX = random(x1, x2);
          balls.push({ballX, y, ballSize, ballLocked});
        }
    }
      }

    function mousePressed (){
      if (!soundIsPlay)  {
        soundIsPlay=true;
        christmas_sound.loop();
        } else if (soundIsPlay) {
          christmas_sound.stop();
          soundIsPlay=false;
        }    
    }

