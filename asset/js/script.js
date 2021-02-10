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


    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            if(element.name === 'Bangladesh'){
                console.log(element.name)
            }
        }
    });