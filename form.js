class Form
{
 constructor(){
 this.title = createElement("h2")
 this.input = createInput("Name")
 this.greeting = createElement("h3")
 this.button = createButton("SUBMIT")
 this.reset = createButton("Restart")
 

 }

display(){
    
    this.title.html("Car Racing")
    this.title.position(displayWidth/2-50,0)

    
    this.input.position(displayWidth/2-40,displayHeight/2-80)

    
    this.button.position(displayWidth/2+30,displayHeight/2)

    this.reset.position(displayWidth-100,20)
    
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        
        myplayer.name = this.input.value()
        mypc +=1
        myplayer.index = mypc

        myplayer.updatePC(mypc);
        myplayer.updateName();

        
        this.greeting.html("Welcome to Car racing "+myplayer.name)
        this.greeting.position(displayWidth/2-70,displayHeight/4)


    })

    this.reset.mousePressed(()=>{
        myplayer.updatePC(0)
        mygame.updategs(0)
        Player.updateCars(0)
        // allPlayers = [null]
    })
}

allHide(){
    this.button.hide()
    this.greeting.hide()
    this.input.hide()
}
}