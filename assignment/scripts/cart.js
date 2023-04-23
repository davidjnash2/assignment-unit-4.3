console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = []; //set basket as empty array
const maxItems = 5; //set constant for basket max

function isFull(basket){ //name and set argument for function
   let result = false; //set default result
    if (basket.length>=maxItems){ //set terms for conditional
        result = true; //result if conditions are met
    } //end conditional
     return result; //function return
} //end full(basket) function


function addItem( item ){ //name function and add argument
    let result = false; //set default
    if (!isFull(basket)){ //use false result of isFull(basket) function as condtion
        basket.push( item ); //command to add each item to basket array
            for (i=0; i<basket.length; i++){ //start loop
                if (item === basket[i]){ //conditional to check if item has been added to basket array
                 return true //define result as true if item is added
                } //end basket check
        } //end loop adding items
    } //end conditional
    return result //function result
}; //end addItem function



console.log(`Basket is ${basket}`); //test addItem function
console.log('Adding apples (expect true)', addItem('apples')); //test addItem function
console.log(`Basket is now ${basket}`); //test addItem function

console.log(`Basket is ${basket}`); //test addItem function
console.log('Adding bananas (expect true)', addItem('bananas')); //test addItem function
console.log(`Basket is now ${basket}`); //test addItem function


console.log(`Basket is ${basket}`); //test addItem function
console.log('Adding pomegranates (expect true)', addItem('pomegranates')); //test addItem function
console.log(`Basket is now ${basket}`); //test addItem function


console.log(`Basket is ${basket}`); //test addItem function
console.log('Adding kiwi (expect true)', addItem('kiwi')); //test addItem function
console.log(`Basket is now ${basket}`); //test addItem function



function listItems (basket) { //name function and add arguemt of basket array
    for (i=0; i<basket.length; i++){ //start loop
        console.log('this is an item in the basket:', basket[i]); //log each item individually
    }//end loop
}//end listItems function

listItems(basket); //test listItems function



function empty(basket){ //name function and set argument
    for (i=0; i<basket.length; i++){ //start loop increment to cycle through array
        basket.pop(i); //remove each item from basket
    } //end loop
    return basket; //function return
} //end empty(basket) function

empty(basket); //fun function

console.log(`should expect basket array to be empty now ${basket}`); //test result of empty(basket) function
//seems to work as instructed, but I'm not confident the way it's coded is correct; maybe I'm just accidentally getting the correct result.

//Below, testing both functions in conjuction, adding item back to basket and removing again. 
//Seems to be working, as far as I can tell via my console.

console.log(`Basket is ${basket}`); //test addItem function
console.log('Adding apples (expect true)', addItem('apples')); //test addItem function
console.log(`Basket is now ${basket}`); //test 

function empty(basket){ //name function and set parameter
    for (i=0; i=basket.length; i++){ //set conditional
        basket.pop(i); //function action to remove item
    } //end conditional
    return basket; //result of function empty(basket)
} //end empty(basket)

empty(basket); //run function

console.log(`should expect basket array to be empty now ${basket}`); //test
console.log(basket) //test

function isFull(basket){ //name and set argument for function
    result = false; //set default result
    if (basket.length>=maxItems){ //set terms for conditional
        result = true //result if conditions are met
    } //end conditional
     return result //function return
} //end full(basket) function

console.log('Because ', basket, 'is empty right now, expect full(basket) to return false.', isFull(basket), 
    'meaning it is not full and we can add more items.'); //testing full(basket) function

addItem('bananas'); //adding items back to test
addItem('apples'); //adding items back to test
addItem('peaches'); //adding items back to test
addItem('pears'); //adding items back to test
addItem('plums'); //adding items back to test
addItem('cherries'); //adding items back to test

console.log('Testing by trying to add 6 items, so if functions work correctly, the basket should reach full with the 5 following items: ', basket, ' and it should state that it is truly full:', isFull(basket));
console.log(basket);

function removeItem( item ){ //name function and set argument
   let result = null; //set default answer
   const index = basket.indexOf(item); //assign index variable to matching items of basket array
   if (index !== -1){ //set conditional such that if index value is not '-1', meaning if it exists anywhere in the basket array, it is a match
        basket.splice(index, 1); //remove item found only at that 1 particular index value
        result = item; //name item removed
        } //end conditional
    return result; //give result of function
} //end removeItem function

console.log('removing apples from basket gives result of removeItem: ', removeItem('apples')); //test for known item apples
console.log(basket); //log basket array to test function removed item from array
console.log('trying to remove cherries from basket gives result of removeItem: ', removeItem('cherries')); //test function with item not in basket
console.log('item removed was: ', removeItem('peaches'), 'so remaining basket is', basket); //test function and array together