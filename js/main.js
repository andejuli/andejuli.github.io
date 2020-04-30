/*let currentdate = document.lastModified;
document.getElementById("modified").textContent = currentdate;*/

var options = {month: "numeric", day: "numeric", year: "numeric", time: "numeric"};
var d = new Date().toLocaleDateString('en-US', options);
document.getElementById("modified").textContent = d ;