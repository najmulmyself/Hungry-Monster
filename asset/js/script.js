// fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
// .then(res => res.json())
// .then(data => {
//     const meals = data.meals;
//     console.log(meals);
//     for (let i = 0; i < meals.length; i++) {
//         const mealsArray = meals[i];
//         console.log(mealsArray.strMeal)
        
//     }
// } 
//     );


const submit = document.getElementById('submit').addEventListener('click', () => {
    const input = document.getElementById('input-field').value;
    console.log(input);
})