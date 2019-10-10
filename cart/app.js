import instruments from '../shop/instruments.js';
import { renderCart } from './render-cart.js';
import { toUsd, calcOrderTotal } from '../common/utils.js';


let cart = JSON.parse(localStorage.getItem('cart'));
const orderButton = document.getElementById('order-button')


if (!cart){
    orderButton.style.cssText = 'display: none;';
}

const cartTb = document.getElementById('tbody');

cart.forEach(cartItem => {
    instruments.forEach(instrument => {
        if (instrument.id === cartItem.id){
            const cartTr = renderCart(cartItem, instrument);
            cartTb.appendChild(cartTr);
        }
    });
});

const orderTotalDisplay = document.getElementById('order-total-cell');

let orderTotal = calcOrderTotal(cart, instruments);

orderTotalDisplay.textContent = toUsd(orderTotal);

// Add an event handler to the "Place Order" button that:
// Displays an alert with the contents of the cart (hint: JSON.stringify(cart, true, 2) will give you nicely formatted JSON)
// Remove the cart from localStorage (.removeItem)
// Redirect the user back to the home page

orderButton.addEventListener('click', () => {
    let itemsOrdered = '';
    cart.forEach(item => {
        itemsOrdered += item.quantity + ' ' + item.id + '\n';
    });
    alert(`You are ordering: \n ${itemsOrdered} Thank you for shopping with us!`);
    localStorage.removeItem('cart');
    window.location.href = '../home/index.html';
});