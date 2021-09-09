const app = {};

app.init = function() {
    app.displayInventory();
    app.changeDisplay();
};

app.inventory = {
    burgers : 50,
    hotdogs : 40,
    sandwiches : 70,
    poutines : 30,
    fries : 100
}

app.displayInventory = function() {
    for (let item in app.inventory) {
        const list = document.createElement('li');
        list.innerHTML = `We have ${app.inventory[item]} ${item}`;
        app.ulEl = document.querySelector('ul');

        app.ulEl.appendChild(list);
    }
}

app.form = document.querySelector("form");


app.changeDisplay = function() {
    

    app.form.addEventListener('submit', function(e) {
        e.preventDefault();

        let product = document.querySelector('select').value;

        app.inventory[product] = app.inventory[product] - 1;

        app.ulEl.innerHTML = '';

        app.displayInventory();


    })
}



app.init();