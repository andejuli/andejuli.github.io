const url = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

let results = null;

const getProphets = async () => {
    const response = await fetch(url);
    prophetList = await response.json();
    output(prophetList);
  };
getProphets();

const output = (prophets) =>  {  

    console.log(prophets);
    prophets.forEach((prophet) => {
        console.log(prophet.birthdate);
    });
    //     // Create elements to add to the document
    // let card = document.createElement('section');
    // let h2 = document.createElement('h2');    // Change the textContent property of the h2 element to contain the prophet's full name
    // let dob = document.createElement('p');
    // let pob = document.createElement('p');
    // let img = document.createElement('img');
    // h2.textContent = `${prophet.name}  ${prophet.lastname}`;
    // dob.textContent = `${prophet.birthdate}`;
    // pob.textContent = `${prophet.birthplace}`;
    // img.setAttribute('src', prophet.imageurl);
    // img.setAttribute('alt', `${prophet.name} ${prophet.lastname} ${prophet.order}`);

    // // Add/append the section(card) with the h2 element
    // card.appendChild(h2);
    // card.appendChild(dob);
    // card.appendChild(pob);
    // card.appendChild(img);
    // // Add/append the existing HTML div with the cards class with the section(card)
    // document.querySelector('div.cards').appendChild(card);
    // });
};