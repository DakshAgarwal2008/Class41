class Game{
    constructor(){}
    getState(){
        var gameStateref=database.ref('gameState');
        gameStateref.on("value",function(data){
            gameState=data.val();
        })
    }
    update(state){

        database.ref('/').update({
            gameState:state
        })
    }
    start(){
        if (gameState===0){
            player=new Player();
            player.getCount();
            form=new Form();
            form.display();
        }
        car1 = createSprite(100,200);
        car1.addImage("car1Image",car1Image);

        car2 = createSprite(300,200);
        car2.addImage("car2Image",car2Image);
        
        car3 = createSprite(500,200);
        car3.addImage("car3Image",car3Image);

        car4 = createSprite(700,200);
        car4.addImage("car4Image",car4Image);




        cars=[car1,car2,car3,car4]
    }
    play(){
        form.hide();
        player.getcarsAtEnd();
        textSize(30);
        text("gameStart",120,200);
        Player.getplayerinfo();
        if(allPlayers!==undefined){
            background(groundImage);
            image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5);
      var index=0;
      var x=175;
      var y;
            for (var plr in allPlayers){
                index=index+1;
                x=x+200;
                y=displayHeight - allPlayers[plr].distance;
                cars[index-1].x=x;
                cars[index-1].y=y;
                if(plr==="player"+player.index){
               // cars[index-1].shapeColor = "red";
                stroke(10);
                fill("red");
                ellipse(x,y,90,90);
                camera.position.x=displayWidth/2;
                camera.position.y = cars[index-1].y
                
            }
            }
        }
        if(keyIsDown(UP_ARROW)&& player.index!== null){
        player.distance+=50;
        player.update();
        }
          
        if (player.distance>4000){
            gameState=2;
            player.rank+=1;
            Player.updatecarsAtEnd(player.rank)
        }




        drawSprites();
    }
  end(){
      console.log("Game Ended!")
      console.log(player.rank);
  }







}