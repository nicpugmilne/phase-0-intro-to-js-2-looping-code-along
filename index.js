// const gifts = ["dinosaurs", "cd walkman", "water guns"];

// function wrapGifts(gifts){
//     for (let i = 0; i < gifts.length; i++){
//         console.log(`Wrapped ${gifts[i]} in a bow`);
//     }
//     return gifts;
// }

// wrapGifts(gifts);

// const friends = ["Hamish", "Mallory", "Kim"];
// let messages = [];

// function writeCards(name, event){
//     for (let i = 0; i <friends.length; i++){
//         messages.push(`Thank you ${friends[i]} for the ${event} gift!`);
//         console.log(messages);
//         debugger;
//     }
// }

// writeCards(friends, "graduation");

// To get more acquainted with while, your task is to write a function, countDown, 
// that takes in any positive integer and, starting from that number, counts down to zero using console.log(). 
// Note that this means that running countDown(10); would actually log 11 times:

function countDown(i){
    while (i >= 0){
        console.log(i--)
    }
}

countDown(10);