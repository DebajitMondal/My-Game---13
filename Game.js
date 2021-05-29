class Game {
  constructor(){

  }
  getState(){
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value",function(data){
        gameState = data.val()
    })
  }

 update(state){
   database.ref('/').update({
      gameState: state
   })
 }

 start(){
  if(gameState === 1){
    player1 = new Player();
    player1.getCount();
    player1.getCount1()
    }
     form = new Form()
    form.display();
 }



}