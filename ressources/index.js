//Color theme control
function setTheme(theme) {
  return document.documentElement.className = theme;
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let subSlides = document.getElementsByClassName("sub-slides");
  let dots = document.getElementsByClassName("dot");
  let navLinks = document.getElementsByClassName("nav-link");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    subSlides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    navLinks[i].className = navLinks[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  subSlides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  navLinks[slideIndex-1].className += " active";
}

// Stat bars creation(html fragment might be faster)
function createStats(title, array) {
  var temp = document.createElement('div');
  var name = document.createElement('h2');

  name.innerHTML = title;
  temp.appendChild(name);

  for (const [key, value] of Object.entries(array)) {
    
    var p = document.createElement('p');
    var bar = document.createElement('div');
    var fill = document.createElement('div');
  
    p.innerHTML = key;
    bar.className = 'stat-bar';
    fill.classList.add('stat-value', value);
  
    bar.appendChild(fill);
    temp.appendChild(p);
    temp.appendChild(bar);
  }
  document.getElementById('stats-container').appendChild(temp);
}; 
//Savoir-faire stats (name:value)
const sfaire = {
  'HTML/CSS': 'half',
  'JavaScript': 'half',
  'PHP': 'quarter',
  'MySQL': 'half',
  'MongoDB': 'half',
  'NODE.JS': 'half'
};
//Language stats
const lang = {
  'Anglais': 'full',
  'Japonais': 'half'
};
//Savoir-être stats
const sEtre = {
  "Travail d'équipe": 'full',
  'Autonomie': 'full',
  "Capacité d'adaptation": 'three-qurt'
};

createStats("Savoir-faire", sfaire);
createStats("Langues", lang);
createStats("Savoir-être", sEtre);
