console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = []; //set basket as empty array
function addItem( item ){ //name function and add argument
    basket.push( item ); //command to add each item to basket array
    let result = false; //set defalut result
    for (i=0; i<basket.length; i++){ //start loop
        if (item === basket[i]){ //conditional to check if item has been added to basket array
        result = true //define result as true if item is added
        } // end conditional
    } //end loop
    return result //result of function
} //end function


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



function empty(basket){
    for (i=0; i<basket.length; i++){
        basket.pop();
    }
    return basket;
}
empty(basket);

console.log(`should expect basket array to be empty now ${basket}`);

