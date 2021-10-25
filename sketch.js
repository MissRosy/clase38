var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var form,jugador,game;
var cars, car1, car2, car3, car4;

function setup(){
    createCanvas(displayWidth-20,displayHeight);
    //Referencia a tu base de datos
    database=firebase.database();
    
    //Crear un nuevo objeto de la clase game
    game = new Game();
    //Utilizar sus 2 funciones que están en la clase
    game.getState();
    game.start();
}

function draw(){
    //Comparar si ya se llego a 4 jugadores
    if(playerCount === 4){
        //Si ya llego poner el gameState en 1
        gameState=1;
        console.log(gameState);
    }
    //Comparar si el estado del juego ya cambio a 1 
    if(gameState === 1){
        //Limpiar todo
        clear();
        //que se ejecute lo que hay en play en la clase Game
        game.play();
    }

}