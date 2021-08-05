const hamburger = document.querySelector(".menu");
const menuList = document.querySelector(".nav");
const toggleMenu = () => {
  if (hamburger.src.includes('harmburger.svg')) {
    hamburger.src = "./images/close.svg";
  } else {
    hamburger.src = "./images/harmburger.svg";
  }
  menuList.classList.toggle('menu-list');
};

hamburger.addEventListener('click',toggleMenu);


const players = [
  {
    imgURL: '../images/profile-picture.jpg',
    playerName: 'KARANGWA Ntwali Josue',
    playerLocation: 'Rwanda, Kigali',
    playerBio: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut\
    tenetur eius maxime voluptate id, ut doloribus ullam ea quas\
    recusandae facilis enim.',
  },
  {
    imgURL: '../images/profile-picture.jpg',
    playerName: 'KARANGWA Ntwali Josue',
    playerLocation: 'Rwanda, Kigali',
    playerBio: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut\
    tenetur eius maxime voluptate id, ut doloribus ullam ea quas\
    recusandae facilis enim.',
  },
  {
    imgURL: '../images/profile-picture.jpg',
    playerName: 'KARANGWA Ntwali Josue',
    playerLocation: 'Rwanda, Kigali',
    playerBio: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut\
    tenetur eius maxime voluptate id, ut doloribus ullam ea quas\
    recusandae facilis enim.',
  },
  {
    imgURL: '../images/profile-picture.jpg',
    playerName: 'KARANGWA Ntwali Josue',
    playerLocation: 'Rwanda, Kigali',
    playerBio: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut\
    tenetur eius maxime voluptate id, ut doloribus ullam ea quas\
    recusandae facilis enim.',
  },
];

const playerSection = document.createElement('div');

const addPlayer = () => {
  playerSection.id = 'player-section';
  for (let i = 0; i < players.length; i += 1) {
    playerSection.innerHTML += '<section class="featured-players">'
+`<div class="player">`
+ `<img src="${players[i].imgURL}" width="150" alt="image">`
+ '<div class="player-desc">'
+ `<h4 class="player-name">${players[i].playerName}</h4>`
+ `<h5 class="player-location">${players[i].playerLocation}</h5>`
+ '<hr>'
+ `<p class="player-bio">${players[i].playerBio}</p>`
+ '</div>'
+ `</div>`
+ '</section>';
  }
  console.log(playerSection.classList);
  document.getElementById('featured').appendChild(playerSection);
};

addPlayer(); 