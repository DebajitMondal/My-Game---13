class Player {
  constructor(){ 
    this.index = null;
    this.name = null;
    this.index2 = null;
  }
 
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  getCount1(){
    var worldCountRef = database.ref('worldCount');
    worldCountRef.on("value",function(data){
      worldCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount : count
    });
  }
  updateCount1(count1){
    database.ref('/').update({
      worldCount : count1
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name: this.name
    })
  }

 update1(){
  var worldIndex = "World " + this.index2;
  database.ref(worldIndex).set({
    name: this.name2
  }) 
}


}

