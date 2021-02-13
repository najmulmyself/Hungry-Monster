const search = document.getElementById('search');
search.addEventListener('click',getInput)
function getInput() {
    const input = document.getElementById('input-field').value;
    
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    .then(res => res.json())
    .then(data => {
            const mealsdata = data.meals;
            const mainDiv = document.getElementById('meal-area');
            for (let i = 0; i < mealsdata.length; i++) {
                const mealName = mealsdata[i];
                // const mealId = mealName.idMeal;
                const strMeal = mealName.strMeal;
                const separateDiv = document.createElement('div');
                const h2 = document.createElement('h2');
                const h5 = document.createElement('h5');
                h2.innerText = `Food: ${strMeal}`;
                h5.innerText = `Id: ${mealName.idMeal}`;

                separateDiv.appendChild(h5);
                separateDiv.appendChild(h2);
                mainDiv.appendChild(separateDiv);

                
            }
        }
    )
}