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
    .then(data =>display(data))
});


const display=(meals)=>{
    console.log(meals);
    const main=document.getElementById('main');
    // meals.forEach(meal =>{
    //     // console.log(meal);
    // })
    // const div=document.createElement('div');
    // div.innerHTML=`

    // `
}