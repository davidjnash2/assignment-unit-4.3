console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
function addItem( item ){
    basket.push( item );
    let result = false;
    for (i=0; i<basket.length; i++){
    if (item === basket[i]){
        result = true
    }
}
    return result
}



console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);

console.log(`Basket is ${basket}`);
console.log('Adding bananas (expect true)', addItem('bananas'));
console.log(`Basket is now ${basket}`);


console.log(`Basket is ${basket}`);
console.log('Adding pomegranates (expect true)', addItem('pomegranates'));
console.log(`Basket is now ${basket}`);


console.log(`Basket is ${basket}`);
console.log('Adding kiwi (expect true)', addItem('kiwi'));
console.log(`Basket is now ${basket}`);
