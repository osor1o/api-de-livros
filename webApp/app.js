
(function () 
{
    const url = 'http://localhost:8081';
    var elems = document.querySelectorAll('.modal');
    var instancesModal = M.Modal.init(elems);
    var instanceModal = (elem) => M.Modal.getInstance(elem);

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.fixed-action-btn');
        var instances = M.FloatingActionButton.init(elems, {
        toolbarEnabled: true
        });
    });

    var createElement = (value) => document.createElement(value);
    var getId = (value) => document.getElementById(value);
    var getClass = (value) => document.getElementsByClassName(value);
    
    findAll();

    getId('update').onclick = function () {
        findAll();
    }

    getId('addSubmit').onclick = function () {
        var parameters = {
            title: getId('addTitle').value,
            description: getId('addDescription').value,
            width: getId('addWidth').value,
            height: getId('addHeight').value,
            length: getId('addLength').value,
            weight: getId('addWeight').value,
            firstName: getId('addFirstName').value,
            lastName: getId('addLastName').value,
            cellPhone: getId('addCellPhone').value,
            cep: getId('addCep').value,
            price: getId('addPrice').value
        }
        insert(parameters);
    }
    
    function findAll() {
        getId('books').innerHTML = null;
        getId('alert').style.display = 'none';
        getId('loading').style.display = 'block';
        
        axios.get(url)
            .then(function (response) {
                data = response.data;
                if(data.length < 1) {
                    getId('alert').innerHTML = "<b>No books found :(</b>";
                    getId('alert').style.display = 'block';
                } else {
                    data.forEach(book => getId('books').appendChild(createBook(book)));
                }
            })
            .catch(function (error) {
                getId('alert').innerHTML = "<b>Search error :(</b>";
                getId('alert').style.display = 'block';
            })
            .then(function () {
                getId('loading').style.display = 'none';
                clickBook();
            });
    }

    function insert(parameters) {
        getId('addLoading').style.display = 'block';
        getId('addAlert').style.display = 'none';
        getId('addForm').style.display = 'none';
        
        axios.post(url, parameters)
            .then(function (response) {
                findAll();
                instanceModal(getId('modalAddBook')).close();
                getId('addTitle').value = null;
                getId('addDescription').value = null;
                getId('addWidth').value = null;
                getId('addHeight').value = null;
                getId('addLength').value = null;
                getId('addWeight').value = null;
                getId('addFirstName').value = null;
                getId('addLastName').value = null;
                getId('addCellPhone').value = null;
                getId('addCep').value = null;
                getId('addPrice').value = null;
                getId('addAlert').style.display = 'none';
                
            })
            .catch(function (error) {
                getId('addAlert').style.display = 'block';
            })
            .then(function () {
                getId('addLoading').style.display = 'none';
                getId('addForm').style.display = 'block';
            });
    }

    function findCep(parameters) {
        //
    }

    function clickBook() {
        for(let i = 0; i < getClass('book').length; i++) {
            getClass('book')[i].onclick = function () {
                alert(1);
                console.log(data);
                // document.getElementById('book').getElementsByTagName('h4')[0].innerText = this.getElementsByTagName('span')[0].innerText;
            }
        }
    }

    function createBook(data) {
        let book = createElement('div');
        book.className = "col s6 m3 book section";
        let a = createElement('a');
        a.className = "modal-trigger";
        a.href = "#modalBook";
        let card = createElement('div');
        card.className = "card";
        let cardImage = createElement('div');
        cardImage.className = "card-image";
        let img = createElement('img');
        img.src = "https://i.ibb.co/tPVQxSR/booksAPI.png";
        let cardContent = createElement('div');
        cardContent.className = "card-content";
        cardContent.style.height = "125px";
        cardContent.style.overflow = "hidden";
        let title = createElement('span');
        title.className = "black-text";
        if(data.title.length > 30) {
            data.title = data.title.slice(0,30) + "..."
        }
        title.innerText = data.title.slice();
        let price = createElement('p');
        price.className = "blue-text";
        price.innerText = "R$"+data.price;
        cardImage.appendChild(img);
        cardContent.appendChild(title);
        cardContent.appendChild(price);
        card.appendChild(cardImage);
        card.appendChild(cardContent);
        a.appendChild(card);
        book.appendChild(a);
        return book;
    }
    
})();