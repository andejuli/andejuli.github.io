
let date = new Date();
let year = date.getFullYear();

document.querySelector('#yr').textContent = year;

let currentdate = document.lastModified;
document.querySelector('#last').textContent = 'Last Updated: ' + currentdate;