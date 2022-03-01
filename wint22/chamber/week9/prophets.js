const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then((response)=> {
    if(response.ok){
        return response.json();
    } else {
        alert('Data not Available');
    }
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    //console.log(prophets[0].name);
    prophets.forEach(displayProphets);
  });

//   function displayProphets(prophet) {
//     // Create elements to add to the document
//     let card = document.createElement('section');
//     let h2 = document.createElement('h2');  
//     // Change the textContent property of the h2 element to contain the prophet's full name
//     h2.textContent = prophet.name + ' ' + prophet.lastname;
  
//     // Add/append the section(card) with the h2 element
//     card.appendChild(h2);
  
//     // Add/append the existing HTML div with the cards class with the section(card)
//     document.querySelector('div.cards').appendChild(card);
//   }

  function displayProphets(prophet) {  // Create elements to add to the documentlet card = document.createElement('section');
    let card = document.createElement('section') 
    let h2 = document.createElement('h2');
      // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name}  ${prophet.lastname}`;

      // Add/append the section(card) with the h2 element
    let dob = document.createElement('p');
    dob.textContent = `Date of Birth: ${prophet.birthdate}`
    let pob  = document.createElement('p');
    pob.textContent = `Place of Birth: ${prophet.birthplace}`;
    let img = document.createElement('img');
    img.setAttribute('src', prophet.imageurl);
    img.setAttribute('alt', `${prophet.name} ${prophet.lastname} ${prophet.order}`)
    card.appendChild(h2);
    card.appendChild(dob);
    card.appendChild(pob);
    card.appendChild(img);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }

