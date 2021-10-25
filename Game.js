class Game{
  constructor(){}

  //Funcion para leer el estado del juego de la base de datos
  getState(){
      //Recordar que .ref para saber el valor en la base de datos
      var gameStateRef = database.ref('gameState');
      //El .on se queda oyendo por si despues cambia
      gameStateRef.on("value",function(data){
          //Esta variable es igual al valor del gameState en la base de datos
          gameState = data.val();
      })

  }
  //Sirve para actualizar el valor del gameState en la base de datos
  update(state){
      database.ref('/').upate({
          gameState: state
      })

  }
  //Esta función comienza con la pagina principal del formulario.
  async start(){
      if(gameState === 0){
          //Si el estado del juego esta en 0 te permite ingresar un nuevo jugador y muestra el formulario en blanco
          jugador = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
              playerCount = playerCountRef.val();
              jugador.getCount();
          }
          form = new Form();
          form.display();
      }
      //Crear los autos en esas posiciones para que queden acomodados de forma horizontal
      car1 = createSprite(100,200);
      car2 = createSprite(300,200);
      car3 = createSprite(500,200);
      car4 = createSprite(700,200);
      //Guardar todos los autos en la variable matriz
      cars=[car1,car2,car3,car4];
  }

  //Funcion para cuando el estado del juego cambie a 1
  play(){
      //Oculta el formulario
      form.hide();
      //Muestra un texto de juego inciado
      textSize(30);
      text("Game Start", 120, 100);
      //Obtiene todos los datos de los jugadores
      Player.getPlayerInfo();
      //Mostrara la info de los jugadores en la pantalla solo si ya hay jugadores agregados
      if(allPlayers !== undefined){
          //var display_position = 130;
          //Crear variable que guarde el indice de la matriz
          var index=0;
          //Crear dos variables que guarden las posiciones de x y y
          var x=0;
          var y;
          //For para que imprima a todos los jugadores en  forma de lista
          for(var plr in allPlayers){
          //Agregar un 1 al index por cada vez que se repita el for
          index= index+ 1;
          //Colocar los autos para su posicion en x con una separacion de 200 entre ellos
          x= x + 200;
          //Colocar los autos en su poscicion de de y utilizando el valor de distancia
          y=displayHeight - allPlayers[plr].distance;
          //Asignar las posiciones de cada auto dentro de la matriz
          //Recordar que se pone menos 1 porque el indice de la matriz comienza en 0
          cars[index-1].x = x;
          cars[index-1].y = y;

          if(index === jugador.index){
              cars[index-1].shapeColor = "red";
              //camera.position.x = displayWidth/2;
              //camera.position.y = cars[index-1].y;
          }
          //display_position+=20;
          //textSize(15);
          //Se utiliza plr porque el jugador ya esta definido
          //text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 120, display_position);
          }
      }
      //Cambia la distancia y la actualiza cuando se presiona la flecha de arriba
      if(keyIsDown(UP_ARROW)&& jugador.index !== null){
          jugador.distance+=10;
          jugador.update();
      }
      drawSprites();
  }

}