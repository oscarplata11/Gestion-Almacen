function actualizaStock(){

    var entrada=parseInt(document.getElementById("entradaProducto").value);
    var salida=parseInt(document.getElementById("salidaProducto").value);

    var cantidadProducto=parseFloat(document.getElementById("prod").value);

    var radios=document.getElementsByName("radio");
    var radioSeleccionado;
    
    for(i=0;i<radios.length;i++){
        if(radios[i].checked){
            radioSeleccionado=radios[i].value;
        }
    }

    var resultado;

    if(radioSeleccionado=="entrada"){

        if(cantidadProducto=="" || isNaN(cantidadProducto)){
            resultado="Necesita indicar una cantidad del producto";
        }
        else{
            resultado="Se han ingresado " + cantidadProducto + " unidades del producto";
        }

    }

    else{

        if(cantidadProducto=="" || isNaN(cantidadProducto)){
            resultado="Necesita indicar una cantidad del producto";
        }
        else{
            resultado="Se han retirado " + cantidadProducto + " unidades del producto";
        }
    }
 
    document.getElementById("resultado").value=resultado;

}