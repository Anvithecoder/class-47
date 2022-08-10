var img1,img2,img3,img4,form,game
var gameState=0
var blackHat,paintingtool,miror,eifletower,sofa,magnet,purse,snail,tie,tape,clock
var items=11
function preload() {
img1=loadImage("./img/image.jpg")
img2=loadImage("./img/image1.jpg")
img3=loadImage("./img/img3.jpg")
img4=loadImage("./img/img4.jpg")
}


function setup() {
  canvas = createCanvas(1100,700);
game=new Game()
game.start()


}

function draw() {

  background(128);
  if(gameState===1){
    
    background(img4)
    game.play()
    
  }

  fill ("red")
 text(mouseX+", "+mouseY,20,20)
 textSize(30)
 text("Number of Items Remaining: "+items,460,50)
}




