const images = [
  {
    url: "landing1.jpg",    
		location: "Kirkjufellsfoss, Iceland",
		photoby: "Martin Jernberg",	
		exp: "On my recent trip to Iceland I managed to capture the beauty of this amazing natural waterfall and nearby countryside. Praise God. The world is amazing."	
  },
	{
    url: "landing2.jpg",    
		location: "Lago di Braies, Italy",
		photoby: "Luca Bravo",	
		exp: "On a boat on Lago di Braies"	
  },
	{
    url: "landing3.jpg",    
		location: "Valley of Fire State Park, United States",
		photoby: "Jake Blucker",	
		exp: "Valley of Fires"	
  },
	{
    url: "landing4.jpg",    
		location: "Seljalandsfoss Waterfall, Iceland",
		photoby: "Taylor Leopold",	
		exp: "Seljalandsfoss Waterfall"	
  },
	{
    url: "landing5.jpg",    
		location: "North Shore, Waialua, United States",
		photoby: "Sean Oulashin",	
		exp: "The last night of a two week stay on the North Shore of Oahu, Hawaii."	
  },
	{
    url: "landing6.jpg",    
		location: "Hetta - Pallas Trail, Finland",
		photoby: "Hendrik Morkel",	
		exp: "Watching the Northern Lights along the Hetta - Pallas Trail."	
  }
]

const selectedImage = images[Math.floor(Math.random() * images.length)];
//const backgroundImage = document.querySelector('.section-background');
const body = document.getElementsByTagName('body')[0];
const backgroundInfo = document.querySelector('.background-info');
const showInfo = document.querySelector('.section-background a');
const locations = document.querySelector('.location');
const photo = document.querySelector('.info span');
const explain = document.querySelector('.explain');

body.style.backgroundImage = `url(images/${selectedImage.url})`;
locations.innerText = selectedImage.location;
photo.innerText = selectedImage.photoby;
explain.innerText = selectedImage.exp;

showInfo.addEventListener('mouseenter', function() {
	backgroundInfo.classList.add('on');
});
backgroundInfo.addEventListener('mouseleave', function() {
	backgroundInfo.classList.remove('on');
});
