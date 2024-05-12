let header1 = document.getElementById('header1');
let header2 = document.getElementById('header2');

let about = document.getElementById('about');
let competences = document.getElementById('competences');
let realisations = document.getElementById('realisations');
let centres = document.getElementById('centres');
let contact = document.getElementById('contact');
let scrollButton = document.getElementById('scroll-btn');

let accueil = document.getElementById('home');
let accueilButton = document.getElementById('accueilButton');

header2.classList.add('hidden');

scrollButton.addEventListener('click', () => {
  about.classList.remove('hidden');
  competences.classList.remove('hidden');
  realisations.classList.remove('hidden');
  centres.classList.remove('hidden');
  contact.classList.remove('hidden');
  accueil.classList.add('hidden')

  
  console.log(accueil.classList)

  header2.classList.remove('hidden');
  header1.classList.add('hidden');
}
);  

accueilButton.addEventListener('click', function () {
  var sections = document.querySelectorAll('#about, #competences, #realisations, #centres, #contact');
  sections.forEach(function (section) {
    section.classList.add('hidden');
  });
  accueil.classList.remove('hidden');
  // Cacher sidemenu

  header2.classList.add('hidden');
  // Afficher l'élément #header si caché
  header1.classList.remove('hidden');
});

function opentab(tabName) {
  var i, tabcontents, tablinks;
  tabcontents = document.getElementsByClassName("tab-contents");
  for (i = 0; i < tabcontents.length; i++) {
      tabcontents[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab-links");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active-link", "");
  }
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active-link";
}

