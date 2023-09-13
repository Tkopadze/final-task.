const fixedBody = document.getElementsByTagName("body");
const burgerIcon = document.querySelector(".burger-icon");
const wrap = document.querySelectorAll(".wrapA");
const quarter = document.querySelectorAll(".quarter");
const listItem = document.querySelectorAll(".a");
const rectangle = document.querySelectorAll(".rectangle");
const burgerMenu = document.querySelector(".popup-menu");
const options = document.querySelectorAll(".option");
let planet = {
  name: "Mercury",
  overview: {
    content:
      "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
    source: "https://en.wikipedia.org/wiki/Mercury_(planet)",
  },
  structure: {
    content:
      "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
    source: "https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure",
  },
  geology: {
    content:
      "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
    source: "https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology",
  },
  color: "#419EBB",
  rotation: "58.6 Days",
  revolution: "87.97 Days",
  radius: "2,439.7 KM",
  temperature: "430°c",
  images: {
    planet:
      "https://raw.githubusercontent.com/gvinianidzegivi/planets-api/main/assets/images/planet-mercury.svg",
    internal:
      "https://raw.githubusercontent.com/gvinianidzegivi/planets-api/main/assets/images/planet-mercury-internal.svg",
    geology:
      "https://raw.githubusercontent.com/gvinianidzegivi/planets-api/main/assets/images/geology-mercury.png",
  },
};

function toggleBurgerMenu() {
  
  if (burgerMenu.style.display == "block") {
    burgerMenu.style.display = "none"; // Hide the burger menu
    burgerIcon.style.opacity = "1";
    fixedBody[0].style.overflowY = "scroll";

  } else {
    burgerMenu.style.display = "block"; // Show the burger menu
    fixedBody[0].style.overflowY = "hidden";
    burgerIcon.style.opacity = "0.5";
  }
  

   
  
}

// Event listener for the burger icon
document.querySelector(".burger-icon").addEventListener("click", toggleBurgerMenu);
const PLANET_API_URI = "https://planets-api.vercel.app/api/v1/planets";
const takeData = () => {
  fetch(PLANET_API_URI)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

takeData();

function lightUp() {
  wrap.forEach((container) => {
    container.addEventListener("click", (event) => {
      if (event.target) {
        const quarters = document.querySelectorAll(".quarter");
        quarters.forEach((q) => (q.style.backgroundColor = "unset"));
  
        event.target.nextElementSibling.style.backgroundColor = planet.color;
      }
    });
  });
}

 function getPlanet() {
  listItem.forEach((x) => {
    x.addEventListener("click", (event) => {
      if (event.target.parentNode) {
        fetch(
          `https://planets-api.vercel.app/api/v1/planets/${event.target.innerText}`
        )
          .then((response) => response.json())
          .then((data) => {
            planet = data;
            changePlanet(planet);

         


            const rectangles = document.querySelectorAll(".rectangle");
            rectangles.forEach((p) => (p.style.backgroundColor = "unset"));
            event.target.parentNode.previousElementSibling.style.backgroundColor =
              planet.color;
              changingOptions();
              
              // additional();
          })
          .catch((error) => {
            console.log("Error fetching data:", error);
          });
      }

      options.forEach(y=>{
            
        y.style.background ='none';
      });

      if (burgerMenu.style.display=='block') {

        burgerMenu.style.display = "none";
      }


    });
  

  });
}

function changePlanet(planet) {
  let image = document.querySelector(".planetImg");
let planetname = document.querySelector("#planet-name");
let overViewText = document.querySelector(".description");
let overViewSource = document.querySelector(".sourceWiki");
let rotationTime = document.querySelector(".ROTATION");
let revolutionTime = document.querySelector(".revolutionTime");
let radiusLength = document.querySelector(".radiusLength");
let temp = document.querySelector(".TEMP");

  image.src = planet.images.planet;
  planetname.innerText = planet.name;
  overViewSource.href = planet.overview.source;
  overViewText.innerText = planet.overview.content;
  revolutionTime.innerText = planet.revolution;
  temp.innerText = planet.temperature;
  rotationTime.innerText = planet.rotation;
  radiusLength.innerText = planet.radius;
}

function changingOptions() {
    const image = document.querySelector(".planetImg");
    const Text = document.querySelector(".description");
    const overlay = document.querySelector(".overlay");
    const active = document.querySelector(".active");
    const overviewBtn = document.querySelector("#overviewBtn");
    const internalBtn = document.querySelector("#internalBtn");
    const geologyBtn = document.querySelector("#geologyBtn");
    const overViewSource = document.querySelector('.sourceWiki');
    const overviewbutton2 = document.querySelector('#overViewId');
    const internalbutton2 = document.querySelector('#structureId');
    const surfaceButton2  = document.querySelector('#surfaceId');
     active.style.backgroundColor=planet.color;
    
    overlay.src = planet.images.geology;
    // overlay.style.display = "none";
    image.src = planet.images.planet;
    active.style.backgroundColor = planet.color;

    overviewbutton2.addEventListener("click", () => {
      image.src = planet.images.planet;
      Text.innerText = planet.overview.content;
      overViewSource.href = planet.overview.source;
      if(overlay.classList.contains('show-overlay')){
        overlay.classList.remove('show-overlay');
      }
    });
    
    
    overviewBtn.addEventListener("click", () => {
      image.src = planet.images.planet;
      Text.innerText = planet.overview.content;
      overViewSource.href = planet.overview.source;
      if(overlay.classList.contains('show-overlay')){
        overlay.classList.remove('show-overlay');
      }
    });
  
    internalbutton2.addEventListener("click", () => {
      image.src = planet.images.internal;
      Text.innerText = planet.structure.content;
      overViewSource.href = planet.structure.source;
      // overlay.style.display = "none";
      if(overlay.classList.contains('show-overlay')){
        overlay.classList.remove('show-overlay');
      }
    });
     internalBtn.addEventListener("click", () => {
      image.src = planet.images.internal;
      Text.innerText = planet.structure.content;
      overViewSource.href = planet.structure.source;
      // overlay.style.display = "none";
      if(overlay.classList.contains('show-overlay')){
        overlay.classList.remove('show-overlay');
      }
    });

    surfaceButton2.addEventListener("click", () => {
      image.src = planet.images.planet;
      Text.innerText = planet.geology.content;
      overViewSource.href = planet.geology.source;
      overlay.src = planet.images.geology;
      // overlay.style.display = "block";
      overlay.classList.add('show-overlay');
    });
  
    geologyBtn.addEventListener("click", () => {
      image.src = planet.images.planet;
      Text.innerText = planet.geology.content;
      overViewSource.href = planet.geology.source;
      overlay.src = planet.images.geology;
      // overlay.style.display = "block";
      overlay.classList.add('show-overlay');
    });
  }

  // function additional(){
  //   listItem.forEach((x)=>{
  //     x.addEventListener('click',(event)=>{
          
  //     })
        
        
  //   })
  // }
    
    
   
     
  

function lightUp2() {
  const h5 = document.querySelectorAll("h5");
  const number = document.querySelectorAll(".number");

  options.forEach((x) => {
    x.addEventListener("click", (event) => {
      if (event.target) {
        options.forEach((q) => (q.style.backgroundColor = "unset"));
        if (
          Array.from(h5).includes(event.target) ||
          Array.from(number).includes(event.target) && 
          event.target.parentNode.style.backgroundColor != planet.color
        ) {
          event.target.parentNode.style.backgroundColor = planet.color;
        } else {
          event.target.style.backgroundColor = planet.color;
        }
      }
    });
  });
}
getPlanet();
lightUp();
lightUp2();

