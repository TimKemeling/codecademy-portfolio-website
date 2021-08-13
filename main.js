window.onload = function () {
  const buttons = ['homebt', 'projectsbt', 'contactbt', 'skillsbt'];
  
const changeButton = function(button) {
  document.getElementById(button).addEventListener("mouseover", function() {
  document.getElementById(button).style.backgroundColor = "Gainsboro";
})
};
  
const changeButtonBack = function(button) {
document.getElementById(button).addEventListener("mouseout", function() {
  document.getElementById(button).style.backgroundColor = "";
});
}

buttons.forEach(changeButton);
buttons.forEach(changeButtonBack);


document.getElementById("enlarge").addEventListener("click", function() {
  const image = document.getElementById("mixed");
  image.style.width= "150%";
  image.style.height = 'auto';
})

document.getElementById("enlarge").addEventListener("click", function() {
  document.getElementById("enlarge").style.display = "none";
  
  const shrink= document.getElementById("shrink");
  shrink.style.display = "block"

})

document.getElementById("shrink").addEventListener("click", function() {
  const image = document.getElementById("mixed");
  image.style.width = '120%';
  image.style.height = 'auto';
})

document.getElementById("shrink").addEventListener("click", function() {
  document.getElementById("shrink").style.display = "none";
  
  const shrink= document.getElementById("enlarge");
  shrink.style.display = "block";

})

}