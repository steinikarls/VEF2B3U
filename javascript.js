function Pizza(price,size,toppings)
{
    this.price =price;
    this.size = size;
    this.toppings = toppings;
}

var havaii = new Pizza(2999,'large', ['cheese','ham','pinapple'] );
var meat = new Pizza(3999,'large', ['cheese','ham','pepperoni','bacon'] );
var getPizzaId1 = document.getElementById('1');
getPizzaId1.innerHTML="<h1>Havaii</h1><h3>"+havaii.size+"</h3><p>"+havaii.toppings+"</p><p>"+havaii.price+"</p>";
var getPizzaId2 = document.getElementById('2');
getPizzaId2.innerHTML="<h1>Meat</h1><h3>"+meat.size+"</h3><p>"+meat.toppings+"</p><p>"+meat.price+"</p>";
