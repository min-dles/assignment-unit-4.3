console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

// FIRST FUNCTION
function addItem(item) { 
    if(isFull() === false){
        basket.push(item);
        console.log('Adding item to cart:', item);
        return true;
    } else {
        console.log('Your cart is full, item cannot be added.');
        return false;
    }
}
// tests:
console.log('Items in cart:', basket);
console.log(addItem('strawberries'));
console.log(addItem('bread'));
console.log(addItem('juice'));
console.log('Items in cart:', basket);

// SECOND FUNCTION
function listItems() { 
    for(item in basket){
        console.log('This item is in your cart:', basket[item]);
    }
    return basket;
}
// tests:
console.log(listItems());
console.log(addItem('pickles'));
console.log(addItem('tomatoes'));
console.log(addItem('mustard'));

//STRETCH GOAL FUNCTION
function isFull() {
    return maxItems <= basket.length;
}
// test:
console.log(listItems());
console.log('The cart is full:', isFull());
console.log(empty());
console.log('The cart is full:', isFull());

// THIRD FUNCTION
function empty() {
    basket = [];
    console.log('You have emptied your cart.');
    return basket;
}
// test:
console.log(empty());