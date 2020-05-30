const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('.ham');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive')
}, false);

let w_names = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let m_names = ['January','February','March','April','May','June','July','August','September','October','November','December'];
let mydate = new Date();
let weekname = w_names[mydate.getDay()];
let monthname = m_names[mydate.getMonth()];

const dateoutput = document.querySelector('#date');

dateoutput.textContent = weekname + ", " + mydate.getDate() + " " + monthname + " " + mydate.getFullYear();





















/* Saturday Pancakes message on Fridays */
pancakes();
function pancakes() {
if (weekname == 'Thursday'){
    // get the friday div element so we can do something with it.
    const fridaydiv = document.getElementById('friday');
    // make the friday element visible.
    fridaydiv.style.display = "block";
    // add a class to move everything down so our message doesn't cover it.
    document.body.classList.toggle('movedown');
    }
};