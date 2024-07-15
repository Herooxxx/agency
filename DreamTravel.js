
// Attends que le DOM soit complètement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded'); // Vérifie que le script est bien chargé

    // Définit un objet contenant des tableaux d'URLs d'images pour chaque catégorie
    const images = {
        paysage: [
            'img/banner/paysage1.jpg',
            'img/banner/paysage2.jpg',
            'img/banner/paysage3.jpg'
        ],
        famille: [
            'img/banner/famille1.jpg',
            'img/banner/famille2.jpg',
            'img/banner/famille3.jpg'
        ],
        activite: [
            'img/banner/sport1.jpg',
            'img/banner/sport2.jpg',
            'img/banner/sport3.jpg'
        ]
    };

    // Initialise les index pour suivre les images actuellement affichées
    let indexPaysage = 0;
    let indexFamille = 0;
    let indexActivite = 0;

    // Récupère les éléments <img> correspondant à chaque catégorie
    const paysageImg = document.getElementById('paysageImg');
    const familleImg = document.getElementById('familleImg');
    const activiteImg = document.getElementById('activiteImg');

    // Fonction qui change les images toutes les 5 secondes
    function changeImage() {
        // Incrémente les index circulairement pour chaque catégorie
        indexPaysage = (indexPaysage + 1) % images.paysage.length;
        indexFamille = (indexFamille + 1) % images.famille.length;
        indexActivite = (indexActivite + 1) % images.activite.length;

        // Met à jour les sources des images dans le DOM
        paysageImg.src = images.paysage[indexPaysage];
        familleImg.src = images.famille[indexFamille];
        activiteImg.src = images.activite[indexActivite];
    }

    // Appelle la fonction changeImage toutes les 3.5 secondes
    setInterval(changeImage, 3500); // Change every 3.5 seconds
});