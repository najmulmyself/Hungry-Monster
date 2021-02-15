// const search = document.getElementById('search');
// search.addEventListener('click',getInput)
// function getInput() {
//     const input = document.getElementById('input-field').value;
    
//     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
//     .then(res => res.json())
//     .then(data => {
//             const mealsdata = data.meals;
//             const mainDiv = document.getElementById('meal-area');
//             mealsdata.forEach(element => {
//                 const separateDiv = document.createElement('div');
//                 const contryInfo = `
//                 <h3> ${element.strMeal} </h3>
//                 <h6>${element.idMeal}</h6>
//                 <button id="test" onclick="displayIngredients('${element.strIngredient1}')"> Show Ingredients </button>
//                 `
//                 separateDiv.innerHTML = contryInfo;
//                 mainDiv.appendChild(separateDiv);
//             });
//         }
//         )
//     }

//             const displayIngredients = id => {
                
//                 console.log(id)
//             }

const searchBtn = document.getElementById('search');
const mealDetailsArea = document.getElementById('meal-area');

// EventListener
searchBtn.addEventListener('click',mealList());
function mealList(){
    const inputText = document.getElementById('input-field').value;
    console.log("thers" + inputText)
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`)
    .then(res => res.json())
    .then(data => {
        if(data.meals){
            data.meals.forEach(meal =>{
                foodDiv = `
                <img class="img-fluid rounded mb-4" src="${meal.strMealThumb}" alt="">
                <h4>${meal.strMeal}</h4>
                <h5 class="pt-3 pb-2"><i class="icon-fire icons"></i> Ingredients</h5>
                <ul class="list-unstyled mb-0">
                `
            })
        }
        mealDetailsArea.innerHTML = foodDiv;
    })
}   