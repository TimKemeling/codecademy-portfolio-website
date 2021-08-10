
//buttons stored in a array
const buttons = ['homebt', 'projectsbt', 'contactbt', 'skillsbt'];
const toChange = [];

buttons.forEach(function(button){
    toChange.push(document.getElementById(button))
})

//functions that change the color of button and change it back
const boxChange = function(event) {
    event.target.style.backgroundColor = "black";
}

const boxReturn = function(event) {
    event.target.style.backgroundColor = "" ;
}


//function to handle events
let eventAssignment = function(change) {
    change.onkeydown = function() {
      buttPlay(event);
    }
    change.onkeyup = function() {
      buttReturn(event);
    }
  } 
//loop for each array element to go trough the function
buttons.forEach(eventAssignment);





