var body = document.querySelector('body');
// localStorage.setItem('bgcolor', '0000FF');
// var currentColor = localStorage.getItem('bgcolor');
// body.style.backgroundColor = '#' + currentColor;
var bgcolorForm = document.querySelector('#bgcolor');

if(!localStorage.getItem('bgcolor')) {
    populateStorage();
} else {
    setStyles();
}

function populateStorage() {
    localStorage.setItem('bgcolor', bgcolorForm.value);
    setStyles();
}

function setStyles() {
    var currentColor = localStorage.getItem('bgcolor');
    document.getElementById('bgcolor').value = currentColor;
    body.style.backgroundColor = '#' + currentColor;
}
//bgcolorForm.onchange = populateStorage;
bgcolorForm.addEventListener("change", populateStorage);
