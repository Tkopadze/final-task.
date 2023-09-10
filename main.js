
  
const fixedBody = document.getElementsByTagName('body');
const burgerIcon = document.querySelector('.burger-icon');

function toggleBurgerMenu() {
    console.log("function")
    const burgerMenu = document.querySelector('.popup-menu');
    if (burgerMenu.style.display == 'block') {
      burgerMenu.style.display = 'none'; // Hide the burger menu
      burgerIcon.style.opacity = '1';
      fixedBody[0].style.overflowY = 'scroll';
    } else {
      burgerMenu.style.display = 'block'; // Show the burger menu
      fixedBody[0].style.overflowY = 'hidden';
      burgerIcon.style.opacity = '0.5';
    }
  }
  
  // Event listener for the burger icon
  document.querySelector('.burger-icon').addEventListener('click', toggleBurgerMenu);
  
  // Define the planet name you want to fetch data for
//   const planetName = 'mercury'; // Replace with the desired planet name
  
  // Fetch API data and populate the menu with colors
//   fetch(`https://planets-api.vercel.app/api/v1/planets/${planetName}`)
//     .then(response => response.json())
//     .then(data => {
//       const menuList = document.querySelector('.menu-list');
  
//       // Assuming the API response is an object with properties like "name" and "color"
//       const listItem = document.createElement('li');
//       listItem.textContent = data.name; // Access the name property
//       listItem.style.color = data.color; // Access the color property
//       menuList.appendChild(listItem);
//     })
//     .catch(error => {
//       console.error('Error fetching API data:', error);
//     });
  



//  const navLinks = document.querySelectorAll('.listItem');
// const planetName = document.querySelector('#planet-name');
// const planetImg = document.querySelector('#planet-img');
// // const planetImg2 = document.querySelector('#planet-img-2');

//  const overviewBtn = document.querySelector('#overview');
// const internalBtn = document.querySelector('#internal');
// const geologyBtn = document.querySelector('#geology');
//  const planetDesc = document.querySelector('#planet-desc');

// const PLANET_API_URI = 'https://planets-api.vercel.app/api/v1/planets';

// // planetImg2.style.display = 'none';


  
//  const getPlanet = async (planet = 'Mercury') => {
//   const response = await fetch(`${PLANET_API_URI}/${planet}`);
//    const data = await response.json();
//    console.log(data);
//   planetName.textContent = data.name;
//   planetImg.src = data.images.planet;
//    planetDesc.textContent = data.overview.content;

//   overviewBtn.addEventListener('click', () => {
//     planetDesc.textContent = data.ocontent;
//     verview.planetImg.src = data.images.planet;
//     planetImg2.style.display = 'none';
//   });
//   internalBtn.addEventListener('click', () => {
//     planetDesc.textContent = data.structure.content;
//     planetImg.src = data.images.internal;
//     planetImg2.style.display = 'none';
//   });
//   geologyBtn.addEventListener('click', () => {
//     planetDesc.textContent = data.geology.content;
//     planetImg2.style.display = 'block';
//     planetImg.src = data.images.planet;
//     planetImg2.src = data.images.geology;
//   });
// };

//  getPlanet();