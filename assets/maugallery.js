////////////////////////////////////////////////////////////////////// Création du glicement d'image ///////////////////////////////////////////
let currentIndex = 0;

    function glisserGauche() {
        currentIndex = (currentIndex - 1 + 3) % 3;
        effectuerGlissement(-150);
    }

    function glisserDroite() {
        currentIndex = (currentIndex + 1) % 3;
        effectuerGlissement(150);
    }

    function effectuerGlissement(offsetPercentage) {
        let imagesContainer = document.querySelector(".slide-images");
        imagesContainer.style.transform = `translateX(${offsetPercentage}%)`;
        setTimeout(() => {
            imagesContainer.style.transform = `translateX(${-currentIndex * 100}%)`;
        }, 0);
    }
/////////////////////////////////////////////////////////////////////////Création des functions ////////////////////////////////////////////////
// Reinitialisation Couleurs Boutons
function couleurBlancheTous(){
  let lesBoutonsCouleur = [boutonTous, boutonConcert, boutonEntreprise, boutonMariage, boutonPortrait]
  for(let i=0; i<5; i++){
  lesBoutonsCouleur[i].style.backgroundColor = "white";
  lesBoutonsCouleur[i].style.borderColor = "white";
  lesBoutonsCouleur[i].style.color = "black";
  lesBoutonsCouleur[i].style.fontWeight = "100";
  console.log(lesBoutonsCouleur)
  }
}
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
      location.reload();
  })
  };
  function concert(){
    boutonConcert.addEventListener("click", function (){
      couleurBlancheTous()
        picture1.style.display="initial";
        picture2.style.display="none";
        picture3.style.display="none";
        picture4.style.display="none";
        picture5.style.display="none";
        picture6.style.display="none";
        picture7.style.display="none";
        picture8.style.display="initial";
        picture9.style.display="none";
        boutonConcert.style.backgroundColor="#BEB45A";
        boutonConcert.style.color="black";
        boutonConcert.style.borderColor="#BEB45A";
        boutonConcert.style.fontWeight = "700";
    })
    };
    function entreprise(){
      boutonEntreprise.addEventListener("click", function (){
        couleurBlancheTous()
          picture1.style.display="none";
          picture2.style.display="initial";
          picture3.style.display="initial";
          picture4.style.display="none";
          picture5.style.display="none";
          picture6.style.display="none";
          picture7.style.display="none";
          picture8.style.display="none";
          picture9.style.display="initial";
          boutonEntreprise.style.backgroundColor="#BEB45A";
          boutonEntreprise.style.color="black";
          boutonEntreprise.style.borderColor="#BEB45A";
          boutonEntreprise.style.fontWeight = "700";
      })
      };
      function mariage(){
        boutonMariage.addEventListener("click", function (){
          couleurBlancheTous()
            picture1.style.display="none";
            picture2.style.display="none";
            picture3.style.display="none";
            picture4.style.display="initial";
            picture5.style.display="none";
            picture6.style.display="initial";
            picture7.style.display="none";
            picture8.style.display="none";
            picture9.style.display="none";
            boutonMariage.style.backgroundColor="#BEB45A";
            boutonMariage.style.color="black";
            boutonMariage.style.borderColor="#BEB45A";
            boutonMariage.style.fontWeight = "700";
        })
        };
        function portrait(){
          boutonPortrait.addEventListener("click", function (){
            couleurBlancheTous()
              picture1.style.display="none";
              picture2.style.display="none";
              picture3.style.display="none";
              picture4.style.display="none";
              picture5.style.display="initial";
              picture6.style.display="none";
              picture7.style.display="initial";
              picture8.style.display="none";
              picture9.style.display="none";
              boutonPortrait.style.backgroundColor="#BEB45A";
              boutonPortrait.style.color="black";
              boutonPortrait.style.borderColor="#BEB45A";
              boutonPortrait.style.fontWeight = "700";
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
  modal.style.border = "4px solid rgb(190, 180, 90)";
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
  boutonDroit.innerHTML = `<i class="fa-solid fa-square-caret-left" style="color: #000000;" id="bouton-gauche"></i> <p id="bouton-droit-modal">bouton Gauche Modal</p>`;
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
  boutonGauche.innerHTML = `<i class="fa-solid fa-square-caret-right" style="color: #000000;" id="bouton-droit"></i> <p id="bouton-gauche-modal">bouton Droit Modal</p>`;
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

//Function qui supprime tout !
function supprimeImage(){
  document.getElementById("myModal").remove
  document.getElementById("image-modal").remove
  document.getElementById("bouton-droit").remove
  document.getElementById("bouton-gauche").remove
  console.log("bouton supprimer active");
};
//CHEMAIN DES IMAGE ICI A L'ORIGINE
const cheminsDesImagesMobil = ["./assets/image-mobil/image-concert/concert-image.webp", "./assets/image-mobil/image-entreprise/entreprise-image.webp", "./assets/image-mobil/image-entreprise/deuxiéme-image-entreprise.webp", "./assets/image-mobil/image-mariage/mariage-image.webp", "./assets/image-mobil/image-portraits/image-portraits.webp", "./assets/image-mobil/image-mariage/deuxieme-image-mariage.webp", "./assets/image-mobil/image-portraits/deuxieme-image-portraits.webp", "./assets/image-mobil/image-concert/deuxième-image-concert.webp", "./assets/image-mobil/image-entreprise/troisiéme-image-entreprise.webp"];
const cheminsDesImages = ["./assets/image/image-concert/concert-image.webp", "./assets/image/image-entreprise/entreprise-image.webp", "./assets/image/image-entreprise/deuxiéme-image-entreprise.webp", "./assets/image/image-mariage/mariage-image.webp", "./assets/image/image-portraits/image-portraits.webp", "./assets/image/image-mariage/deuxieme-image-mariage.webp", "./assets/image/image-portraits/deuxieme-image-portraits.webp", "./assets/image/image-concert/deuxième-image-concert.webp", "./assets/image/image-entreprise/troisiéme-image-entreprise.webp",];
const cheminsImageMin = ["./assets/image-min/image-concert.min/concert-image.webp", "./assets/image-min/image-entreprise.min/entreprise-image.webp", "./assets/image-min/image-entreprise.min/deuxiéme-image-entreprise.webp", "./assets/image-min/image-mariage.min/mariage-image.webp", "./assets/image-min/image-portraits.min/image-portraits.webp", "./assets/image-min/image-mariage.min/deuxieme-image-mariage.webp", "./assets/image-min/image-portraits.min/deuxieme-image-portraits.webp", "./assets/image-min/image-concert.min/deuxième-image-concert.webp", "./assets/image-min/image-entreprise.min/troisiéme-image-entreprise.webp"];
// Fonction pour afficher l'image dans la modal
function afficherImage(index) {
  let imageModal = document.getElementById("image-modal");
  imageModal.setAttribute("src", cheminsDesImages[index]);
}
// Fonction pour supprimer l'image de la modal
function supprimeImage() {
  let imageModal = document.getElementById("image-modal");
  imageModal.setAttribute("src", "");
}
// Fonction pour passer à l'image suivante
function imageSuivante() {
  if (indexImageActuelle < cheminsDesImages.length - 1) {
    supprimeImage();
    indexImageActuelle++;
    afficherImage(indexImageActuelle);
    console.log("ouverture modal " + (indexImageActuelle + 1));
  }
}
// Fonction pour revenir à l'image précédente
function imagePrecedente() {
  if (indexImageActuelle > 0) {
    supprimeImage();
    indexImageActuelle--;
    afficherImage(indexImageActuelle);
    console.log("ouverture modal " + (indexImageActuelle + 1));
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// FILTRES MODAL PORTRAIT
function filtreModalPortrait(){
  let imageModal = document.getElementById("image-modal");
  imageModal.setAttribute("alt", "image filtrés par la modal");
  let image4 = document.getElementById('image-4');
  let image6 = document.getElementById("image-6");
  let compteurDeClique = 0
  console.log(imageModal)
  // Ajoutez des écouteurs d'événements pour le clic sur le bouton et l'image
  image4.addEventListener('click', function() {
  if (image4.classList.contains('CLIQUER') && image6.classList.contains(`CLIQUER`)) {
      //Condition qui dit que SI je clique sur le bouton droit, alors sa ouvre l'image 7 ou que sa clique un certain nombre de fois MAIS SEULEMENT si j'ai la classe CLIQUER
      if(imageModal.className.includes('CLIQUER')){
        let boutonDroit = document.getElementById("bouton-precedent");
        let boutonGauche = document.getElementById("bouton-suivant");
        boutonDroit.addEventListener("click", function(){
          //Nombres de clique sur le bouton droit
          if(compteurDeClique = 1){
            imageModal.setAttribute("src", cheminsDesImages[6])
            console.log(compteurDeClique)
          }
          //AJOUTER UNE CONDITION AU CLIQUE DES BOUTONS GAUCHE EST DROIT
          boutonDroit.addEventListener("click", function(){
            if(compteurDeClique = 1){
              imageModal.setAttribute("src", cheminsDesImages[6])
              console.log(compteurDeClique)
            }
          })
          ////////////////////////////////////////////////////////////////
        })
        boutonGauche.addEventListener("click", function(){
          //Nombres de clique sur le bouton gauche
          if(compteurDeClique = 1){
            imageModal.setAttribute("src", cheminsDesImages[4])
            console.log(compteurDeClique)
          }
          // AJOUTER UNE CONDITION AU CLIQUE DES BOUTONS GAUCHE EST DROIT
          boutonGauche.addEventListener("click", function(){
            if(compteurDeClique = 1){
              imageModal.setAttribute("src", cheminsDesImages[4])
              console.log(compteurDeClique)
            }
          })
          //////////
        })
        /////////////////////////////////////////////////////////////////////////////////////////////////////////// TEST FONCTIONNE 2
        boutonDroit.addEventListener("click", function(){
          //Nombres de clique sur le bouton droit
          if(compteurDeClique = 1){
            imageModal.setAttribute("src", cheminsDesImages[6])
            console.log(compteurDeClique)
          }
          boutonDroit.addEventListener("click", function(){
            if(compteurDeClique = 1){
              imageModal.setAttribute("src", cheminsDesImages[6])
              console.log(compteurDeClique)
            }
          })
        })
        boutonGauche.addEventListener("click", function(){
          //Nombres de clique sur le bouton gauche
          if(compteurDeClique = 1){
            imageModal.setAttribute("src", cheminsDesImages[4])
          }boutonGauche.addEventListener("click", function(){
            if(compteurDeClique = 1){
              imageModal.setAttribute("src", cheminsDesImages[4])
              console.log(compteurDeClique)
            }
          })
      })
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        boutonDroit.addEventListener("click", function(){
          //Nombres de clique sur le bouton droit
          if(compteurDeClique = 1){
            imageModal.setAttribute("src", cheminsDesImages[6])
            console.log(compteurDeClique)
          }
        })
        boutonGauche.addEventListener("click", function(){
          //Nombres de clique sur le bouton gauche
          if(compteurDeClique = 1){
            imageModal.setAttribute("src", cheminsDesImages[4])
          }boutonGauche.addEventListener("click", function(){
            if(compteurDeClique = 1){
              imageModal.setAttribute("src", cheminsDesImages[4])
              console.log(compteurDeClique)
            }
          })
            //Nombres de clique sur le bouton droit
            boutonDroit.addEventListener("click", function(){
              //Nombres de clique sur le bouton droit
              if(compteurDeClique = 1){
                imageModal.setAttribute("src", cheminsDesImages[6])
                console.log(compteurDeClique)
              }
              boutonDroit.addEventListener("click", function(){
                //Nombres de clique sur le bouton droit
                if(compteurDeClique = 1){
                  imageModal.setAttribute("src", cheminsDesImages[6])
                  console.log(compteurDeClique)
                }
              })
            })
      })
        /////////////////////////////////////////////////////////////////////////////////////////////////////////// FIN DU TEST
      }
      }
    });
    boutonPortrait.addEventListener('click', function() {
      // Ajoutez une classe pour indiquer que l'image-0 a été cliquée
      image6.classList.add('CLIQUER');
      image4.classList.add(`CLIQUER`);
      imageModal.classList.add("CLIQUER")
      });
      image6.addEventListener('click', function() {
        if (image6.classList.contains('CLIQUER') && image4.classList.contains(`CLIQUER`)) {
            //Condition qui dit que SI je clique sur le bouton droit, alors sa ouvre l'image 7 ou que sa clique un certain nombre de fois MAIS SEULEMENT si j'ai la classe CLIQUER
            if(imageModal.className.includes('CLIQUER')){
              let boutonDroit = document.getElementById("bouton-precedent");
              let boutonGauche = document.getElementById("bouton-suivant");
              boutonDroit.addEventListener("click", function(){
                //Nombres de clique sur le bouton droit
                if(compteurDeClique = 1){
                  imageModal.setAttribute("src", cheminsDesImages[6])
                  console.log(compteurDeClique)
                }
                //AJOUT 
                if(compteurDeClique = 1){
                  imageModal.setAttribute("src", cheminsDesImages[6])
                  console.log(compteurDeClique)
                }
                ///////
              })
              boutonGauche.addEventListener("click", function(){
                //Nombres de clique sur le bouton gauche
                if(compteurDeClique = 1){
                  imageModal.setAttribute("src", cheminsDesImages[4])
                  console.log(compteurDeClique)
                }
                //AJOUT
                if(compteurDeClique = 1){
                  imageModal.setAttribute("src", cheminsDesImages[4])
                  console.log(compteurDeClique)
                }
                ///////
                /////////////////////////////////////////////////////////////////////////////////////////////////////////// TEST FONCTIONNE
        boutonDroit.addEventListener("click", function(){
          //Nombres de clique sur le bouton droit
          if(compteurDeClique = 1){
            imageModal.setAttribute("src", cheminsDesImages[6])
            console.log(compteurDeClique)
          }
        })
        boutonGauche.addEventListener("click", function(){
          //Nombres de clique sur le bouton gauche
          if(compteurDeClique = 1){
            imageModal.setAttribute("src", cheminsDesImages[4])
          }boutonGauche.addEventListener("click", function(){
            if(compteurDeClique = 1){
              imageModal.setAttribute("src", cheminsDesImages[4])
              console.log(compteurDeClique)
            }
          })
            //Nombres de clique sur le bouton droit
            boutonDroit.addEventListener("click", function(){
              //Nombres de clique sur le bouton droit
              if(compteurDeClique = 1){
                imageModal.setAttribute("src", cheminsDesImages[6])
                console.log(compteurDeClique)
              }
              boutonDroit.addEventListener("click", function(){
                //Nombres de clique sur le bouton droit
                if(compteurDeClique = 1){
                  imageModal.setAttribute("src", cheminsDesImages[6])
                  console.log(compteurDeClique)
                }
              })
            })
      })
        /////////////////////////////////////////////////////////////////////////////////////////////////////////// FIN DU TEST
              })
            }
            }
          });
          boutonPortrait.addEventListener('click', function() {
            // Ajoutez une classe pour indiquer que l'image-0 a été cliquée
            image6.classList.add('CLIQUER');
            image4.classList.add(`CLIQUER`);
            imageModal.classList.add("CLIQUER")
            });
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// FILTRE MODAL MARIAGE
function filtreModalMariage(){
  let imageModal = document.getElementById("image-modal");
  imageModal.setAttribute("alt", "image filtrés par la modal");
  let image3 = document.getElementById('image-3');
  let image5 = document.getElementById("image-5");
  let compteurDeClique = 0
  console.log(imageModal)
  // Ajoutez des écouteurs d'événements pour le clic sur le bouton et l'image
  image3.addEventListener('click', function() {
  if (image3.classList.contains('CLIQUER') && image5.classList.contains(`CLIQUER`)) {
      //Condition qui dit que SI je clique sur le bouton droit, alors sa ouvre l'image 7 ou que sa clique un certain nombre de fois MAIS SEULEMENT si j'ai la classe CLIQUER
      if(imageModal.className.includes('CLIQUER')){
        let boutonDroit = document.getElementById("bouton-precedent");
        let boutonGauche = document.getElementById("bouton-suivant");
        boutonDroit.addEventListener("click", function(){
          //Nombres de clique sur le bouton droit
          if(compteurDeClique = 1){
            imageModal.setAttribute("src", cheminsDesImages[5])
            console.log(compteurDeClique)
          }
          //AJOUTER UNE CONDITION AU CLIQUE DES BOUTONS GAUCHE EST DROIT
          boutonDroit.addEventListener("click", function(){
            if(compteurDeClique = 1){
              imageModal.setAttribute("src", cheminsDesImages[5])
              console.log(compteurDeClique)
            }
          })
          ////////////////////////////////////////////////////////////////
        })
        boutonGauche.addEventListener("click", function(){
          //Nombres de clique sur le bouton gauche
          if(compteurDeClique = 1){
            imageModal.setAttribute("src", cheminsDesImages[3])
            console.log(compteurDeClique)
          }
          // AJOUTER UNE CONDITION AU CLIQUE DES BOUTONS GAUCHE EST DROIT
          boutonGauche.addEventListener("click", function(){
            if(compteurDeClique = 1){
              imageModal.setAttribute("src", cheminsDesImages[3])
              console.log(compteurDeClique)
            }
          })
          //////////
        })
        /////////////////////////////////////////////////////////////////////////////////////////////////////////// TEST FONCTIONNE 2
        boutonDroit.addEventListener("click", function(){
          //Nombres de clique sur le bouton droit
          if(compteurDeClique = 1){
            imageModal.setAttribute("src", cheminsDesImages[5])
            console.log(compteurDeClique)
          }
          boutonDroit.addEventListener("click", function(){
            if(compteurDeClique = 1){
              imageModal.setAttribute("src", cheminsDesImages[5])
              console.log(compteurDeClique)
            }
          })
        })
        boutonGauche.addEventListener("click", function(){
          //Nombres de clique sur le bouton gauche
          if(compteurDeClique = 1){
            imageModal.setAttribute("src", cheminsDesImages[3])
          }boutonGauche.addEventListener("click", function(){
            if(compteurDeClique = 1){
              imageModal.setAttribute("src", cheminsDesImages[3])
              console.log(compteurDeClique)
            }
          })
      })
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        boutonDroit.addEventListener("click", function(){
          //Nombres de clique sur le bouton droit
          if(compteurDeClique = 1){
            imageModal.setAttribute("src", cheminsDesImages[5])
            console.log(compteurDeClique)
          }
        })
        boutonGauche.addEventListener("click", function(){
          //Nombres de clique sur le bouton gauche
          if(compteurDeClique = 1){
            imageModal.setAttribute("src", cheminsDesImages[3])
          }boutonGauche.addEventListener("click", function(){
            if(compteurDeClique = 1){
              imageModal.setAttribute("src", cheminsDesImages[3])
              console.log(compteurDeClique)
            }
          })
            //Nombres de clique sur le bouton droit
            boutonDroit.addEventListener("click", function(){
              //Nombres de clique sur le bouton droit
              if(compteurDeClique = 1){
                imageModal.setAttribute("src", cheminsDesImages[5])
                console.log(compteurDeClique)
              }
              boutonDroit.addEventListener("click", function(){
                //Nombres de clique sur le bouton droit
                if(compteurDeClique = 1){
                  imageModal.setAttribute("src", cheminsDesImages[5])
                  console.log(compteurDeClique)
                }
              })
            })
      })
        /////////////////////////////////////////////////////////////////////////////////////////////////////////// FIN DU TEST
      }
      }
    });
    boutonMariage.addEventListener('click', function() {
      // Ajoutez une classe pour indiquer que l'image-0 a été cliquée
      image3.classList.add('CLIQUER');
      image5.classList.add(`CLIQUER`);
      imageModal.classList.add("CLIQUER")
      });
      image5.addEventListener('click', function() {
        if (image5.classList.contains('CLIQUER') && image3.classList.contains(`CLIQUER`)) {
            //Condition qui dit que SI je clique sur le bouton droit, alors sa ouvre l'image 7 ou que sa clique un certain nombre de fois MAIS SEULEMENT si j'ai la classe CLIQUER
            if(imageModal.className.includes('CLIQUER')){
              let boutonDroit = document.getElementById("bouton-precedent");
              let boutonGauche = document.getElementById("bouton-suivant");
              boutonDroit.addEventListener("click", function(){
                //Nombres de clique sur le bouton droit
                if(compteurDeClique = 1){
                  imageModal.setAttribute("src", cheminsDesImages[5])
                  console.log(compteurDeClique)
                }
                //AJOUT 
                if(compteurDeClique = 1){
                  imageModal.setAttribute("src", cheminsDesImages[5])
                  console.log(compteurDeClique)
                }
                ///////
              })
              boutonGauche.addEventListener("click", function(){
                //Nombres de clique sur le bouton gauche
                if(compteurDeClique = 1){
                  imageModal.setAttribute("src", cheminsDesImages[3])
                  console.log(compteurDeClique)
                }
                //AJOUT
                if(compteurDeClique = 1){
                  imageModal.setAttribute("src", cheminsDesImages[3])
                  console.log(compteurDeClique)
                }
                ///////
                /////////////////////////////////////////////////////////////////////////////////////////////////////////// TEST FONCTIONNE
        boutonDroit.addEventListener("click", function(){
          //Nombres de clique sur le bouton droit
          if(compteurDeClique = 1){
            imageModal.setAttribute("src", cheminsDesImages[5])
            console.log(compteurDeClique)
          }
        })
        boutonGauche.addEventListener("click", function(){
          //Nombres de clique sur le bouton gauche
          if(compteurDeClique = 1){
            imageModal.setAttribute("src", cheminsDesImages[3])
          }boutonGauche.addEventListener("click", function(){
            if(compteurDeClique = 1){
              imageModal.setAttribute("src", cheminsDesImages[3])
              console.log(compteurDeClique)
            }
          })
            //Nombres de clique sur le bouton droit
            boutonDroit.addEventListener("click", function(){
              //Nombres de clique sur le bouton droit
              if(compteurDeClique = 1){
                imageModal.setAttribute("src", cheminsDesImages[5])
                console.log(compteurDeClique)
              }
              boutonDroit.addEventListener("click", function(){
                //Nombres de clique sur le bouton droit
                if(compteurDeClique = 1){
                  imageModal.setAttribute("src", cheminsDesImages[5])
                  console.log(compteurDeClique)
                }
              })
            })
      })
        /////////////////////////////////////////////////////////////////////////////////////////////////////////// FIN DU TEST
              })
            }
            }
          });
          boutonMariage.addEventListener('click', function() {
            // Ajoutez une classe pour indiquer que l'image-0 a été cliquée
            image5.classList.add('CLIQUER');
            image3.classList.add(`CLIQUER`);
            imageModal.classList.add("CLIQUER")
            });
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// FILTRE MODAL ENTREPRISE
function filtreModalEntreprise(){
  let imageModal = document.getElementById("image-modal");
  imageModal.setAttribute("alt", "image filtrés par la modal");
  let image1 = document.getElementById("image-1");
  let image2 = document.getElementById("image-2");
  let image8= document.getElementById("image-8");
  console.log(imageModal)
  // Ajoutez des écouteurs d'événements pour le clic sur le bouton et l'image
  image1.addEventListener('click', function() {
    //REEZT du compteur de clique
    let compteurDeClique = 0
    console.log(compteurDeClique)
  if (image1.classList.contains('CLIQUER') && image2.classList.contains(`CLIQUER`) && image8.classList.contains(`CLIQUER`)) {
      //Condition qui dit que SI je clique sur le bouton droit, alors sa ouvre l'image 7 ou que sa clique un certain nombre de fois MAIS SEULEMENT si j'ai la classe CLIQUER
      if(imageModal.className.includes('CLIQUER')){
        let boutonDroit = document.getElementById("bouton-precedent");
        let boutonGauche = document.getElementById("bouton-suivant");
        boutonDroit.addEventListener("click", function(){
          //Nombres de clique sur le bouton droit
          if(compteurDeClique = 1){
            imageModal.setAttribute("src", cheminsDesImages[2])
            console.log(compteurDeClique)
          }
          boutonDroit.addEventListener("click", function(){
            if(compteurDeClique = 1){
              imageModal.setAttribute("src", cheminsDesImages[8])
              console.log(compteurDeClique)
            }
          })
        })
        boutonGauche.addEventListener("click", function(){
          //Nombres de clique sur le bouton gauche
          if(compteurDeClique = 1){
            imageModal.setAttribute("src", cheminsDesImages[2])
          }boutonGauche.addEventListener("click", function(){
            if(compteurDeClique = 1){
              imageModal.setAttribute("src", cheminsDesImages[1])
              console.log(compteurDeClique)
            }
          })
      })
    }
      }
    });
    image2.addEventListener('click', function() {
      //REEZT du compteur de clique
      let compteurDeClique = 0
      console.log(compteurDeClique)
    if (image2.classList.contains('CLIQUER') && image2.classList.contains(`CLIQUER`) && image8.classList.contains(`CLIQUER`)) {
        //Condition qui dit que SI je clique sur le bouton droit, alors sa ouvre l'image 7 ou que sa clique un certain nombre de fois MAIS SEULEMENT si j'ai la classe CLIQUER
        if(imageModal.className.includes('CLIQUER')){
          let boutonDroit = document.getElementById("bouton-precedent");
          let boutonGauche = document.getElementById("bouton-suivant");
          // DEBUT
          boutonDroit.addEventListener("click", function(){
            //Nombres de clique sur le bouton droit
            if(compteurDeClique = 1){
              imageModal.setAttribute("src", cheminsDesImages[8])
              console.log(compteurDeClique)
            }
          })
          boutonGauche.addEventListener("click", function(){
            //Nombres de clique sur le bouton gauche
            if(compteurDeClique = 1){
              imageModal.setAttribute("src", cheminsDesImages[2])
            }boutonGauche.addEventListener("click", function(){
              if(compteurDeClique = 1){
                imageModal.setAttribute("src", cheminsDesImages[1])
                console.log(compteurDeClique)
              }
            })
              //Nombres de clique sur le bouton droit
              boutonDroit.addEventListener("click", function(){
                //Nombres de clique sur le bouton droit
                if(compteurDeClique = 1){
                  imageModal.setAttribute("src", cheminsDesImages[8])
                  console.log(compteurDeClique)
                }
                boutonDroit.addEventListener("click", function(){
                  //Nombres de clique sur le bouton droit
                  if(compteurDeClique = 1){
                    imageModal.setAttribute("src", cheminsDesImages[8])
                    console.log(compteurDeClique)
                  }
                })
                // FIN
              })
        })
      }
        }
      });
      image8.addEventListener('click', function() {
        //REEZT du compteur de clique
        let compteurDeClique = 0
        console.log(compteurDeClique)
      if (image1.classList.contains('CLIQUER') && image2.classList.contains(`CLIQUER`) && image8.classList.contains(`CLIQUER`)) {
          //Condition qui dit que SI je clique sur le bouton droit, alors sa ouvre l'image 7 ou que sa clique un certain nombre de fois MAIS SEULEMENT si j'ai la classe CLIQUER
          if(imageModal.className.includes('CLIQUER')){
            let boutonDroit = document.getElementById("bouton-precedent");
            let boutonGauche = document.getElementById("bouton-suivant");
            // DEBUT
            boutonDroit.addEventListener("click", function(){
              //Nombres de clique sur le bouton droit
              if(compteurDeClique = 1){
                imageModal.setAttribute("src", cheminsDesImages[2])
                console.log(compteurDeClique)
              }
              boutonDroit.addEventListener("click", function(){
                if(compteurDeClique = 1){
                  imageModal.setAttribute("src", cheminsDesImages[8])
                  console.log(compteurDeClique)
                }
              })
            })
            boutonGauche.addEventListener("click", function(){
              //Nombres de clique sur le bouton gauche
              if(compteurDeClique = 1){
                imageModal.setAttribute("src", cheminsDesImages[2])
              }boutonGauche.addEventListener("click", function(){
                if(compteurDeClique = 1){
                  imageModal.setAttribute("src", cheminsDesImages[1])
                  console.log(compteurDeClique)
                }
              })
          })
          // FIN
        }
          }
        });
        boutonEntreprise.addEventListener('click', function() {
          // Ajoutez une classe pour indiquer que l'image-0 a été cliquée
          image1.classList.add('CLIQUER');
          image2.classList.add(`CLIQUER`);
          image8.classList.add(`CLIQUER`);
          imageModal.classList.add("CLIQUER")
          });
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// FILTRE MODAL CONCERT
function filtreModalConcert(){
  let imageModal = document.getElementById("image-modal");
  imageModal.setAttribute("alt", "images filtrés par la modal");
  let image0 = document.getElementById('image-0');
  let image7 = document.getElementById("image-7");
  let compteurDeClique = 0
  console.log(imageModal)
  // Ajoutez des écouteurs d'événements pour le clic sur le bouton et l'image
  image0.addEventListener('click', function() {
  if (image0.classList.contains('CLIQUER') && image7.classList.contains(`CLIQUER`)) {
      //Condition qui dit que SI je clique sur le bouton droit, alors sa ouvre l'image 7 ou que sa clique un certain nombre de fois MAIS SEULEMENT si j'ai la classe CLIQUER
      if(imageModal.className.includes('CLIQUER')){
        let boutonDroit = document.getElementById("bouton-precedent");
        let boutonGauche = document.getElementById("bouton-suivant");
        boutonDroit.addEventListener("click", function(){
          //Nombres de clique sur le bouton droit
          if(compteurDeClique = 1){
            imageModal.setAttribute("src", cheminsDesImages[7])
            console.log(compteurDeClique)
          }
          //AJOUTER UNE CONDITION AU CLIQUE DES BOUTONS GAUCHE EST DROIT
          boutonDroit.addEventListener("click", function(){
            if(compteurDeClique = 1){
              imageModal.setAttribute("src", cheminsDesImages[7])
              console.log(compteurDeClique)
            }
          })
          ////////////////////////////////////////////////////////////////
        })
        boutonGauche.addEventListener("click", function(){
          //Nombres de clique sur le bouton gauche
          if(compteurDeClique = 1){
            imageModal.setAttribute("src", cheminsDesImages[0])
            console.log(compteurDeClique)
          }
          // AJOUTER UNE CONDITION AU CLIQUE DES BOUTONS GAUCHE EST DROIT
          boutonGauche.addEventListener("click", function(){
            if(compteurDeClique = 1){
              imageModal.setAttribute("src", cheminsDesImages[0])
              console.log(compteurDeClique)
            }
          })
          //////////
        })
        /////////////////////////////////////////////////////////////////////////////////////////////////////////// TEST FONCTIONNE 2
        boutonDroit.addEventListener("click", function(){
          //Nombres de clique sur le bouton droit
          if(compteurDeClique = 1){
            imageModal.setAttribute("src", cheminsDesImages[2])
            console.log(compteurDeClique)
          }
          boutonDroit.addEventListener("click", function(){
            if(compteurDeClique = 1){
              imageModal.setAttribute("src", cheminsDesImages[7])
              console.log(compteurDeClique)
            }
          })
        })
        boutonGauche.addEventListener("click", function(){
          //Nombres de clique sur le bouton gauche
          if(compteurDeClique = 1){
            imageModal.setAttribute("src", cheminsDesImages[2])
          }boutonGauche.addEventListener("click", function(){
            if(compteurDeClique = 1){
              imageModal.setAttribute("src", cheminsDesImages[1])
              console.log(compteurDeClique)
            }
          })
      })
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        boutonDroit.addEventListener("click", function(){
          //Nombres de clique sur le bouton droit
          if(compteurDeClique = 1){
            imageModal.setAttribute("src", cheminsDesImages[7])
            console.log(compteurDeClique)
          }
        })
        boutonGauche.addEventListener("click", function(){
          //Nombres de clique sur le bouton gauche
          if(compteurDeClique = 1){
            imageModal.setAttribute("src", cheminsDesImages[0])
          }boutonGauche.addEventListener("click", function(){
            if(compteurDeClique = 1){
              imageModal.setAttribute("src", cheminsDesImages[0])
              console.log(compteurDeClique)
            }
          })
            //Nombres de clique sur le bouton droit
            boutonDroit.addEventListener("click", function(){
              //Nombres de clique sur le bouton droit
              if(compteurDeClique = 1){
                imageModal.setAttribute("src", cheminsDesImages[7])
                console.log(compteurDeClique)
              }
              boutonDroit.addEventListener("click", function(){
                //Nombres de clique sur le bouton droit
                if(compteurDeClique = 1){
                  imageModal.setAttribute("src", cheminsDesImages[7])
                  console.log(compteurDeClique)
                }
              })
            })
      })
        /////////////////////////////////////////////////////////////////////////////////////////////////////////// FIN DU TEST
      }
      }
    });
    boutonConcert.addEventListener('click', function() {
      // Ajoutez une classe pour indiquer que l'image-0 a été cliquée
      image0.classList.add('CLIQUER');
      image7.classList.add(`CLIQUER`);
      imageModal.classList.add("CLIQUER")
      });
      image7.addEventListener('click', function() {
        if (image0.classList.contains('CLIQUER') && image7.classList.contains(`CLIQUER`)) {
            //Condition qui dit que SI je clique sur le bouton droit, alors sa ouvre l'image 7 ou que sa clique un certain nombre de fois MAIS SEULEMENT si j'ai la classe CLIQUER
            if(imageModal.className.includes('CLIQUER')){
              let boutonDroit = document.getElementById("bouton-precedent");
              let boutonGauche = document.getElementById("bouton-suivant");
              boutonDroit.addEventListener("click", function(){
                //Nombres de clique sur le bouton droit
                if(compteurDeClique = 1){
                  imageModal.setAttribute("src", cheminsDesImages[7])
                  console.log(compteurDeClique)
                }
                //AJOUT 
                if(compteurDeClique = 1){
                  imageModal.setAttribute("src", cheminsDesImages[7])
                  console.log(compteurDeClique)
                }
                ///////
              })
              boutonGauche.addEventListener("click", function(){
                //Nombres de clique sur le bouton gauche
                if(compteurDeClique = 1){
                  imageModal.setAttribute("src", cheminsDesImages[0])
                  console.log(compteurDeClique)
                }
                //AJOUT
                if(compteurDeClique = 1){
                  imageModal.setAttribute("src", cheminsDesImages[0])
                  console.log(compteurDeClique)
                }
                ///////
                /////////////////////////////////////////////////////////////////////////////////////////////////////////// TEST FONCTIONNE
        boutonDroit.addEventListener("click", function(){
          //Nombres de clique sur le bouton droit
          if(compteurDeClique = 1){
            imageModal.setAttribute("src", cheminsDesImages[7])
            console.log(compteurDeClique)
          }
        })
        boutonGauche.addEventListener("click", function(){
          //Nombres de clique sur le bouton gauche
          if(compteurDeClique = 1){
            imageModal.setAttribute("src", cheminsDesImages[0])
          }boutonGauche.addEventListener("click", function(){
            if(compteurDeClique = 1){
              imageModal.setAttribute("src", cheminsDesImages[0])
              console.log(compteurDeClique)
            }
          })
            //Nombres de clique sur le bouton droit
            boutonDroit.addEventListener("click", function(){
              //Nombres de clique sur le bouton droit
              if(compteurDeClique = 1){
                imageModal.setAttribute("src", cheminsDesImages[7])
                console.log(compteurDeClique)
              }
              boutonDroit.addEventListener("click", function(){
                //Nombres de clique sur le bouton droit
                if(compteurDeClique = 1){
                  imageModal.setAttribute("src", cheminsDesImages[7])
                  console.log(compteurDeClique)
                }
              })
            })
      })
        /////////////////////////////////////////////////////////////////////////////////////////////////////////// FIN DU TEST
              })
            }
            }
          });
          boutonConcert.addEventListener('click', function() {
            // Ajoutez une classe pour indiquer que l'image-0 a été cliquée
            image0.classList.add('CLIQUER');
            image7.classList.add(`CLIQUER`);
            imageModal.classList.add("CLIQUER")
            });
    }
/////////////////////////////////////////////////////////////////////// Fait le clique automatique sur le bouton de la barre déroulente ///////////////////////////
// Sélectionnez le bouton auto-next
const autoNextButton = document.getElementById('auto-next');

// Fonction pour déclencher un clic sur le bouton toutes les 3 secondes
function autoClick() {
  autoNextButton.click();
}

// Démarrez l'intervalle au chargement de la page
setInterval(autoClick, 8000);
//////////////////////////////////////////////////////////////// CHANGE LA COULEUR DE L'UN DES 3 BOUTONS DESLON L'IMAGE AFFICHER DANS LE TABLEAU DEROULENT ////////////////

// Initialiser le compteur de clics
let compteurDeClics = 1; // Définir le compteur à 1 au lancement de la page

// Fonction pour changer la couleur des boutons
function changerCouleurBoutons() {
  if (compteurDeClics === 1) {
    document.getElementById('bouton-barre-1').style.backgroundColor = 'white';
    document.getElementById('bouton-barre-2').style.backgroundColor = 'gray';
    document.getElementById('bouton-barre-3').style.backgroundColor = 'gray';
  } else if (compteurDeClics === 2) {
    document.getElementById('bouton-barre-1').style.backgroundColor = 'gray';
    document.getElementById('bouton-barre-2').style.backgroundColor = 'white';
    document.getElementById('bouton-barre-3').style.backgroundColor = 'gray';
  } else if (compteurDeClics === 3) {
    document.getElementById('bouton-barre-1').style.backgroundColor = 'gray';
    document.getElementById('bouton-barre-2').style.backgroundColor = 'gray';
    document.getElementById('bouton-barre-3').style.backgroundColor = 'white';
    // Réinitialiser le compteur après le troisième clic
    compteurDeClics = 0;
    console.log(compteurDeClics)
  }
}

// Appeler la fonction pour changer la couleur des boutons au chargement de la page
changerCouleurBoutons();

// Attacher un écouteur d'événements au bouton droit
document.querySelector('.next').addEventListener('click', function() {
  // Incrémenter le compteur de clics à chaque clic sur le bouton droit
  compteurDeClics++;
  changerCouleurBoutons();
});
// Attacher un écouteur d'événements au bouton gauche
document.querySelector('.prev').addEventListener('click', function() {
  // Décrémenter le compteur de clics à chaque clic sur le bouton gauche
  compteurDeClics--;

  // Assurez-vous que le compteur ne devienne pas négatif
  if (compteurDeClics === 0) {
    document.getElementById('bouton-barre-1').style.backgroundColor = 'gray';
    document.getElementById('bouton-barre-2').style.backgroundColor = 'gray';
    document.getElementById('bouton-barre-3').style.backgroundColor = 'white';
  } else if (compteurDeClics === -1) {
    document.getElementById('bouton-barre-1').style.backgroundColor = 'gray';
    document.getElementById('bouton-barre-2').style.backgroundColor = 'white';
    document.getElementById('bouton-barre-3').style.backgroundColor = 'gray';
  } else if (compteurDeClics === -2) {
    document.getElementById('bouton-barre-1').style.backgroundColor = 'white';
    document.getElementById('bouton-barre-2').style.backgroundColor = 'gray';
    document.getElementById('bouton-barre-3').style.backgroundColor = 'gray';
    // Réinitialiser le compteur après le troisième clic
    console.log(compteurDeClics)
    compteurDeClics = 1
  }

  changerCouleurBoutons();
});
////////// ICI CA FAIT LE CHANGEMENT DE COULEUR DES BOUTONS AU CLIQUE SUR LE BOUTON RETOUR
///////////////////////////////////////////////////////////////////////// 3 BOUTONS CLIQUER ///////////////////////////////////////////////////////////////////////
let boutonBarre1 = document.getElementById("bouton-barre-1");
let boutonBarre2 = document.getElementById("bouton-barre-2");
let boutonBarre3 = document.getElementById("bouton-barre-3");
boutonBarre1.addEventListener("click", barre1())
function barre1(){
boutonBarre1.addEventListener("click", function(){
  boutonBarre1.style.backgroundColor = "white"
  if(boutonBarre1.style.backgroundColor = "white"){
    boutonBarre2.style.backgroundColor = "gray";
    boutonBarre3.style.backgroundColor = "gray";
    autoClick()
    console.log("1")
  }
})
boutonBarre2.addEventListener("click", function(){
  boutonBarre2.style.backgroundColor = "white"
  if(boutonBarre2.style.backgroundColor = "white"){
    boutonBarre1.style.backgroundColor = "gray";
    boutonBarre3.style.backgroundColor = "gray";
    autoClick()
    console.log("2")
  }
})
boutonBarre3.addEventListener("click", function(){
  boutonBarre3.style.backgroundColor = "white"
  if(boutonBarre3.style.background = "white"){
    boutonBarre1.style.backgroundColor = "gray";
    boutonBarre2.style.backgroundColor = "gray";
    autoClick()
    console.log("3")
  }
})
}
function autoClick() {
  const autoNextButton = document.getElementById('auto-next');
  
  // Créer un événement de clic
  const clickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
  });

  // Déclencher l'événement de clic sur le bouton auto-next
  autoNextButton.dispatchEvent(clickEvent);
}
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

// Créez des images et ajoutez-les à la page en utilisant une boucle
for (let i = 0; i < cheminsDesImages.length; i++) {
  const picture = document.createElement("picture");
  const source = document.createElement("source");
  const sourceMobil = document.createElement("source");
  const image = document.createElement("img");
  image.src = cheminsDesImages[i]; // Utilisez le chemin de l'image
  // Créez un ID unique pour chaque image en utilisant la valeur de i
  image.id = `image-${i}`;
  image.className ="images_gallery";
  source.id = `source-${i}`;
  sourceMobil.id = `source-mobil-${i}`
  source.setAttribute("media", "(max-width: 900px)");
  sourceMobil.setAttribute("media", "(max-width: 425px)");
  picture.id = `picture-${i}`;
  picture.className = "all-pictures"
  picture.appendChild(sourceMobil)
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
element9.setAttribute("alt", "photographe pour millieu professionnel, photographie pour personnels d'entreprise");
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
const sourceMobil1 = document.getElementById("source-mobil-0");
sourceMobil1.setAttribute("srcset", cheminsDesImagesMobil[0]);
const sourceMobil2 = document.getElementById("source-mobil-1");
sourceMobil2.setAttribute("srcset", cheminsDesImagesMobil[1]);
const sourceMobil3 = document.getElementById("source-mobil-2");
sourceMobil3.setAttribute("srcset", cheminsDesImagesMobil[2]);
const sourceMobil4 = document.getElementById("source-mobil-3");
sourceMobil4.setAttribute("srcset", cheminsDesImagesMobil[3]);
const sourceMobil5 = document.getElementById("source-mobil-4");
sourceMobil5.setAttribute("srcset", cheminsDesImagesMobil[4]);
const sourceMobil6 = document.getElementById("source-mobil-5");
sourceMobil6.setAttribute("srcset", cheminsDesImagesMobil[5]);
const sourceMobil7 = document.getElementById("source-mobil-6");
sourceMobil7.setAttribute("srcset", cheminsDesImagesMobil[6]);
const sourceMobil8 = document.getElementById("source-mobil-7");
sourceMobil8.setAttribute("srcset", cheminsDesImagesMobil[7]);
const sourceMobil9 = document.getElementById("source-mobil-8");
sourceMobil9.setAttribute("srcset", cheminsDesImagesMobil[8]);
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
boutonTous.style.backgroundColor="#BEB45A";
boutonTous.style.color="black";
boutonTous.style.fontWeight = "700";
boutonTous.style.borderColor="#BEB45A";
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
boutonDroit.id = "bouton-suivant";
let boutonGauche = document.createElement("button");
boutonGauche.id = "bouton-precedent";

// Ajout des écouteurs d'événements aux boutons
boutonGauche.addEventListener("click", imageSuivante);
boutonDroit.addEventListener("click", imagePrecedente);

modal.style.display = "none";
modal.innerHTML = `<img id="image-modal" style="max-width: 542px; width: 100%; height: 100%; max-height: 637px;"></img>`;
modal.appendChild(boutonDroit);
modal.appendChild(boutonGauche);

// Ouvre la bonne modal selon la l'image cliqué
picture1.addEventListener("click", function(){
  let imageModal = document.getElementById("image-modal");
  imageModal.setAttribute("src", cheminsDesImages[0])
  //// Index de l'image actuellement affichée (Il nous aide pour dire ou l'on est positionnée et savoir quel image sont a droite et a gauche)
  indexImageActuelle = 0
});
picture2.addEventListener("click", function(){
  let imageModal = document.getElementById("image-modal");
  imageModal.setAttribute("src", cheminsDesImages[1])
  indexImageActuelle = 1
});
picture3.addEventListener("click", function(){
  let imageModal = document.getElementById("image-modal");
  imageModal.setAttribute("src", cheminsDesImages[2])
  indexImageActuelle = 2
});
picture4.addEventListener("click", function(){
  let imageModal = document.getElementById("image-modal");
  imageModal.setAttribute("src", cheminsDesImages[3])
  indexImageActuelle = 3
});
picture5.addEventListener("click", function(){
  let imageModal = document.getElementById("image-modal");
  imageModal.setAttribute("src", cheminsDesImages[4])
  indexImageActuelle = 4
});
picture6.addEventListener("click", function(){
  let imageModal = document.getElementById("image-modal");
  imageModal.setAttribute("src", cheminsDesImages[5])
  indexImageActuelle = 5
});
picture7.addEventListener("click", function(){
  let imageModal = document.getElementById("image-modal");
  imageModal.setAttribute("src", cheminsDesImages[6])
  indexImageActuelle = 6
});
picture8.addEventListener("click", function(){
  let imageModal = document.getElementById("image-modal");
  imageModal.setAttribute("src", cheminsDesImages[7])
  indexImageActuelle = 7
});
picture9.addEventListener("click", function(){
  let imageModal = document.getElementById("image-modal");
  imageModal.setAttribute("src", cheminsDesImages[8])
  indexImageActuelle = 8
});
imagesContainer.appendChild(modal);

  boutonEntreprise.addEventListener("click", filtreModalEntreprise());
  boutonConcert.addEventListener("click", filtreModalConcert());
  boutonMariage.addEventListener("click", filtreModalMariage());
  boutonPortrait.addEventListener("click", filtreModalPortrait());
  ///////////////////////////////////////////////////////////////////////////////////////////// SA COMMENCE ICI