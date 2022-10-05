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

if (newMessage === 'good'){
    alert('Thats great! Are you ready to go out?')
    let activity = prompt("type 'yes' or 'no' ")
    if(activity === 'yes'){
        alert("Have a good time out")
    }
    else if('no'){
        alert("See you there!")
    }
    else {
        alert("error")
    }

}

else if(newMessage === 'not good'){
    alert('Thats sad! Are you ok?')
    let activity = prompt("type 'yes' or 'no' ")
    if(activity === 'yes'){
        alert("Have a good time out")
    }
    else if('no'){
        alert("See you there!")
    }
    else {
        alert("error")
    }
}

else{
    alert("choice not recgonized")
}

let place = prompt("type 'city' or 'country' ")

if(place === 'city'){
    city = prompt("What city you're visiting?")
    alert('you are going to ' + city)
    let activity = prompt("type 'museum' or 'shopping' ")
    if(activity === 'museum'){
        alert("Have fun at the museum!")
    }
    else if('shopping'){
        alert("Happy Shopping, Sad wallet!")
    }
    else {
        alert("error")
    }
}

else if(place === 'country'){
    country = prompt("What city you're visiting?")
    purpose = prompt("What is the purpose of your visit?")
    alert('you are going to ' + country + " For " + purpose)
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