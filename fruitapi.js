let fruit1;
let fruit2;
let fruit3;
let c =  0;
let protein = 0;
let fat = 0;
let sugar = 0;
let calories = 0;

const url = "https://andejuli.github.io/wdd230/fruit.json";

const getFruit = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    fruit1 = data[Math.floor(Math.random() *40 )];
    fruit2 = data[Math.floor(Math.random() *40 )];
    fruit3 = data[Math.floor(Math.random() *40 )];

    document.querySelector('#f1').textContent=fruit1.name
    document.querySelector('#f2').textContent=fruit2.name
    document.querySelector('#f3').textContent=fruit3.name

    function chosenFruit(){
        let check1 = document.querySelector('#fruit1');
        let check2 = document.querySelector('#fruit2');
        let check3 = document.querySelector('#fruit3');
        if (check1.checked){
            c += fruit1.nutritions.carbohydrates;
            protein += fruit1.nutritions.protein;
            fat += fruit1.nutritions.fat;
            sugar += fruit1.nutritions.sugar;
            calories += fruit1.nutritions.calories;
        };
        if (check2.checked){
            c += fruit2.nutritions.carbohydrates;
            protein += fruit2.nutritions.protein;
            fat += fruit2.nutritions.fat;
            sugar += fruit2.nutritions.sugar;
            calories += fruit2.nutritions.calories;
        };
        if (check3.checked){
            c += fruit3.nutritions.carbohydrates
            protein += fruit3.nutritions.protein;
            fat += fruit3.nutritions.fat;
            sugar += fruit3.nutritions.sugar;
            calories += fruit3.nutritions.calories;
        };
    
        document.querySelector('#outputc').textContent=c.toFixed(1);
        document.querySelector('#outputpro').textContent=protein.toFixed(1);
        document.querySelector('#outputfat').textContent=fat.toFixed(1);
        document.querySelector('#outputsug').textContent=sugar.toFixed(1);
        document.querySelector('#outputcal').textContent=calories.toFixed(1);
    };
    document.querySelector('#submit').addEventListener('click', chosenFruit);

  };

  getFruit();

// if (!localStorage.getItem('drinkCount')){
        //     localStorage.setItem('drinkCount', 1 )
        //   } else {
        //     let drink = Number(localStorage.getItem('drinkCount'))+1;
        //     localStorage.setItem('drinkCount', drink);
        //         console.log(drink);
        //   }

  //document.querySelector('#submit').addEventListener('click', displayNutrition);
//   document.querySelector('#results').innerHTML = `
//   <br>
//   <h2>Form Values:</h2>
//   <hr>
//   <p>First Name: ${event.target.elements.fname.value}</p>
//   <p>Email: ${event.target.elements.email.value}</p>
//   <p>Phone Number: ${event.target.elements.phone.value}</p>
//   <p>Fruits: ${allMarkedBoxes}</p>
//   <p>Special Instructions: ${event.target.elements.instructions.value}</p>
//   <br>
//   <h2>Nutrition Information</h2>
//   <hr>
//   <p>Carbohydrates: ${totalCarbs.toFixed(2)}</p>
//   <p>Protein: ${totalProtein.toFixed(2)}</p>
//   <p>Fat: ${totalFat.toFixed(2)}</p>
//   <p>Sugar: ${totalSugar.toFixed(2)}</p>
//   <p>Calories: ${totalCalories.toFixed(2)}</p>
//   <br>
//   <i>
//       <p>Order Date: ${orderDate}</p>
//       <p>Drink Mixes Ordered: ${numDrinks}</p>
//   </i>
// `
