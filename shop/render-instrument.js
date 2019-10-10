import { findProduct } from '../common/utils.js';

function renderInstrument(instrument){

    const li = document.createElement('li');
    li.className = instrument.category;
    li.title = 'Brand: ' + instrument.brand;
    
    const h3 = document.createElement('h3');
    h3.textContent = instrument.description;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = instrument.image;
    img.alt = instrument.description + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';
    p.textContent = '$' + instrument.price;

    const button = document.createElement('button');
    button.value = instrument.id;
    button.textContent = 'Add';
    button.addEventListener('click', () => {
        let json = localStorage.getItem('cart');
        let cart;
        if (json){
            cart = JSON.parse(json);
        }
        else {
            cart = [];
        }

        let lineItem = findProduct(cart, button.value);
        if (!lineItem){
            lineItem = {
                id: button.value,
                quantity: 1
            };
            cart.push(lineItem);
        } else {
            lineItem.quantity++;
        }

        json = JSON.stringify(cart);
        localStorage.setItem('cart', json);
    });

    p.appendChild(button);
    li.appendChild(p);

    return li;
}

export default renderInstrument;
