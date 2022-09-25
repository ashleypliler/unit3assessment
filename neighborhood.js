

const resturantRecommend = document.querySelector('alpineButton');

const resturants = ["Blue Lemon", "Burgess Orchards", "Pizza Pie Cafe", "Dominos", "Wendys", "Taco Time", "Roxberry"];
resturantRecommend.addEventListener('click', () => {

    var randElement = resturants[Math.floor(Math.random() * resturants.length)];
    console.log(randElement);
})