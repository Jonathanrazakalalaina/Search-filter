const items = document.querySelectorAll('.item');
const h2s = document.querySelectorAll('h2');
const inputSearch = document.querySelector('.search');


inputSearch.addEventListener('keyup', filtrageDeRecherche)

function filtrageDeRecherche() {

    for(i = 0; i < items.length; i++) {

        let filter = inputSearch.value.toLowerCase();
        let titlesText = h2s[i].innerText;

        if(titlesText.toLowerCase().indexOf(filter) > -1) {
            items[i].style.display = 'block';
        } else {
            items[i].style.display = 'none';
        }


    }

}
