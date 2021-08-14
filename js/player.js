class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.rank = null;
    }
    getCount(){
        var playerCountref=database.ref('playerCount');
        playerCountref.on("value",(data)=>{
            playerCount=data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    update(){
        var playerIndex="players/player"+this.index;
        database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
        })
    }
    static getplayerinfo(){
        var playerInforef=database.ref('players');
        playerInforef.on("value",(data)=>{
            allPlayers=data.val();
        })
    
    }
    getcarsAtEnd(){
        database.ref("carsAtEnd").on("value",(data)=>{
            this.rank=data.val();                                                   
        })
    }
    static updatecarsAtEnd(rank){
        database.ref("/").update({
            carsAtEnd:rank
        })
    }
    
}

