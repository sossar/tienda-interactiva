var contador = 0;
function carrito(){
    alert("Se añadió un elemento");
    contador+=1
    document.getElementById("carrito").innerHTML = contador;
}

function init(){
    var card = document.getElementById("card1")
    card = card.innerHTML =  
    `
    <div>
        <h1>Lista prod </h1> 
        <h2 id="nombreproducto">Producto 1</h2>
        <input type="number"  id="input1">
        <button onclick="agregarCarrito()" type="button" class = "btn btn-success btn-sm">Añadir</button>

    </div>
    
    
    `
}
function agregarCarrito(){
    var nombre = document.getElementById("nombreproducto").textContent
    var valor = document.getElementById("input1").value
    var carrito = document.getElementById("carrito")
    carrito = carrito.innerHTML = `<h1>valor: ${valor} y producto: ${nombre}</h1>`
}