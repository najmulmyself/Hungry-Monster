const search = document.getElementById('search');
search.addEventListener('click',getInput)
function getInput() {
    const input = document.getElementById('input-field').value;
    
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    .then(res => res.json())
    .then(data => {
            const mealsdata = data.meals;
            const mainDiv = document.getElementById('meal-area');

            mealsdata.forEach(element => {
                const separateDiv = document.createElement('div');
                const contryInfo = `
                <h3> ${element.strMeal} </h3>
                <h6>${element.idMeal}</h6>
                `
                separateDiv.innerHTML = contryInfo;
                mainDiv.appendChild(separateDiv);
            });

            // for (let i = 0; i < mealsdata.length; i++) {
            //     const mealName = mealsdata[i];
            //     // const mealId = mealName.idMeal;
            //     const strMeal = mealName.strMeal;
            //     const separateDiv = document.createElement('div');
            //     const contryInfo = `
            //         <h3> ${strMeal} </h3>
            //         <h6>${mealName.idMeal}</h6>
            //     `
            //     separateDiv.innerHTML = contryInfo;
            //     mainDiv.appendChild(separateDiv);

                
            // }
        }
    )
}