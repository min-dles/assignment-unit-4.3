console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

// FIRST FUNCTION
function addItem(item) { 
    basket.push(item);
    return true;
}
// tests:
console.log('Items in cart:', basket);
console.log('Adding strawberries to cart.', addItem('strawberries'));
console.log('Adding bread to cart.', addItem('bread'));
console.log('Adding juice to cart.', addItem('juice'));
console.log('Items in cart:', basket);

// SECOND FUNCTION
function listItems() { 
    for(item in basket){
        console.log('This was added to your cart:', basket[item]);
    }
    return basket;
}
// test:
console.log(listItems());

// THIRD FUNCTION
function empty() {
    basket = [];
    return basket;
}
// test:
console.log('Your cart is now empty:', empty());