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

