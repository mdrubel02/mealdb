document.getElementById('button-addon').addEventListener('click',()=>{
    console.log('clicked');
    const erro=document.getElementById('erro')
    const input=document.getElementById('input');
    const searchText=input.value;
    input.value='';

    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    console.log(url);
    

    fetch(url)
    .then(res=>res.json())
    .then(data =>display(data.meals))
});


const display=(meals)=>{
    // console.log(meals);
    const main=document.getElementById('main');
    meals.forEach(meal=>{
        // console.log(meal)
        const para=meal.strInstructions.slice(0,100);
        // console.log(para);
        const div=document.createElement('div')
        div.classList.add('col')
        div.innerHTML=`
        <div class="col">
        <div class="card" style="width: 18rem;">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <h4 class=" text-muted">Food Name: ${meal.strCategory}  Country: ${meal.strArea} </h4>
              <p class="card-text">${para}</p>
              <button onclick="userBtn()">click me </button>
            </div>
          </div>
       </div>
        `;
        main.appendChild(div);
    })
   
    // for(const meal of meal){
    //     console.log(meal);

    // }
};

const userBtn=(meal)=>{
    // console.log(meal)
    console.log('boos connect hoise');
}
