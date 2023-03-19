console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

// FIRST FUNCTION
function addItem(item) { 
    basket.push(item);
    return true;
}
// tests:
console.log(addItem('strawberries'));
console.log(addItem('bread'));
console.log(addItem('juice'));

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