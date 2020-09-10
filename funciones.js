var respuestaCorrecta="Pato";
var respuestaCorrecta1="PATO";
var respuestaCorrecta2 ="pato";
var contador=0;
   
function validacion()
{
    var respuestaFinal=document.getElementById("rta").value;
    var text="¡FELICITACIONES HAS GANADO!";
    var text1="¡OUUUUH PERDISTE!"
   
    if (respuestaFinal==respuestaCorrecta || respuestaFinal==respuestaCorrecta1 || respuestaFinal==respuestaCorrecta2)
    {
        alert("RESPUESTA CORRECTA");
        document.getElementById("parrafo").innerHTML=text;
    } else{
        alert("RESPUESTA INCORRECTA")
        contador++;
        if (contador<=3)
        {
            if (contador==1)
            {
                alert("Primer pista: Es un ave");
                alert("Te quedan 3 intentos")
                
            }
            if (contador==2)
            {
                alert("Segunda pista: Le gusta nadar");
                alert("Te quedan 2 intentos")
            }
            if (contador==3)
            {
                alert("Tercer y ultima pista: Tiene alas y patas");
                alert("Te queda 1 intento")
               
            }
            
        }else{
            alert("Haz perdido, te has quedado sin chances :(");
            document.getElementById("btn-enviar").disabled = true;
            document.getElementById("parrafo").innerHTML=text1;
        }
        
    }
}

