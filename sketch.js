let circuloX
let circuloY

function setup() {
  createCanvas(400, 400);
  
  circuloX = [random(0,400),random(0,400),random(0,400),random(0,400),random(0,400)]
  circuloY = [0,0,0,0,0]
  
  textAlign(CENTER, CENTER)
  textSize(40)
}

function draw() {
  background(250);
  text("Hallowed!", 200,200)
  fill("purple")
  
  for(let contador in circuloX) {
    circle(circuloX[contador], circuloY[contador], 20);    
    circuloY[contador]+=random(0,3)

  if (circuloY[contador] >= 400) {
    circuloY[contador] = 0
    circuloX[contador] = random(0,400)
    }
  }
  
  if (mouseIsPressed) {
    fill("lightblue")
    square(random(0,400),random(0,400),50)
  }
}