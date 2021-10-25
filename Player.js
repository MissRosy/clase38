class Player{
    constructor(){
        this.index = null;
        this.distance=0;
        this.name = null;
    }
    //Función para saber cuantos jugadores hay en la base de datos
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
            playerCount = data.val();
        })
    }
    //Funcón para actualizar el conteo de jugadores en la base de datos
    updateCount(count){
        database.ref('/').update({
            playerCount: count
        });
    }
    //Funcion para guardar el nombre y numero de jugador en la base de datos
    update(){
        //En la base de datos aparecera como carpeta jugadores, luego el jugador y su numero según el conteo
        var playerIndex = "jugadores/jugador" + this.index;
        //Agregar estos datos a la base de datos y también con .set se agrega su nombre y distancia ahora se utiliza
        //el this porque son opciones dentro del constructor 
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance
        });
    }
    //Funcion estatica para obtener la info de los jugadores
    static getPlayerInfo(){
        var playerInfoRef = database.ref('jugadores');
        //Se utiliza para el signo igual y la llave para que lo guarde en formato JSON
        playerInfoRef.on("value",(data)=>{
            allPlayers = data.val();
        })
    }
}