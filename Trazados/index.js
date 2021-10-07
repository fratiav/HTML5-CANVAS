window.addEventListener("load", start, false);

function start(){
    var dibujo = document.getElementById("lienzo").getContext("2d");
            // * * * * TRAZADOS * * * * * //
        // - - TRAZADOS RECTOS - -
    //Comienzo del trazado. 
    dibujo.beginPath(); 
        //Se mueve el "cursor" hasta el punto especificado 
        dibujo.moveTo(200,200);
        //Se dibuja desde el punto donde está el cursor
        dibujo.lineTo(600,200);
        dibujo.lineTo(600,400);
        dibujo.lineTo(200,400);
        dibujo.lineTo(200,200);
    //Se cierra el trazado
    dibujo.closePath();
    dibujo.strokeStyle = "blue";
    dibujo.fillStyle = "whitesmoke";
    dibujo.fill();
    dibujo.stroke();

        // - - TRAZADOS CURVOS - -
    //Comienzo del trazado curvo (arco). 
    dibujo.beginPath();
        dibujo.arc(100,100,50,0,1,false);
    dibujo.closePath();
    dibujo.fill();
    dibujo.stroke();

    //Comienzo del trazado curvo (curva cuadratica). 
    dibujo.beginPath();
    //Desde
    dibujo.moveTo(500,50);
    //Curva cuadrática hasta (500,150) con desvio en (700,20)
    dibujo.quadraticCurveTo(700,20,500,150);
    dibujo.closePath();
    dibujo.fill();
    dibujo.stroke();

    //Comienzo del trazado curvo con punto de inflexion (curva bezzier). 
    dibujo.beginPath();
    //Desde
    dibujo.moveTo(700,450);
    //Curva cuadrática hasta (700,575) con desvio en (600,470) y (780,520)
    dibujo.bezierCurveTo(600,470,780,520,700,575);
    dibujo.closePath();
    dibujo.fill();
    dibujo.stroke();

}