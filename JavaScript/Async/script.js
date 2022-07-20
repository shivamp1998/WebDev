
// 'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');


// const getCountry = function (country) {
//     const request = new XMLHttpRequest();
//     request.open('GET',`https://restcountries.com/v2/name/${country}`);
//     request.send();


//     request.addEventListener('load',function() {
//         const data = JSON.parse(this.responseText)[0];
        
//         const html = `
//         <article class="country">
//                 <img class="country__img" src="${data.flag}" />
//                 <div class="country__data">
//                     <h3 class="country__name">${data.name}</h3>
//                     <h4 class="country__region">${data.region}</h4>
//                     <p class="country__row"><span>👫</span>${data.population} people</p>
//                     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//                     <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//                 </div>
//                 </article>
//         `
//         countriesContainer.insertAdjacentHTML('beforeend',html);
//         countriesContainer.style.opacity = 1;
//     })

// }

// getCountry('india');
// getCountry('Britain');


// const whereAmI = (lat,long) => {
//     fetch(`https://geocode.xyz/${long},${lat}?geoit=json`)
//     .then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//     })
// }

// whereAmI(111.1,22.1)


// console.log('Test start');


// setTimeout(() => console.log('0 sec timer'), 0);

// Promise.resolve(' Resolved Promise 1').then((response) => {
//     console.log(response)
// })

// console.log('Test End!');

// navigator.geolocation.getCurrentPosition((position) => console.log(position), err => console.log(err));


// const getLocation = () => {
//     return new Promise((resolve,reject) => {
//         navigator.geolocation.getCurrentPosition((pos) => resolve(pos), err => reject(err));
//     })
// }


// getLocation().then((response) => {
//     console.log('Resposne is ', response);
// })

// const images = document.querySelector('.images')
// const img = document.createElement('img');
// const imgArray = ['./img/img-1.jpg','./img/img-2.jpg','./img/img-3.jpg']
// const addImage = images.insertAdjacentElement('beforebegin',img);
// const loadImages = function(imgArray) {
//     return new Promise((resolve,reject) => {
//         setTimeout(resolve, seconds) 
//     })
// }
// loadImages(imgArray).then((data) => {
//     console.log(data)
//     addImage.src = `${data}`
// })


// const get3Countries = async function(c1,c2,c3) {
//     try {
//         const data1 = await (await fetch(`https://restcountries.com/v2/name/${c1}`)).json();
//         const data2 = await (await fetch(`https://restcountries.com/v2/name/${c2}`)).json();
//         const data3 = await (await fetch(`https://restcountries.com/v2/name/${c3}`)).json();
//         console.log(data1.capital,data2.capital,data3.capital);

//     }catch(err) {
//         console.error(err);
//     }
// }

// get3Countries('portugal','canada','tanzania');


// const loadAll = async (imgsArr) => {
//     const imgPro = imgsArr.map(async (img) => await createImage(img));
//     const imgEl  = await Promise.all(imgPro);
//     console.log(imgEl);
// }


loadAll();
