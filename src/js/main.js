/*
1. Parcourez les items du menu et ajoutez-leur chacun
	- un [écouteur d’événement qui écoute le survol de la souris](https://developer.mozilla.org/fr/docs/Web/API/Element/mouseover_event) auquel est associé une fonction `montreSousMenu` ;
	- un [écouteur d’événement qui écoute le départ de la souris](https://developer.mozilla.org/fr/docs/Web/API/Element/mouseout_event) auquel est associé  une fonction `cacheSousMenu `;

2. Compléter les fonctions
	- `montreSousMenu` pour qu’elle
		- affiche le sous-menu correspondant à l'item principal survolé ;
		- change la couleur de fond de l'item principal survolé ;
		- change la couleur de texte de l'item principal survolé ;
	- `cacheSousMenu` pour qu’elle
		- cache le sous-menu correspondant à l'item quitté ;
		- change la couleur de fond de l'item principal quitté ;
		- change la couleur de texte de l'item principal quitté ; */
(function () {
    const Navigation = {
        run() {
            document.documentElement.classList.add('js-enabled');
            this.title = document.querySelectorAll('.menu-title');
            this.menu = document.querySelectorAll('.menu');
            this.subMenu = document.querySelectorAll('.sub-menu');
            this.sousMenu();
        },
        sousMenu(){
            for (let i = 0; i < this.menu.length; i++) {
                this.menu[i].addEventListener('mouseover', () => {
                    this.subMenu[i].style.display = "block";
                    this.title[i].style.backgroundColor = 'white';
                    this.title[i].style.color = '#c61128';
                    console.log(i);
                });
                this.menu[i].addEventListener('mouseout', () => {
                    this.subMenu[i].style.display = "none";
                    this.title[i].style.backgroundColor = '#c61128';
                    this.title[i].style.color = 'white';
                });
            }
        }
    };
    Navigation.run();
})();

/* Notez bien que dans la première version ci-dessus proposée, JavaScript se mêle de définir lui-même des règles de style pour les éléments HTLML, ce qui n’est en principe pas du tout son rôle.
Cette première version vous est proposée dans un objectif pédagogique.
La meilleure pratique est de découpler, comme d’habitude, les différents aspects : structure en HTML, présentation en CSS et interaction en JS.
Dans cette optique, faites une version améliorée de votre script où JS se contente d’affecter une classe aux éléments qui doivent changer de style et faites les changements de style en CSS. */
