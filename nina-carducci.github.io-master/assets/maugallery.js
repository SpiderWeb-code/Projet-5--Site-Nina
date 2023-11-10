///////////////////////////////////////////////////////////////////////  Création des boutons /////////////////////////////////////////////////////////////////////

// Récupérez l'élément parent des boutons
const boutonsContainer = document.getElementById("container-filter");

// Tableau contenant les noms des boutons
const nomsDesBoutons = ["Tous", "Concert", "Entreprises", "Mariages", "Portrait"];

// Créez des boutons et ajoutez-les à la page en utilisant une boucle
for (let i = 0; i < nomsDesBoutons.length; i++) {
  const bouton = document.createElement("button");
  bouton.textContent = nomsDesBoutons[i]; // Utilisez le nom du bouton comme texte
  
  // Créez un ID unique en combinant le nom du bouton et la valeur de i
  bouton.id = `bouton-${nomsDesBoutons[i]}`;
  bouton.className = "ensemble-boutons"
  
  boutonsContainer.appendChild(bouton);
}
//////////////////////////////////////////////////////////////////////////////Changement de couleurs des boutons///////////////////////////////////////////////////////
  const couleursBoutons = document.querySelectorAll('.ensemble-boutons');

couleursBoutons.forEach(bouton => {
  bouton.addEventListener('click', function() {
    // Retire la classe active de tous les boutons
    couleursBoutons.forEach(b => b.classList.remove('active'));
    //Ajoute "active" a la class
    this.classList.add('active');
  });
});

/////////////////////////////////////////////////////////////////////// Création des images ///////////////////////////////////////////////////////////////////////////

// Récupérez l'élément parent des images
const imagesContainer = document.getElementById("gallery-image");

// Tableau contenant les chemins des images
const cheminsDesImages = ["./assets/image/image-concert/concert-image.webp", "./assets/image/image-entreprise/entreprise-image.webp", "./assets/image/image-entreprise/deuxiéme-image-entreprise.webp", "./assets/image/image-mariage/mariage-image.webp", "./assets/image/image-portraits/image-portraits.webp", "./assets/image/image-mariage/deuxieme-image-mariage.webp", "./assets/image/image-portraits/deuxieme-image-portraits.webp", "./assets/image/image-concert/deuxième-image-concert.webp", "./assets/image/image-entreprise/troisiéme-image-entreprise.webp",];

// Créez des images et ajoutez-les à la page en utilisant une boucle
for (let i = 0; i < cheminsDesImages.length; i++) {
  const image = document.createElement("img");
  image.src = cheminsDesImages[i]; // Utilisez le chemin de l'image
  // Créez un ID unique pour chaque image en utilisant la valeur de i
  image.id = `image-${i}`;
  image.className ="images_gallery"
  imagesContainer.appendChild(image);
}

// Sélectionnez chaque élément par son ID
const element1 = document.getElementById("image-0");
element1.setAttribute("alt", "photographie de concert, photographe de concert, photographie concert")
const element2 = document.getElementById("image-1");
element2.setAttribute("alt", "photographe entreprise, photographe pour entreprise, photo d'entreprise")
const element3 = document.getElementById("image-2");
element3.setAttribute("alt", "photographie en entreprise, photographe en mileux professionnel, photo en entreprise")
const element4 = document.getElementById("image-3");
element4.setAttribute("alt", "photographe mariage, photo mariage pour tous, photo pour mariage")
const element5 = document.getElementById("image-4");
element5.setAttribute("alt", "photo pour instagram, photographe pour mannequin, photo pour reseau sociaux")
const element6 = document.getElementById("image-5");
element4.setAttribute("alt", "photo de mariage, photo de mariage professionnel, photographie de qualité")
const element7 = document.getElementById("image-6");
element7.setAttribute("alt", "photo de portrait, photographie de personnes, photo réussie")
const element8 = document.getElementById("image-7");
element8.setAttribute("alt", "photographie d'un concert, photographe pour célébrités, photo spéctacle")
const element9 = document.getElementById("image-8");
element9.setAttribute("alt", "photographe pour millieu professionnel, photographie pour personnels d'entreprise, photo pour personnels d'entreprise")
////////////////////////////////////////////////////////////////////////////////////// Filtres les Images //////////////////////////////////////////////////////////////////////////
const boutonTous = document.getElementById("bouton-Tous");
function tous(){
boutonTous.addEventListener("click", function (){
    element1.style.display="initial";
    element2.style.display="initial";
    element3.style.display="initial";
    element4.style.display="initial";
    element5.style.display="initial";
    element6.style.display="initial";
    element7.style.display="initial";
    element8.style.display="initial";
    element9.style.display="initial";
})
};

