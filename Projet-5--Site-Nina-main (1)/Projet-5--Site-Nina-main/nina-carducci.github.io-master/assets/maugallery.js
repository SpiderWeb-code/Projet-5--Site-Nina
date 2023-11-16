
/////////////////////////////////////////////////////////////////////////Création des functions ////////////////////////////////////////////////
//Filtres Images
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

//Ouverture et fermeture Modal
function openModal(){
  console.log("Picture Cliqué");
  modal.id = "myModal";
  modal.style.position = "fixed";
  modal.style.top = "50%";
  modal.style.left = "50%";
  modal.style.transform = "translate(-50%, -50%)";
  modal.style.padding = "20px";
  modal.style.backgroundColor = "white";
  modal.style.border = "1px solid #ccc";
  modal.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
  modal.style.zIndex = "3";
  modal.style.maxWidth = "498px";
  modal.style.width = "100%";
  modal.style.height = "653.33px";
  modal.style.display = "flex";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
  overlay.id = "overlay";
  overlay.style.display = "block";
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  overlay.style.zIndex = "2";
  header.style.zIndex = "1";
  boutonDroit.style.display = "flex";
  boutonDroit.style.height = "50px";
  boutonDroit.style.width = "50px";
  boutonDroit.style.position = "absolute";
  boutonDroit.style.left = "-50px";
  boutonDroit.style.fontSize = "50px";
  boutonDroit.style.border = "4px solid #BEB45A";
  boutonDroit.style.borderRight = "none";
  boutonDroit.style.borderRadius = "10px 0px 0px 10px";
  boutonDroit.style.padding = "0";
  boutonDroit.style.alignItems = "center";
  boutonDroit.style.justifyContent = "center";
  boutonDroit.innerHTML = `<i class="fa-solid fa-square-caret-left" style="color: #000000;" id="bouton-gauche"></i>`;
  boutonDroit.style.display = "flex";
  boutonGauche.style.display = "flex";
  boutonGauche.style.position = "absolute";
  boutonGauche.style.fontSize = "50px";
  boutonGauche.style.border = "4px solid #BEB45A";
  boutonGauche.style.height = "50px";
  boutonGauche.style.width = "50px";
  boutonGauche.style.right = "-50px";
  boutonGauche.style.border = "4px solid #BEB45A";
  boutonGauche.style.borderLeft = "none";
  boutonGauche.style.borderRadius = "0px 10px 10px 0px";
  boutonGauche.style.padding = "0px 0px 0px 2px";
  boutonGauche.style.alignItems = "center";
  boutonGauche.style.justifyContent = "center";
  boutonGauche.innerHTML = `<i class="fa-solid fa-square-caret-right" style="color: #000000;" id="bouton-droit"></i>`;
  //Ferme la modal
  overlay.addEventListener("click", function(){
    closeModal()
  })
};
function closeModal(){
  modal.style.display = "none";
  overlay.style.display = "none";
  header.style.zIndex = "10";
};

