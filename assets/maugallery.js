let currentIndex = 0;
function glisserGauche() {
    (currentIndex = (currentIndex - 1 + 3) % 3), effectuerGlissement(-150);
}
function glisserDroite() {
    (currentIndex = (currentIndex + 1) % 3), effectuerGlissement(150);
}
function effectuerGlissement(e) {
    let t = document.querySelector(".slide-images");
    (t.style.transform = `translateX(${e}%)`),
        setTimeout(() => {
            t.style.transform = `translateX(${100 * -currentIndex}%)`;
        }, 0);
}
function couleurBlancheTous() {
    let e = [boutonTous, boutonConcert, boutonEntreprise, boutonMariage, boutonPortrait];
    for (let t = 0; t < 5; t++) (e[t].style.backgroundColor = "white"), (e[t].style.borderColor = "white"), (e[t].style.color = "black"), (e[t].style.fontWeight = "100"), console.log(e);
}
function tous() {
    boutonTous.addEventListener("click", function () {
        (picture1.style.display = "initial"),
            (picture2.style.display = "initial"),
            (picture3.style.display = "initial"),
            (picture4.style.display = "initial"),
            (picture5.style.display = "initial"),
            (picture6.style.display = "initial"),
            (picture7.style.display = "initial"),
            (picture8.style.display = "initial"),
            (picture9.style.display = "initial"),
            location.reload();
    });
}
function concert() {
    boutonConcert.addEventListener("click", function () {
        couleurBlancheTous(),
            (picture1.style.display = "initial"),
            (picture2.style.display = "none"),
            (picture3.style.display = "none"),
            (picture4.style.display = "none"),
            (picture5.style.display = "none"),
            (picture6.style.display = "none"),
            (picture7.style.display = "none"),
            (picture8.style.display = "initial"),
            (picture9.style.display = "none"),
            (boutonConcert.style.backgroundColor = "#BEB45A"),
            (boutonConcert.style.color = "black"),
            (boutonConcert.style.borderColor = "#BEB45A"),
            (boutonConcert.style.fontWeight = "700");
    });
}
function entreprise() {
    boutonEntreprise.addEventListener("click", function () {
        couleurBlancheTous(),
            (picture1.style.display = "none"),
            (picture2.style.display = "initial"),
            (picture3.style.display = "initial"),
            (picture4.style.display = "none"),
            (picture5.style.display = "none"),
            (picture6.style.display = "none"),
            (picture7.style.display = "none"),
            (picture8.style.display = "none"),
            (picture9.style.display = "initial"),
            (boutonEntreprise.style.backgroundColor = "#BEB45A"),
            (boutonEntreprise.style.color = "black"),
            (boutonEntreprise.style.borderColor = "#BEB45A"),
            (boutonEntreprise.style.fontWeight = "700");
    });
}
function mariage() {
    boutonMariage.addEventListener("click", function () {
        couleurBlancheTous(),
            (picture1.style.display = "none"),
            (picture2.style.display = "none"),
            (picture3.style.display = "none"),
            (picture4.style.display = "initial"),
            (picture5.style.display = "none"),
            (picture6.style.display = "initial"),
            (picture7.style.display = "none"),
            (picture8.style.display = "none"),
            (picture9.style.display = "none"),
            (boutonMariage.style.backgroundColor = "#BEB45A"),
            (boutonMariage.style.color = "black"),
            (boutonMariage.style.borderColor = "#BEB45A"),
            (boutonMariage.style.fontWeight = "700");
    });
}
function portrait() {
    boutonPortrait.addEventListener("click", function () {
        couleurBlancheTous(),
            (picture1.style.display = "none"),
            (picture2.style.display = "none"),
            (picture3.style.display = "none"),
            (picture4.style.display = "none"),
            (picture5.style.display = "initial"),
            (picture6.style.display = "none"),
            (picture7.style.display = "initial"),
            (picture8.style.display = "none"),
            (picture9.style.display = "none"),
            (boutonPortrait.style.backgroundColor = "#BEB45A"),
            (boutonPortrait.style.color = "black"),
            (boutonPortrait.style.borderColor = "#BEB45A"),
            (boutonPortrait.style.fontWeight = "700");
    });
}
function openModal() {
    console.log("Picture Cliqué"),
        (modal.id = "myModal"),
        (modal.style.position = "fixed"),
        (modal.style.top = "50%"),
        (modal.style.left = "50%"),
        (modal.style.transform = "translate(-50%, -50%)"),
        (modal.style.padding = "20px"),
        (modal.style.backgroundColor = "white"),
        (modal.style.border = "4px solid rgb(190, 180, 90)"),
        (modal.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)"),
        (modal.style.zIndex = "3"),
        (modal.style.width = "100%"),
        (modal.style.display = "flex"),
        (modal.style.justifyContent = "center"),
        (modal.style.alignItems = "center"),
        (overlay.id = "overlay"),
        (overlay.style.display = "block"),
        (overlay.style.position = "fixed"),
        (overlay.style.top = "0"),
        (overlay.style.left = "0"),
        (overlay.style.width = "100%"),
        (overlay.style.height = "100%"),
        (overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)"),
        (overlay.style.zIndex = "2"),
        (header.style.zIndex = "1"),
        (boutonDroit.style.display = "flex"),
        (boutonDroit.style.height = "50px"),
        (boutonDroit.style.width = "50px"),
        (boutonDroit.style.position = "absolute"),
        (boutonDroit.style.left = "-50px"),
        (boutonDroit.style.fontSize = "50px"),
        (boutonDroit.style.border = "4px solid #BEB45A"),
        (boutonDroit.style.borderRight = "none"),
        (boutonDroit.style.borderRadius = "10px 0px 0px 10px"),
        (boutonDroit.style.padding = "0"),
        (boutonDroit.style.alignItems = "center"),
        (boutonDroit.style.justifyContent = "center"),
        (boutonDroit.style.display = "flex"),
        (boutonGauche.style.display = "flex"),
        (boutonGauche.style.position = "absolute"),
        (boutonGauche.style.fontSize = "50px"),
        (boutonGauche.style.border = "4px solid #BEB45A"),
        (boutonGauche.style.height = "50px"),
        (boutonGauche.style.width = "50px"),
        (boutonGauche.style.right = "-50px"),
        (boutonGauche.style.border = "4px solid #BEB45A"),
        (boutonGauche.style.borderLeft = "none"),
        (boutonGauche.style.borderRadius = "0px 10px 10px 0px"),
        (boutonGauche.style.padding = "0px 0px 0px 2px"),
        (boutonGauche.style.alignItems = "center"),
        (boutonGauche.style.justifyContent = "center"),
        overlay.addEventListener("click", function () {
            closeModal();
        });
}
function closeModal() {
    (modal.style.display = "none"), (overlay.style.display = "none"), (header.style.zIndex = "10");
}
function supprimeImage() {
    document.getElementById("myModal").remove, document.getElementById("image-modal").remove, document.getElementById("bouton-droit").remove, document.getElementById("bouton-gauche").remove, console.log("bouton supprimer active");
}
const cheminsDesImagesMobil = [
        "./assets/image-mobil/image-concert/concert-image.webp",
        "./assets/image-mobil/image-entreprise/entreprise-image.webp",
        "./assets/image-mobil/image-entreprise/deuxiéme-image-entreprise.webp",
        "./assets/image-mobil/image-mariage/mariage-image.webp",
        "./assets/image-mobil/image-portraits/image-portraits.webp",
        "./assets/image-mobil/image-mariage/deuxieme-image-mariage.webp",
        "./assets/image-mobil/image-portraits/deuxieme-image-portraits.webp",
        "./assets/image-mobil/image-concert/deuxième-image-concert.webp",
        "./assets/image-mobil/image-entreprise/troisiéme-image-entreprise.webp",
    ],
    cheminsDesImages = [
        "./assets/image/image-concert/concert-image.webp",
        "./assets/image/image-entreprise/entreprise-image.webp",
        "./assets/image/image-entreprise/deuxiéme-image-entreprise.webp",
        "./assets/image/image-mariage/mariage-image.webp",
        "./assets/image/image-portraits/image-portraits.webp",
        "./assets/image/image-mariage/deuxieme-image-mariage.webp",
        "./assets/image/image-portraits/deuxieme-image-portraits.webp",
        "./assets/image/image-concert/deuxième-image-concert.webp",
        "./assets/image/image-entreprise/troisiéme-image-entreprise.webp",
    ],
    cheminsImageMin = [
        "./assets/image-min/image-concert.min/concert-image.webp",
        "./assets/image-min/image-entreprise.min/entreprise-image.webp",
        "./assets/image-min/image-entreprise.min/deuxiéme-image-entreprise.webp",
        "./assets/image-min/image-mariage.min/mariage-image.webp",
        "./assets/image-min/image-portraits.min/image-portraits.webp",
        "./assets/image-min/image-mariage.min/deuxieme-image-mariage.webp",
        "./assets/image-min/image-portraits.min/deuxieme-image-portraits.webp",
        "./assets/image-min/image-concert.min/deuxième-image-concert.webp",
        "./assets/image-min/image-entreprise.min/troisiéme-image-entreprise.webp",
    ];