const boutonConcert = document.getElementById("bouton-Concert");
function concert(){
boutonConcert.addEventListener("click", function (){
    element1.style.display="initial";
    element2.style.display="none";
    element3.style.display="none";
    element4.style.display="none";
    element5.style.display="none";
    element6.style.display="none";
    element7.style.display="none";
    element8.style.display="initial";
    element9.style.display="none";
})
};

const boutonEntreprise = document.getElementById("bouton-Entreprises");
function entreprise(){
boutonEntreprise.addEventListener("click", function (){
    element1.style.display="none";
    element2.style.display="initial";
    element3.style.display="initial";
    element4.style.display="none";
    element5.style.display="none";
    element6.style.display="none";
    element7.style.display="none";
    element8.style.display="none";
    element9.style.display="initial";
})
};

const boutonMariage = document.getElementById("bouton-Mariages");
function mariage(){
boutonMariage.addEventListener("click", function (){
    element1.style.display="none";
    element2.style.display="none";
    element3.style.display="none";
    element4.style.display="initial";
    element5.style.display="none";
    element6.style.display="initial";
    element7.style.display="none";
    element8.style.display="none";
    element9.style.display="none";
})
};

const boutonPortrait = document.getElementById("bouton-Portrait");
function portrait(){
boutonPortrait.addEventListener("click", function (){
    element1.style.display="none";
    element2.style.display="none";
    element3.style.display="none";
    element4.style.display="none";
    element5.style.display="initial";
    element6.style.display="none";
    element7.style.display="initial";
    element8.style.display="none";
    element9.style.display="none";
})
};
if(boutonTous.click){
  tous()
}else{
  console.log('Erreur: Le clique sur le bouton "Tous" n`a pas pu se faire');
  alert('une erreur est survenue sur le bouton "Tous", si le probléme perciste, merci de contacter Sophie au *05 56 67 78 89*')
}
if(boutonConcert.click){
  concert()
}else{
  console.log('Erreur: Le clique sur le bouton "Concert" n`a pas pu se faire');
  alert('une erreur est survenue sur le bouton "Concert", si le probléme perciste, merci de contacter Sophie au *05 56 67 78 89*')
}
if(boutonEntreprise.click){
  entreprise()
}else{
  console.log('Erreur: Le clique sur le bouton "Entreprise" n`a pas pu se faire');
  alert('une erreur est survenue sur le bouton "Entreprise", si le probléme perciste, merci de contacter Sophie au *05 56 67 78 89*')
}
if(boutonMariage.click){
  mariage()
}else{
  console.log('Erreur: Le clique sur le bouton "Mariage" n`a pas pu se faire');
  alert('une erreur est survenue sur le bouton "Mariage", si le probléme perciste, merci de contacter Sophie au *05 56 67 78 89*')
}
if(boutonPortrait.click){
  portrait()
}else{
  console.log('Erreur: Le clique sur le bouton "Portrait" n`a pas pu se faire');
  alert('une erreur est survenue sur le bouton "Portrait", si le probléme perciste, merci de contacter Sophie au *05 56 67 78 89*')
}