class Form {
    constructor() {
        this.titleImg = createImg("./img/img5.png", "game title");
      this.playButton = createImg("./img/img7.png","Play");
     
      
    }
  
    hide() {
   
      this.playButton.hide();
        this.titleImg.hide()
    }
  
    setElementsPosition() {
      this.titleImg.position(200,50);
      this.titleImg.size(1050,690)
      
      this.playButton.position(250,350);
      this.playButton.size(800,500)
 
    }
  
    setElementsStyle() {
      this.titleImg.class("gameTitle");
      
      this.playButton.class("customButton");

    }
    display(){
      this.setElementsPosition()
      this.setElementsStyle()
      this.handleMousePressed()
    }
    handleMousePressed(){
      this.playButton.mousePressed(()=>{
        
        this.playButton.hide()
        this.titleImg.hide()
       gameState=1
       
       
       
        
      })
    }
  
  }
  
  