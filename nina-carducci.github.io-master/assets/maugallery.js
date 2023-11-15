///////////////////////////////////////////////////////////////////////  Création des boutons /////////////////////////////////////////////////////////////////////
const body = document.getElementsByTagName("body");
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
const cheminsImageMin = ["./assets/image-min/image-concert.min/concert-image.webp", "./assets/image-min/image-entreprise.min/entreprise-image.webp", "./assets/image-min/image-entreprise.min/deuxiéme-image-entreprise.webp", "./assets/image-min/image-mariage.min/mariage-image.webp", "./assets/image-min/image-portraits.min/image-portraits.webp", "./assets/image-min/image-mariage.min/deuxieme-image-mariage.webp", "./assets/image-min/image-portraits.min/deuxieme-image-portraits.webp", "./assets/image-min/image-concert.min/deuxième-image-concert.webp", "./assets/image-min/image-entreprise.min/troisiéme-image-entreprise.webp"];
// Créez des images et ajoutez-les à la page en utilisant une boucle
for (let i = 0; i < cheminsDesImages.length; i++) {
  const picture = document.createElement("picture");
  const source = document.createElement("source");
  const image = document.createElement("img");
  image.src = cheminsDesImages[i]; // Utilisez le chemin de l'image
  // Créez un ID unique pour chaque image en utilisant la valeur de i
  image.id = `image-${i}`;
  image.className ="images_gallery";
  source.id = `source-${i}`;
  source.setAttribute("media", "(max-width: 900px)");
  picture.id = `picture-${i}`;
  picture.className = "all-pictures"
  picture.appendChild(source);
  picture.appendChild(image);
  imagesContainer.appendChild(picture)
}

// Activation de la functon au clique sur une image, ouverture de la modale
function openModal(){
  console.log("Picture Cliqué");
  modal.style.display = "block";
  overlay.style.display = "block";
  overlay.addEventListener("click", function(){
    closeModal()
  })
}
function closeModal(){
  modal.style.display = "none";
  overlay.style.display = "none";
}

//Rend les picture activable pour ouvrire la modal
const allPictures = document.querySelectorAll(".all-pictures");
allPictures.forEach(function(event){
  event.addEventListener("click", openModal);
});

// Sélectionnez chaque élément par son ID et lui donne un texte alternatif différents a chaques images
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
element6.setAttribute("alt", "photo de mariage, photo de mariage professionnel, photographie de qualité")
const element7 = document.getElementById("image-6");
element7.setAttribute("alt", "photo de portrait, photographie de personnes, photo réussie")
const element8 = document.getElementById("image-7");
element8.setAttribute("alt", "photographie d'un concert, photographe pour célébrités, photo spéctacle")
const element9 = document.getElementById("image-8");
element9.setAttribute("alt", "photographe pour millieu professionnel, photographie pour personnels d'entreprise, photo pour personnels d'entreprise");
// Sélectionne les balises <picture> en fonction de leurs ID
const picture1 = document.getElementById("picture-0")
const picture2 = document.getElementById("picture-1")
const picture3 = document.getElementById("picture-2")
const picture4 = document.getElementById("picture-3")
const picture5 = document.getElementById("picture-4")
const picture6 = document.getElementById("picture-5")
const picture7 = document.getElementById("picture-6")
const picture8 = document.getElementById("picture-7")
const picture9 = document.getElementById("picture-8")

//Les Sources
const source1 = document.getElementById("source-0");
source1.setAttribute("srcset", cheminsImageMin[0]);
const source2 = document.getElementById("source-1");
source2.setAttribute("srcset", cheminsImageMin[1]);
const source3 = document.getElementById("source-2");
source3.setAttribute("srcset", cheminsImageMin[2]);
const source4 = document.getElementById("source-3");
source4.setAttribute("srcset", cheminsImageMin[3]);
const source5 = document.getElementById("source-4");
source5.setAttribute("srcset", cheminsImageMin[4]);
const source6 = document.getElementById("source-5");
source6.setAttribute("srcset", cheminsImageMin[5]);
const source7 = document.getElementById("source-6");
source7.setAttribute("srcset", cheminsImageMin[6]);
const source8 = document.getElementById("source-7");
source8.setAttribute("srcset", cheminsImageMin[7]);
const source9 = document.getElementById("source-8");
source9.setAttribute("srcset", cheminsImageMin[8]);
//////////////////////////////////////////////////////////////// Filtres les Images //////////////////////////////////////////////////////////////////////////
const boutonTous = document.getElementById("bouton-Tous");
function tous(){
boutonTous.addEventListener("click", function (){
    picture1.style.display="initial";
    picture2.style.display="initial";
    picture3.style.display="initial";
    picture4.style.display="initial";
    picture5.style.display="initial";
    picture6.style.display="initial";
    picture7.style.display="initial";
    picture8.style.display="initial";
    picture9.style.display="initial";
})
};

const boutonConcert = document.getElementById("bouton-Concert");
function concert(){
boutonConcert.addEventListener("click", function (){
    picture1.style.display="initial";
    picture2.style.display="none";
    picture3.style.display="none";
    picture4.style.display="none";
    picture5.style.display="none";
    picture6.style.display="none";
    picture7.style.display="none";
    picture8.style.display="initial";
    picture9.style.display="none";
})
};

const boutonEntreprise = document.getElementById("bouton-Entreprises");
function entreprise(){
boutonEntreprise.addEventListener("click", function (){
    picture1.style.display="none";
    picture2.style.display="initial";
    picture3.style.display="initial";
    picture4.style.display="none";
    picture5.style.display="none";
    picture6.style.display="none";
    picture7.style.display="none";
    picture8.style.display="none";
    picture9.style.display="initial";
})
};

const boutonMariage = document.getElementById("bouton-Mariages");
function mariage(){
boutonMariage.addEventListener("click", function (){
    picture1.style.display="none";
    picture2.style.display="none";
    picture3.style.display="none";
    picture4.style.display="initial";
    picture5.style.display="none";
    picture6.style.display="initial";
    picture7.style.display="none";
    picture8.style.display="none";
    picture9.style.display="none";
})
};

const boutonPortrait = document.getElementById("bouton-Portrait");
function portrait(){
boutonPortrait.addEventListener("click", function (){
    picture1.style.display="none";
    picture2.style.display="none";
    picture3.style.display="none";
    picture4.style.display="none";
    picture5.style.display="initial";
    picture6.style.display="none";
    picture7.style.display="initial";
    picture8.style.display="none";
    picture9.style.display="none";
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

// Créer l'overlay
var overlay = document.createElement("div");
overlay.id = "overlay";
overlay.style.display = "none";
overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
overlay.style.zIndex = "1";
document.body.appendChild(overlay);

//Création de la Modal
var modal = document.createElement("div");
    modal.id = "myModal";
    modal.style.display = "none";
    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.padding = "20px";
    modal.style.backgroundColor = "white";
    modal.style.border = "1px solid #ccc";
    modal.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    modal.style.zIndex = "2";
    modal.innerHTML = `<p>Contenu de la modal</p><button onclick="closeModal()">Fermer</button>`;
    imagesContainer.appendChild(modal);