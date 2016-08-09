var Order = function() {
    this.pizza = null;
    this.beverage = null;
};

//Root function in a prototype chain
var Pizza = function() {
    this.toppings = [];
    this.crustThickness = 1;
};
//Setting this function onto pizza's prototype.
//NOT on the Pizza object itself. That would cause trickle down memory leak
Pizza.prototype.setCrustThickness = function (thickness) {
    this.crustThickness = this.crustThickness * thickness
}

// Pizza.prototype.setDescription = function (description) {
//     this.description = this.description
// }

//Types of pizza start here

var DeepDish = function() {
    this.description = "Chewy and greasy, but so filling!"
};
//Create RELATIONSHIP between DeepDish and Pizza
DeepDish.prototype = new Pizza()

//Create a single INSTANCE of the DeepDish object
// var myPizza = new DeepDish()
// myPizza.setCrustThickness(3)
// console.log("myPizza", myPizza)



var ThinCrust = function() {
    this.description = "Crackly and brittle, so gross!"
};
ThinCrust.prototype = new Pizza()




var TraditionalHandTossed = function () {
    this.description = "Boring, but won't offend picky eaters"
}
TraditionalHandTossed.prototype = new Pizza()


// ROOT FUNCTION IN ANOTHER PROTOTYPE CHAIN
var Topping = function() {
    this.price = 0
};

//Pepperoni defaults to non-spicy pep, but you can use the isSpicy method to chage it
var Pepperoni = function() {
    this.isSpicy = false
};
Pepperoni.prototype = new Topping()
//Set methods AFTER creating the relationship/link
Pepperoni.prototype.makeSpicy = function () {
    this.isSpicy = true
}


var Mushroom = function() {
    this.name = "mushroom"
};
Mushroom.prototype = new Topping ()



// ROOT FUNCTION IN ANOTHER PROTOTYPE CHAIN
var Beverage = function() {
    this.size = "small" //Default size for all beverages
};

var Soda = function() {

};
Soda.prototype = new Beverage()


//If the property, like size, is already on the object, it doesn't
//matter that there's a default size higher up the chain. It stops
//at Fruit Punch and doesn't travel up the chain

var FruitPunch = function() {
    this.size = "kids"
};
FruitPunch.prototype = new Beverage()


//A New Order, A New Day

var myOrder = new Order()
var myPizza = new DeepDish()
myPizza.setCrustThickness(3)
var HawaiianPunch = new FruitPunch()
var spicyPepperoni = new Pepperoni()
spicyPepperoni.makeSpicy()
var dirtyFungus = new Mushroom()
var myToppings = [spicyPepperoni, dirtyFungus]
myPizza.toppings.push(...myToppings)

console.log("my pizza so far", myPizza)

//Add pizza and beverage to order

myOrder.pizza = myPizza
myOrder.beverage = HawaiianPunch

console.log(myOrder)

