var contador = 0;
function carrito(){
    alert("Se añadió un elemento");
    contador+=1
    document.getElementById("carrito").innerHTML = contador;
}