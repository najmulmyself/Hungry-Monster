fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
.then(result => {
    JSON.stringify(result);
}).catch(err => {
    console.log(err)
});