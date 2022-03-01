const url = 'https://learnwebcode.github.io/json-example/animals-1.json';

// const results = fetch(url);

// console.log(results);

// function convertToJs(results){

//     if(results.ok) {
//         return results.json();
//     }
// }

// const results = fetch(url).then(convertToJs);

// console.log(results);

fetch(url)
    .then((result)=> {
        if(result.ok){
            return result.json();
        } else {
            alert('Data not Available');
        }
    })
    .then((data)=> {
        let h1 = document.querySelector('h1');
        h1.textContent= (data[1].name);
        console.log(data[1].name);
    });

console.log('second');



