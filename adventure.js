//save the value the user types into the prompt to the variable name 
let userName = prompt("enter your name")

//alert - pop up message without the input field
alert("Hello!" + userName)

console.log(userName);

//start with a prompt, use an if statement to show different messages based on what the user enters in the prompt


// alert("That's great!" + userName)

// if (answer ("Good")) {
//     txt = "That's great! ";
// } else  {
//     txt = "Aww, I'm sorry!"
//     console.log()
// }

// Notes from live lecture example plus my notes 10/4

let newMessage = prompt("How are you doing today? type 'good' or 'not good' ")

if (newMessage = prompt === 'good'){
    alert('Thats great! Are you ready to go out?')
    let activity = prompt("type 'yes' or 'no' ")
    if(activity === 'yes'){

    }
    else if('no'){

    }
    else {
        alert("error")
    }

}

else if(newMessage === 'not good'){

}

else{
    alert("choice not recgonized")
}

let place = prompt("type 'city' or 'country' ")

if(place === 'city'){
    alert('you are going to the city')
    let activity = prompt("type 'museum' or 'shopping' ")
    if(activity === 'museum'){

    }
    else if('shopping'){

    }
    else {
        alert("error")
    }
}

else if(place === 'country'){

}

else{
    alert("choice not recgonized")
}

//  //if the number is divisible by both 3 and 5, then print FizzBuzz
//  if ( (checkForThree == 0) && (checkForFive == 0) )
//  console.log("FizzBuzz");

//  //if the number is divisible by 3, then print Fizz
//  else if (checkForThree == 0)
//  console.log("Fizz");

//  //otherwise just print the number
//  else
//  console.log( num );