/////////////////////////////////////////////////////////////////////////////////////////////////////// AJOUT DES IMAGES DANS LA CACHE POUR NE PAS LES RECHARGER A CHAQUE FOIS
for(let i=0; i<9; i++){
fetch(cheminsDesImages[i])
//DEMANDE QUE LA REPONSE SOIT FAIT EN BLOB
.then(response => response.blob())
.then(blob => {
    //CREATION DE LA CACHE SI CELLE SI N'EXISTE PAS
    return caches.open("ma-cache-image")
    //ENVOIE LES IMAGES DANS LA CACHE
    .then(cache => cache.put(cheminsDesImages, new Response(blob)));
})
fetch(cheminsImageMin[i])
.then(response => response.blob())
.then(blob => {
    return caches.open("ma-cache-image-min")
    .then(cache => cache.put(cheminsDesImages, new Response(blob)));
})
fetch(cheminsDesImagesMobil[i])
.then(response => response.blob())
.then(blob => {
    return caches.open("ma-cache-image-mobil")
    .then(cache => cache.put(cheminsDesImages, new Response(blob)));
})
// SI IL Y A UNE ERREUR, ENVOIE DANS LA CONSOLE UN MESSAGE D'ERREUR
.catch(error => console.error('Erreur lors de la récupération et du stockage de limage:', error));
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// FIN
function afficherImage(e) {
    document.getElementById("image-modal").setAttribute("src", cheminsDesImages[e]);
}
function supprimeImage() {
    document.getElementById("image-modal").setAttribute("src", "");
}
function imageSuivante() {
    indexImageActuelle < cheminsDesImages.length - 1 && (supprimeImage(), indexImageActuelle++, afficherImage(indexImageActuelle), console.log("ouverture modal " + (indexImageActuelle + 1)));
}
function imagePrecedente() {
    indexImageActuelle > 0 && (supprimeImage(), indexImageActuelle--, afficherImage(indexImageActuelle), console.log("ouverture modal " + (indexImageActuelle + 1)));
}
function filtreModalPortrait() {
    let e = document.getElementById("image-modal");
    e.setAttribute("alt", "image filtrés par la modal");
    let t = document.getElementById("image-4"),
        n = document.getElementById("image-6"),
        o = 0;
    console.log(e),
        t.addEventListener("click", function () {
            if (t.classList.contains("CLIQUER") && n.classList.contains("CLIQUER") && e.className.includes("CLIQUER")) {
                let t = document.getElementById("bouton-precedent"),
                    n = document.getElementById("bouton-suivant");
                t.addEventListener("click", function () {
                    (o = 1) && (e.setAttribute("src", cheminsDesImages[6]), console.log(o)),
                        t.addEventListener("click", function () {
                            (o = 1) && (e.setAttribute("src", cheminsDesImages[6]), console.log(o));
                        });
                }),
                    n.addEventListener("click", function () {
                        (o = 1) && (e.setAttribute("src", cheminsDesImages[4]), console.log(o)),
                            n.addEventListener("click", function () {
                                (o = 1) && (e.setAttribute("src", cheminsDesImages[4]), console.log(o));
                            });
                    }),
                    t.addEventListener("click", function () {
                        (o = 1) && (e.setAttribute("src", cheminsDesImages[6]), console.log(o)),
                            t.addEventListener("click", function () {
                                (o = 1) && (e.setAttribute("src", cheminsDesImages[6]), console.log(o));
                            });
                    }),
                    n.addEventListener("click", function () {
                        (o = 1) && e.setAttribute("src", cheminsDesImages[4]),
                            n.addEventListener("click", function () {
                                (o = 1) && (e.setAttribute("src", cheminsDesImages[4]), console.log(o));
                            });
                    }),
                    t.addEventListener("click", function () {
                        (o = 1) && (e.setAttribute("src", cheminsDesImages[6]), console.log(o));
                    }),
                    n.addEventListener("click", function () {
                        (o = 1) && e.setAttribute("src", cheminsDesImages[4]),
                            n.addEventListener("click", function () {
                                (o = 1) && (e.setAttribute("src", cheminsDesImages[4]), console.log(o));
                            }),
                            t.addEventListener("click", function () {
                                (o = 1) && (e.setAttribute("src", cheminsDesImages[6]), console.log(o)),
                                    t.addEventListener("click", function () {
                                        (o = 1) && (e.setAttribute("src", cheminsDesImages[6]), console.log(o));
                                    });
                            });
                    });
            }
        }),
        boutonPortrait.addEventListener("click", function () {
            n.classList.add("CLIQUER"), t.classList.add("CLIQUER"), e.classList.add("CLIQUER");
        }),
        n.addEventListener("click", function () {
            if (n.classList.contains("CLIQUER") && t.classList.contains("CLIQUER") && e.className.includes("CLIQUER")) {
                let t = document.getElementById("bouton-precedent"),
                    n = document.getElementById("bouton-suivant");
                t.addEventListener("click", function () {
                    (o = 1) && (e.setAttribute("src", cheminsDesImages[6]), console.log(o)), (o = 1) && (e.setAttribute("src", cheminsDesImages[6]), console.log(o));
                }),
                    n.addEventListener("click", function () {
                        (o = 1) && (e.setAttribute("src", cheminsDesImages[4]), console.log(o)),
                            (o = 1) && (e.setAttribute("src", cheminsDesImages[4]), console.log(o)),
                            t.addEventListener("click", function () {
                                (o = 1) && (e.setAttribute("src", cheminsDesImages[6]), console.log(o));
                            }),
                            n.addEventListener("click", function () {
                                (o = 1) && e.setAttribute("src", cheminsDesImages[4]),
                                    n.addEventListener("click", function () {
                                        (o = 1) && (e.setAttribute("src", cheminsDesImages[4]), console.log(o));
                                    }),
                                    t.addEventListener("click", function () {
                                        (o = 1) && (e.setAttribute("src", cheminsDesImages[6]), console.log(o)),
                                            t.addEventListener("click", function () {
                                                (o = 1) && (e.setAttribute("src", cheminsDesImages[6]), console.log(o));
                                            });
                                    });
                            });
                    });
            }
        }),
        boutonPortrait.addEventListener("click", function () {
            n.classList.add("CLIQUER"), t.classList.add("CLIQUER"), e.classList.add("CLIQUER");
        });
}
function filtreModalMariage() {
    let e = document.getElementById("image-modal");
    e.setAttribute("alt", "image filtrés par la modal");
    let t = document.getElementById("image-3"),
        n = document.getElementById("image-5"),
        o = 0;
    console.log(e),
        t.addEventListener("click", function () {
            if (t.classList.contains("CLIQUER") && n.classList.contains("CLIQUER") && e.className.includes("CLIQUER")) {
                let t = document.getElementById("bouton-precedent"),
                    n = document.getElementById("bouton-suivant");
                t.addEventListener("click", function () {
                    (o = 1) && (e.setAttribute("src", cheminsDesImages[5]), console.log(o)),
                        t.addEventListener("click", function () {
                            (o = 1) && (e.setAttribute("src", cheminsDesImages[5]), console.log(o));
                        });
                }),
                    n.addEventListener("click", function () {
                        (o = 1) && (e.setAttribute("src", cheminsDesImages[3]), console.log(o)),
                            n.addEventListener("click", function () {
                                (o = 1) && (e.setAttribute("src", cheminsDesImages[3]), console.log(o));
                            });
                    }),
                    t.addEventListener("click", function () {
                        (o = 1) && (e.setAttribute("src", cheminsDesImages[5]), console.log(o)),
                            t.addEventListener("click", function () {
                                (o = 1) && (e.setAttribute("src", cheminsDesImages[5]), console.log(o));
                            });
                    }),
                    n.addEventListener("click", function () {
                        (o = 1) && e.setAttribute("src", cheminsDesImages[3]),
                            n.addEventListener("click", function () {
                                (o = 1) && (e.setAttribute("src", cheminsDesImages[3]), console.log(o));
                            });
                    }),
                    t.addEventListener("click", function () {
                        (o = 1) && (e.setAttribute("src", cheminsDesImages[5]), console.log(o));
                    }),
                    n.addEventListener("click", function () {
                        (o = 1) && e.setAttribute("src", cheminsDesImages[3]),
                            n.addEventListener("click", function () {
                                (o = 1) && (e.setAttribute("src", cheminsDesImages[3]), console.log(o));
                            }),
                            t.addEventListener("click", function () {
                                (o = 1) && (e.setAttribute("src", cheminsDesImages[5]), console.log(o)),
                                    t.addEventListener("click", function () {
                                        (o = 1) && (e.setAttribute("src", cheminsDesImages[5]), console.log(o));
                                    });
                            });
                    });
            }
        }),
        boutonMariage.addEventListener("click", function () {
            t.classList.add("CLIQUER"), n.classList.add("CLIQUER"), e.classList.add("CLIQUER");
        }),
        n.addEventListener("click", function () {
            if (n.classList.contains("CLIQUER") && t.classList.contains("CLIQUER") && e.className.includes("CLIQUER")) {
                let t = document.getElementById("bouton-precedent"),
                    n = document.getElementById("bouton-suivant");
                t.addEventListener("click", function () {
                    (o = 1) && (e.setAttribute("src", cheminsDesImages[5]), console.log(o)), (o = 1) && (e.setAttribute("src", cheminsDesImages[5]), console.log(o));
                }),
                    n.addEventListener("click", function () {
                        (o = 1) && (e.setAttribute("src", cheminsDesImages[3]), console.log(o)),
                            (o = 1) && (e.setAttribute("src", cheminsDesImages[3]), console.log(o)),
                            t.addEventListener("click", function () {
                                (o = 1) && (e.setAttribute("src", cheminsDesImages[5]), console.log(o));
                            }),
                            n.addEventListener("click", function () {
                                (o = 1) && e.setAttribute("src", cheminsDesImages[3]),
                                    n.addEventListener("click", function () {
                                        (o = 1) && (e.setAttribute("src", cheminsDesImages[3]), console.log(o));
                                    }),
                                    t.addEventListener("click", function () {
                                        (o = 1) && (e.setAttribute("src", cheminsDesImages[5]), console.log(o)),
                                            t.addEventListener("click", function () {
                                                (o = 1) && (e.setAttribute("src", cheminsDesImages[5]), console.log(o));
                                            });
                                    });
                            });
                    });
            }
        }),
        boutonMariage.addEventListener("click", function () {
            n.classList.add("CLIQUER"), t.classList.add("CLIQUER"), e.classList.add("CLIQUER");
        });
}
function filtreModalEntreprise() {
    let e = document.getElementById("image-modal");
    e.setAttribute("alt", "image filtrés par la modal");
    let t = document.getElementById("image-1"),
        n = document.getElementById("image-2"),
        o = document.getElementById("image-8");
    console.log(e),
        t.addEventListener("click", function () {
            let s = 0;
            if ((console.log(s), t.classList.contains("CLIQUER") && n.classList.contains("CLIQUER") && o.classList.contains("CLIQUER") && e.className.includes("CLIQUER"))) {
                let t = document.getElementById("bouton-precedent"),
                    n = document.getElementById("bouton-suivant");
                t.addEventListener("click", function () {
                    (s = 1) && (e.setAttribute("src", cheminsDesImages[2]), console.log(s)),
                        t.addEventListener("click", function () {
                            (s = 1) && (e.setAttribute("src", cheminsDesImages[8]), console.log(s));
                        });
                }),
                    n.addEventListener("click", function () {
                        (s = 1) && e.setAttribute("src", cheminsDesImages[2]),
                            n.addEventListener("click", function () {
                                (s = 1) && (e.setAttribute("src", cheminsDesImages[1]), console.log(s));
                            });
                    });
            }
        }),
        n.addEventListener("click", function () {
            let t = 0;
            if ((console.log(t), n.classList.contains("CLIQUER") && n.classList.contains("CLIQUER") && o.classList.contains("CLIQUER") && e.className.includes("CLIQUER"))) {
                let n = document.getElementById("bouton-precedent"),
                    o = document.getElementById("bouton-suivant");
                n.addEventListener("click", function () {
                    (t = 1) && (e.setAttribute("src", cheminsDesImages[8]), console.log(t));
                }),
                    o.addEventListener("click", function () {
                        (t = 1) && e.setAttribute("src", cheminsDesImages[2]),
                            o.addEventListener("click", function () {
                                (t = 1) && (e.setAttribute("src", cheminsDesImages[1]), console.log(t));
                            }),
                            n.addEventListener("click", function () {
                                (t = 1) && (e.setAttribute("src", cheminsDesImages[8]), console.log(t)),
                                    n.addEventListener("click", function () {
                                        (t = 1) && (e.setAttribute("src", cheminsDesImages[8]), console.log(t));
                                    });
                            });
                    });
            }
        }),
        o.addEventListener("click", function () {
            let s = 0;
            if ((console.log(s), t.classList.contains("CLIQUER") && n.classList.contains("CLIQUER") && o.classList.contains("CLIQUER") && e.className.includes("CLIQUER"))) {
                let t = document.getElementById("bouton-precedent"),
                    n = document.getElementById("bouton-suivant");
                t.addEventListener("click", function () {
                    (s = 1) && (e.setAttribute("src", cheminsDesImages[2]), console.log(s)),
                        t.addEventListener("click", function () {
                            (s = 1) && (e.setAttribute("src", cheminsDesImages[8]), console.log(s));
                        });
                }),
                    n.addEventListener("click", function () {
                        (s = 1) && e.setAttribute("src", cheminsDesImages[2]),
                            n.addEventListener("click", function () {
                                (s = 1) && (e.setAttribute("src", cheminsDesImages[1]), console.log(s));
                            });
                    });
            }
        }),
        boutonEntreprise.addEventListener("click", function () {
            t.classList.add("CLIQUER"), n.classList.add("CLIQUER"), o.classList.add("CLIQUER"), e.classList.add("CLIQUER");
        });
}
function filtreModalConcert() {
    let e = document.getElementById("image-modal");
    e.setAttribute("alt", "images filtrés par la modal");
    let t = document.getElementById("image-0"),
        n = document.getElementById("image-7"),
        o = 0;
    console.log(e),
        t.addEventListener("click", function () {
            if (t.classList.contains("CLIQUER") && n.classList.contains("CLIQUER") && e.className.includes("CLIQUER")) {
                let t = document.getElementById("bouton-precedent"),
                    n = document.getElementById("bouton-suivant");
                t.addEventListener("click", function () {
                    (o = 1) && (e.setAttribute("src", cheminsDesImages[7]), console.log(o)),
                        t.addEventListener("click", function () {
                            (o = 1) && (e.setAttribute("src", cheminsDesImages[7]), console.log(o));
                        });
                }),
                    n.addEventListener("click", function () {
                        (o = 1) && (e.setAttribute("src", cheminsDesImages[0]), console.log(o)),
                            n.addEventListener("click", function () {
                                (o = 1) && (e.setAttribute("src", cheminsDesImages[0]), console.log(o));
                            });
                    }),
                    t.addEventListener("click", function () {
                        (o = 1) && (e.setAttribute("src", cheminsDesImages[2]), console.log(o)),
                            t.addEventListener("click", function () {
                                (o = 1) && (e.setAttribute("src", cheminsDesImages[7]), console.log(o));
                            });
                    }),
                    n.addEventListener("click", function () {
                        (o = 1) && e.setAttribute("src", cheminsDesImages[2]),
                            n.addEventListener("click", function () {
                                (o = 1) && (e.setAttribute("src", cheminsDesImages[1]), console.log(o));
                            });
                    }),
                    t.addEventListener("click", function () {
                        (o = 1) && (e.setAttribute("src", cheminsDesImages[7]), console.log(o));
                    }),
                    n.addEventListener("click", function () {
                        (o = 1) && e.setAttribute("src", cheminsDesImages[0]),
                            n.addEventListener("click", function () {
                                (o = 1) && (e.setAttribute("src", cheminsDesImages[0]), console.log(o));
                            }),
                            t.addEventListener("click", function () {
                                (o = 1) && (e.setAttribute("src", cheminsDesImages[7]), console.log(o)),
                                    t.addEventListener("click", function () {
                                        (o = 1) && (e.setAttribute("src", cheminsDesImages[7]), console.log(o));
                                    });
                            });
                    });
            }
        }),
        boutonConcert.addEventListener("click", function () {
            t.classList.add("CLIQUER"), n.classList.add("CLIQUER"), e.classList.add("CLIQUER");
        }),
        n.addEventListener("click", function () {
            if (t.classList.contains("CLIQUER") && n.classList.contains("CLIQUER") && e.className.includes("CLIQUER")) {
                let t = document.getElementById("bouton-precedent"),
                    n = document.getElementById("bouton-suivant");
                t.addEventListener("click", function () {
                    (o = 1) && (e.setAttribute("src", cheminsDesImages[7]), console.log(o)), (o = 1) && (e.setAttribute("src", cheminsDesImages[7]), console.log(o));
                }),
                    n.addEventListener("click", function () {
                        (o = 1) && (e.setAttribute("src", cheminsDesImages[0]), console.log(o)),
                            (o = 1) && (e.setAttribute("src", cheminsDesImages[0]), console.log(o)),
                            t.addEventListener("click", function () {
                                (o = 1) && (e.setAttribute("src", cheminsDesImages[7]), console.log(o));
                            }),
                            n.addEventListener("click", function () {
                                (o = 1) && e.setAttribute("src", cheminsDesImages[0]),
                                    n.addEventListener("click", function () {
                                        (o = 1) && (e.setAttribute("src", cheminsDesImages[0]), console.log(o));
                                    }),
                                    t.addEventListener("click", function () {
                                        (o = 1) && (e.setAttribute("src", cheminsDesImages[7]), console.log(o)),
                                            t.addEventListener("click", function () {
                                                (o = 1) && (e.setAttribute("src", cheminsDesImages[7]), console.log(o));
                                            });
                                    });
                            });
                    });
            }
        }),
        boutonConcert.addEventListener("click", function () {
            t.classList.add("CLIQUER"), n.classList.add("CLIQUER"), e.classList.add("CLIQUER");
        });
}
const autoNextButton = document.getElementById("auto-next");
function autoClick() {
    autoNextButton.click();
}
setInterval(autoClick, 8e3);
let compteurDeClics = 1;
function changerCouleurBoutons() {
    1 === compteurDeClics
        ? ((document.getElementById("bouton-barre-1").style.backgroundColor = "white"), (document.getElementById("bouton-barre-2").style.backgroundColor = "gray"), (document.getElementById("bouton-barre-3").style.backgroundColor = "gray"))
        : 2 === compteurDeClics
        ? ((document.getElementById("bouton-barre-1").style.backgroundColor = "gray"), (document.getElementById("bouton-barre-2").style.backgroundColor = "white"), (document.getElementById("bouton-barre-3").style.backgroundColor = "gray"))
        : 3 === compteurDeClics &&
          ((document.getElementById("bouton-barre-1").style.backgroundColor = "gray"),
          (document.getElementById("bouton-barre-2").style.backgroundColor = "gray"),
          (document.getElementById("bouton-barre-3").style.backgroundColor = "white"),
          (compteurDeClics = 0),
          console.log(compteurDeClics));
}
changerCouleurBoutons(),
    document.querySelector(".next").addEventListener("click", function () {
        compteurDeClics++, changerCouleurBoutons();
    }),
    document.querySelector(".prev").addEventListener("click", function () {
        compteurDeClics--,
            0 === compteurDeClics
                ? ((document.getElementById("bouton-barre-1").style.backgroundColor = "gray"),
                  (document.getElementById("bouton-barre-2").style.backgroundColor = "gray"),
                  (document.getElementById("bouton-barre-3").style.backgroundColor = "white"))
                : -1 === compteurDeClics
                ? ((document.getElementById("bouton-barre-1").style.backgroundColor = "gray"),
                  (document.getElementById("bouton-barre-2").style.backgroundColor = "white"),
                  (document.getElementById("bouton-barre-3").style.backgroundColor = "gray"))
                : -2 === compteurDeClics &&
                  ((document.getElementById("bouton-barre-1").style.backgroundColor = "white"),
                  (document.getElementById("bouton-barre-2").style.backgroundColor = "gray"),
                  (document.getElementById("bouton-barre-3").style.backgroundColor = "gray"),
                  console.log(compteurDeClics),
                  (compteurDeClics = 1)),
            changerCouleurBoutons();
    });
let boutonBarre1 = document.getElementById("bouton-barre-1"),
    boutonBarre2 = document.getElementById("bouton-barre-2"),
    boutonBarre3 = document.getElementById("bouton-barre-3");
function barre1() {
    boutonBarre1.addEventListener("click", function () {
        (boutonBarre1.style.backgroundColor = "white"), (boutonBarre1.style.backgroundColor = "white") && ((boutonBarre2.style.backgroundColor = "gray"), (boutonBarre3.style.backgroundColor = "gray"), autoClick(), console.log("1"));
    }),
        boutonBarre2.addEventListener("click", function () {
            (boutonBarre2.style.backgroundColor = "white"), (boutonBarre2.style.backgroundColor = "white") && ((boutonBarre1.style.backgroundColor = "gray"), (boutonBarre3.style.backgroundColor = "gray"), autoClick(), console.log("2"));
        }),
        boutonBarre3.addEventListener("click", function () {
            (boutonBarre3.style.backgroundColor = "white"), (boutonBarre3.style.background = "white") && ((boutonBarre1.style.backgroundColor = "gray"), (boutonBarre2.style.backgroundColor = "gray"), autoClick(), console.log("3"));
        });
}
function autoClick() {
    const e = document.getElementById("auto-next"),
        t = new MouseEvent("click", { bubbles: !0, cancelable: !0, view: window });
    e.dispatchEvent(t);
}
boutonBarre1.addEventListener("click", barre1());
const boutonsContainer = document.getElementById("container-filter"),
    nomsDesBoutons = ["Tous", "Concert", "Entreprises", "Mariages", "Portrait"];
for (let e = 0; e < nomsDesBoutons.length; e++) {
    const t = document.createElement("button");
    (t.textContent = nomsDesBoutons[e]), (t.id = `bouton-${nomsDesBoutons[e]}`), (t.className = "ensemble-boutons"), boutonsContainer.appendChild(t);
}
const couleursBoutons = document.querySelectorAll(".ensemble-boutons");
couleursBoutons.forEach((e) => {
    e.addEventListener("click", function () {
        couleursBoutons.forEach((e) => e.classList.remove("active")), this.classList.add("active");
    });
});
const imagesContainer = document.getElementById("gallery-image");
for (let e = 0; e < cheminsDesImages.length; e++) {
    const t = document.createElement("picture"),
        n = document.createElement("source"),
        o = document.createElement("source"),
        s = document.createElement("img");
    (s.src = cheminsDesImages[e]),
        (s.id = `image-${e}`),
        (s.className = "images_gallery"),
        (n.id = `source-${e}`),
        (o.id = `source-mobil-${e}`),
        n.setAttribute("media", "(max-width: 900px)"),
        o.setAttribute("media", "(max-width: 425px)"),
        (t.id = `picture-${e}`),
        (t.className = "all-pictures"),
        t.appendChild(o),
        t.appendChild(n),
        t.appendChild(s),
        imagesContainer.appendChild(t);
}
const allPictures = document.querySelectorAll(".all-pictures");
allPictures.forEach(function (e) {
    e.addEventListener("click", openModal);
});
const element1 = document.getElementById("image-0");
element1.setAttribute("alt", "photographie de concert, photographe de concert, photographie concert");
const element2 = document.getElementById("image-1");
element2.setAttribute("alt", "photographe entreprise, photographe pour entreprise, photo d'entreprise");
const element3 = document.getElementById("image-2");
element3.setAttribute("alt", "photographie en entreprise, photographe en mileux professionnel, photo en entreprise");
const element4 = document.getElementById("image-3");
element4.setAttribute("alt", "photographe mariage, photo mariage pour tous, photo pour mariage");
const element5 = document.getElementById("image-4");
element5.setAttribute("alt", "photo pour instagram, photographe pour mannequin, photo pour reseau sociaux");
const element6 = document.getElementById("image-5");
element6.setAttribute("alt", "photo de mariage, photo de mariage professionnel, photographie de qualité");
const element7 = document.getElementById("image-6");
element7.setAttribute("alt", "photo de portrait, photographie de personnes, photo réussie");
const element8 = document.getElementById("image-7");
element8.setAttribute("alt", "photographie d'un concert, photographe pour célébrités, photo spéctacle");
const element9 = document.getElementById("image-8");
element9.setAttribute("alt", "photographe pour millieu professionnel, photographie pour personnels d'entreprise");
const picture1 = document.getElementById("picture-0"),
    picture2 = document.getElementById("picture-1"),
    picture3 = document.getElementById("picture-2"),
    picture4 = document.getElementById("picture-3"),
    picture5 = document.getElementById("picture-4"),
    picture6 = document.getElementById("picture-5"),
    picture7 = document.getElementById("picture-6"),
    picture8 = document.getElementById("picture-7"),
    picture9 = document.getElementById("picture-8"),
    sourceMobil1 = document.getElementById("source-mobil-0");
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
const boutonTous = document.getElementById("bouton-Tous");
(boutonTous.style.backgroundColor = "#BEB45A"), (boutonTous.style.color = "black"), (boutonTous.style.fontWeight = "700"), (boutonTous.style.borderColor = "#BEB45A");
const boutonConcert = document.getElementById("bouton-Concert"),
    boutonEntreprise = document.getElementById("bouton-Entreprises"),
    boutonMariage = document.getElementById("bouton-Mariages"),
    boutonPortrait = document.getElementById("bouton-Portrait"),
    header = document.getElementById("id_top-header");
boutonTous.click ? tous() : (console.log('Erreur: Le clique sur le bouton "Tous" n`a pas pu se faire'), alert('une erreur est survenue sur le bouton "Tous", si le probléme perciste, merci de contacter Sophie au *05 56 67 78 89*')),
    boutonConcert.click
        ? concert()
        : (console.log('Erreur: Le clique sur le bouton "Concert" n`a pas pu se faire'), alert('une erreur est survenue sur le bouton "Concert", si le probléme perciste, merci de contacter Sophie au *05 56 67 78 89*')),
    boutonEntreprise.click
        ? entreprise()
        : (console.log('Erreur: Le clique sur le bouton "Entreprise" n`a pas pu se faire'), alert('une erreur est survenue sur le bouton "Entreprise", si le probléme perciste, merci de contacter Sophie au *05 56 67 78 89*')),
    boutonMariage.click
        ? mariage()
        : (console.log('Erreur: Le clique sur le bouton "Mariage" n`a pas pu se faire'), alert('une erreur est survenue sur le bouton "Mariage", si le probléme perciste, merci de contacter Sophie au *05 56 67 78 89*')),
    boutonPortrait.click
        ? portrait()
        : (console.log('Erreur: Le clique sur le bouton "Portrait" n`a pas pu se faire'), alert('une erreur est survenue sur le bouton "Portrait", si le probléme perciste, merci de contacter Sophie au *05 56 67 78 89*'));
let overlay = document.createElement("div");
(overlay.style.display = "none"), document.body.appendChild(overlay);
let modal = document.createElement("div"),
    boutonDroit = document.createElement("button");
(boutonDroit.id = "bouton-suivant"), (boutonDroit.innerHTML = '<i class="fa-solid fa-square-caret-left" style="color: #000000;" id="bouton-gauche"></i> <p id="bouton-droit-modal">bouton Gauche Modal</p>');
let boutonGauche = document.createElement("button");
(boutonGauche.id = "bouton-precedent"),
    (boutonGauche.innerHTML = '<i class="fa-solid fa-square-caret-right" style="color: #000000;" id="bouton-droit"></i> <p id="bouton-gauche-modal">bouton Droit Modal</p>'),
    boutonGauche.addEventListener("click", imageSuivante),
    boutonDroit.addEventListener("click", imagePrecedente),
    (modal.style.display = "none"),
    (modal.innerHTML = '<img id="image-modal" style="max-width: 542px; width: 100%; height: 100%; max-height: 637px;"></img>'),
    modal.appendChild(boutonDroit),
    modal.appendChild(boutonGauche),
    picture1.addEventListener("click", function () {
        document.getElementById("image-modal").setAttribute("src", cheminsDesImages[0]), (indexImageActuelle = 0);
    }),
    picture2.addEventListener("click", function () {
        document.getElementById("image-modal").setAttribute("src", cheminsDesImages[1]), (indexImageActuelle = 1);
    }),
    picture3.addEventListener("click", function () {
        document.getElementById("image-modal").setAttribute("src", cheminsDesImages[2]), (indexImageActuelle = 2);
    }),
    picture4.addEventListener("click", function () {
        document.getElementById("image-modal").setAttribute("src", cheminsDesImages[3]), (indexImageActuelle = 3);
    }),
    picture5.addEventListener("click", function () {
        document.getElementById("image-modal").setAttribute("src", cheminsDesImages[4]), (indexImageActuelle = 4);
    }),
    picture6.addEventListener("click", function () {
        document.getElementById("image-modal").setAttribute("src", cheminsDesImages[5]), (indexImageActuelle = 5);
    }),
    picture7.addEventListener("click", function () {
        document.getElementById("image-modal").setAttribute("src", cheminsDesImages[6]), (indexImageActuelle = 6);
    }),
    picture8.addEventListener("click", function () {
        document.getElementById("image-modal").setAttribute("src", cheminsDesImages[7]), (indexImageActuelle = 7);
    }),
    picture9.addEventListener("click", function () {
        document.getElementById("image-modal").setAttribute("src", cheminsDesImages[8]), (indexImageActuelle = 8);
    }),
    imagesContainer.appendChild(modal),
    boutonEntreprise.addEventListener("click", filtreModalEntreprise()),
    boutonConcert.addEventListener("click", filtreModalConcert()),
    boutonMariage.addEventListener("click", filtreModalMariage()),
    boutonPortrait.addEventListener("click", filtreModalPortrait());
