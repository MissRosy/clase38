class Form{
    constructor(){
        //Recordemos que se usa this porque se refiere al objeto que llama la función
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement('h2');
    }

    //Función para ocultar el formulario
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display(){
        //Crea el titulo
        var title= createElement('h2');
        title.html("Car Racing Game");
        title.position(displayWidth/2 - 50,20);
        //Recordar que se pone entre 2 para que aparezcan al centro de la pantalla
        this.input.position(displayWidth/2 - 40,displayHeight/2 - 200);
        this.button.position(displayWidth/2+30,displayHeight/2 - 100);
        
        //Función para las acciones al presionar el botón
        this.button.mousePressed(()=>{

            //Ocultar el cuadro y boton en cuanto se presiona el boton
            this.input.hide();
            this.button.hide();

            //Guarda el nombre que el ususario introdujo
            jugador.name = this.input.value();

            //Se aumenta el conteo de jugadores
            playerCount+=1;

            //Seactualiza el nombre y conteo de jugadores en la base de datos
            jugador.index= playerCount;
            jugador.update();
            jugador.updateCount(playerCount);

            //Mostrar mensaje al usuario de hola y se concatena su nombre
            this.greeting.html("Hello:  "+ jugador.name);
            this.greeting.position(displayWidth/2-70,displayHeight/4);
            

        });
    }
}