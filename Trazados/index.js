window.addEventListener("load", start, false);

function start(){
    var dibujo = document.getElementById("lienzo").getContext("2d");

        // - - TRAZADOS - -
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

}