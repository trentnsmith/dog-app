"use strict";


function getDogImage(numInput) {
    if (numInput <= 50) {
    fetch(`https://dog.ceo/api/breeds/image/random/${numInput}`)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
    } else {
        return alert("Please enter a number between 1 and 50");
    }
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        let userInput = $("#numDogs").val();
        getDogImage(userInput);
    });
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});