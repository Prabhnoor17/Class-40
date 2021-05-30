var mydb;
var mypc = 0
var mygs = 0
var mygame, myplayer, myform;
var allPlayers = []
var car1img, car2img, trackimg, groundimg;
var Car1, Car2;
var Cars;

function preload(){

    car1img = loadImage("Images/car1.png")
    car2img = loadImage("Images/car2.png")
    trackimg = loadImage("Images/track.jpg")
    groundimg = loadImage("Images/ground.png")
}

function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    
    mydb = firebase.database();
    
    mygame = new Game()
    mygame.start();
    mygame.readgs();

    




    
}

function draw(){
    
    
    if(mypc === 2){

mygame.updategs(1)

    }
    
    if(mygs === 1){
        clear();
        mygame.play()
        
    }

    if(mygs === 2){
        clear();
        mygame.end();
        
    }

}

