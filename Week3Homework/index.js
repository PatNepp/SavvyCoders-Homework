//1
const pizzaToppings = ["pepperoni", "cheese", "peppers", "pineapple"];
//2
function greetCustomer() {
    let greeting = `Welcome to Pizza House, our toppings are: `
    for (let toppings of pizzaToppings) {
        greeting += `${toppings} `
    }
    console.log(greeting)
}


//3
function getPizzaOrder(size, crust, ...toppings) {
    let order = `One ${size}, ${crust} crust pizza with `
    for (let topping of toppings) {
        order += `${topping} ` 
    }
    console.log(`${order} coming up!`);
    return [size, crust, toppings]
}
let customerOrder = getPizzaOrder("large", "thick", "pepperoni", "peppers")

//4
function preparePizza([orderSize, orderCrust, orderToppings]) {
    console.log("...cooking pizza...");
    return {size: orderSize, crust: orderCrust, toppings: orderToppings}
}
let newPizza = preparePizza(customerOrder)

//5
function servePizza(pizza) {
    let finishedPizza = `Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with `
    for (let topping of pizza.toppings) {
        finishedPizza += `${topping}`
    }
    console.log(`${finishedPizza}. Enjoy!`);
    return pizza
}
servePizza(newPizza)
greetCustomer()
console.log(preparePizza(getPizzaOrder("large", "thick", "pepperoni")))