//Ajoute une photo différents dans la modal selon quel picture on a clqué
function supprimeImage(){
  document.getElementById("image-modal").remove
};
function agrandissementImage1(){
  const imageModal = document.getElementById("image-modal");
  imageModal.setAttribute("src", cheminsDesImages[0]);
  let boutonDroit = document.getElementById("bouton-droit");
  boutonDroit.addEventListener("click", function(){
    agrandissementImage2()
  })
};
function agrandissementImage2(){
  const imageModal = document.getElementById("image-modal");
  imageModal.setAttribute("src", cheminsDesImages[1]);
  let boutonDroit = document.getElementById("bouton-droit");
  boutonDroit.addEventListener("click", function(){
    agrandissementImage3()
  })
  let boutonGauche = document.getElementById("bouton-gauche");
  boutonGauche.addEventListener("click", function(){
    agrandissementImage1()
  })
};
function agrandissementImage3(){
  const imageModal = document.getElementById("image-modal");
  imageModal.setAttribute("src", cheminsDesImages[2]);
  let boutonDroit = document.getElementById("bouton-droit");
  boutonDroit.addEventListener("click", function(){
    agrandissementImage4()
  })
  let boutonGauche = document.getElementById("bouton-gauche");
  boutonGauche.addEventListener("click", function(){
    agrandissementImage2()
  })
};
function agrandissementImage4(){
  const imageModal = document.getElementById("image-modal");
  imageModal.setAttribute("src", cheminsDesImages[3]);
  let boutonDroit = document.getElementById("bouton-droit");
  boutonDroit.addEventListener("click", function(){
    agrandissementImage5()
  })
  let boutonGauche = document.getElementById("bouton-gauche");
  boutonGauche.addEventListener("click", function(){
    agrandissementImage3()
  })
};
function agrandissementImage5(){
  const imageModal = document.getElementById("image-modal");
  imageModal.setAttribute("src", cheminsDesImages[4]);
  let boutonDroit = document.getElementById("bouton-droit");
  boutonDroit.addEventListener("click", function(){
    agrandissementImage6()
  })
  let boutonGauche = document.getElementById("bouton-gauche");
  boutonGauche.addEventListener("click", function(){
    agrandissementImage4()
  })
};
function agrandissementImage6(){
  const imageModal = document.getElementById("image-modal");
  imageModal.setAttribute("src", cheminsDesImages[5]);
  let boutonDroit = document.getElementById("bouton-droit");
  boutonDroit.addEventListener("click", function(){
    agrandissementImage7()
  })
  let boutonGauche = document.getElementById("bouton-gauche");
  boutonGauche.addEventListener("click", function(){
    agrandissementImage5()
  })
};
function agrandissementImage7(){
  const imageModal = document.getElementById("image-modal");
  imageModal.setAttribute("src", cheminsDesImages[6]);
  let boutonDroit = document.getElementById("bouton-droit");
  boutonDroit.addEventListener("click", function(){
    agrandissementImage8()
  })
  let boutonGauche = document.getElementById("bouton-gauche");
  boutonGauche.addEventListener("click", function(){
    agrandissementImage6()
  })
};
function agrandissementImage8(){
  const imageModal = document.getElementById("image-modal");
  imageModal.setAttribute("src", cheminsDesImages[7]);
  let boutonDroit = document.getElementById("bouton-droit");
  boutonDroit.addEventListener("click", function(){
    agrandissementImage9()
  })
  let boutonGauche = document.getElementById("bouton-gauche");
  boutonGauche.addEventListener("click", function(){
    agrandissementImage7()
  })
};
function agrandissementImage9(){
  const imageModal = document.getElementById("image-modal");
  imageModal.setAttribute("src", cheminsDesImages[8]);
  let boutonGauche = document.getElementById("bouton-gauche");
  boutonGauche.addEventListener("click", function(){
    agrandissementImage8()
  })
};

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
const boutonConcert = document.getElementById("bouton-Concert");
const boutonEntreprise = document.getElementById("bouton-Entreprises");
const boutonMariage = document.getElementById("bouton-Mariages");
const boutonPortrait = document.getElementById("bouton-Portrait");

// Activation de la functon au clique sur une image, ouverture de la modale
const header = document.getElementById("id_top-header");

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
let overlay = document.createElement("div");
overlay.style.display = "none";
document.body.appendChild(overlay);

//Création de la Modal

let modal = document.createElement("div");
let boutonDroit = document.createElement("button");
let boutonGauche = document.createElement("button");
    modal.style.display = "none";
    modal.innerHTML = `<img id="image-modal" style="max-width: 542px; width: 100%; height: 100%; max-height: 637px;"></img>`;
    modal.appendChild(boutonDroit);
    modal.appendChild(boutonGauche);
    imagesContainer.appendChild(modal);

    //Appeler des functions qui dirons quel images mettre selon la ou l'on a cliqué
    picture1.addEventListener("click", function(){
      supprimeImage();
      agrandissementImage1();
    });
    picture2.addEventListener("click", function(){
      supprimeImage();
      agrandissementImage2();
    });
    picture3.addEventListener("click", function(){
      supprimeImage();
      agrandissementImage3();
    });
    picture4.addEventListener("click", function(){
      supprimeImage();
      agrandissementImage4();
    });
    picture5.addEventListener("click", function(){
      supprimeImage();
      agrandissementImage5();
    });
    picture6.addEventListener("click", function(){
      supprimeImage();
      agrandissementImage6();
    });
    picture7.addEventListener("click", function(){
      supprimeImage();
      agrandissementImage7();
    });
    picture8.addEventListener("click", function(){
      supprimeImage();
      agrandissementImage8();
    });
    picture9.addEventListener("click", function(){
      supprimeImage();
      agrandissementImage9();
    });