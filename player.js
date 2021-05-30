class Player
{
 constructor()
 {
     
    this.index = null
    this.name = null
    this.distance = 0
    this.rank = null
 }

 readpc(){
     mydb.ref("playerCount").on("value", function(data) {
      mypc = data.val();
     })
 }

 updatePC(PC)
{
    mydb.ref("/").update({
        playerCount:PC
    })
}

updateName(){
    var playerIndex = "players/player" + this.index
    mydb.ref(playerIndex).set({name:this.name,distance:this.distance})
}

static getallplinfo(){
    mydb.ref("players").on("value",(data)=>{
allPlayers = data.val()
    })
}

readCars(){
    mydb.ref("Carsatend").on("value", (data)=>{
        this.rank = data.val();
    })

}

static updateCars(rank){
    mydb.ref("/").update({
        Carsatend:rank
    })
}
}