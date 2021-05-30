class Game
{
 constructor(){
     this.text = createElement();
 }


 readgs(){
     mydb.ref("gameState").on("value", function(data){
         mygs = data.val();
     })
 }

 updategs(gs){
mydb.ref("/").update({
    gameState:gs
})

 }

 start(){
     if(mygs === 0){
         myplayer = new Player()
         myplayer.readpc()
           
         myform = new Form()
         myform.display();
        
        }

        Car1 = createSprite(300,200,50,50)
        Car1.addImage(car1img)

        Car2 = createSprite(700,200,50,50)
        Car2.addImage(car2img)

        Cars = [Car1,Car2]

 }

 play()
 {

  myform.allHide()
  Player.getallplinfo()
  myplayer.readCars();

  

   if(allPlayers !== undefined){
    //    var textpos = 200
    background("grey")
    image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5)
    var index = 0
    var x = 300
    var y 
       for(var plr in allPlayers)
       {
        //  textpos = textpos + 20
        index=index+1
              x = x+300
              y = displayHeight - allPlayers[plr].distance  
              Cars[index-1].x = x
              Cars[index-1].y = y
         if(plr === "player"+myplayer.index)
          {
              stroke(10)
              fill("blue")
              ellipse(x,y,60,60)
              this.text.html("Your Car")
              this.text.position(x+200,y-50)
            camera.position.x = displayWidth/2
            camera.position.y = Cars[index-1].y
        // fill("red")

         }
        //  else{
        //      fill("black")
        //  }
        //  textSize(20)
        //  text(allPlayers[plr].name+"---"+allPlayers[plr].distance,200,textpos)
       }

   }
   if(keyIsDown(38) && myplayer.index != null){
    myplayer.distance += 50
    myplayer.updateName();
    
    this.text.hide();
}
   if(myplayer.distance>3860){
 mygs = 2;
 myplayer.rank+=1
 Player.updateCars(myplayer.rank)
   }
    drawSprites();

  
}
 end(){
    //  console.log("gameEnded")
    //  console.log("rank"+myplayer.rank)

    background("red")
    

    
      var title = createElement("h1") 
      title.html("Game Ended")
      title.position(displayWidth/2-50,displayHeight/4)
   
      var greeting = createElement("h1")
      greeting.html(myplayer.name+":"+myplayer.rank)
      greeting.position(displayWidth/2-50,displayHeight/4+50)


   
 }
 }
