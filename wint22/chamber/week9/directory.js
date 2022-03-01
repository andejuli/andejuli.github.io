const requestURL = 'https://andejuli.github.io/wint22/chamber/week9/data.json';

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
    const prophets = jsonObject['businesses'];
    //console.log(prophets[0].name);
    prophets.forEach(displayBusinesses);
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

  function displayBusinesses(business) {  // Create elements to add to the documentlet card = document.createElement('section');
    let card = document.createElement('section') 
    let h2 = document.createElement('h2');
      // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${business.name}`;

      // Add/append the section(card) with the h2 element
    let dob = document.createElement('p');
    dob.textContent = `Address: ${business.address}`
    let pob  = document.createElement('p');
    pob.textContent = `Phone: ${business.phone}`;
    let img = document.createElement('img');
    let image_path = `images/${business.image}`
    img.setAttribute('src', image_path);
    img.setAttribute('alt', `${business.name} logo`)
    card.appendChild(h2);
    card.appendChild(dob);
    card.appendChild(pob);
    card.appendChild(img);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }

