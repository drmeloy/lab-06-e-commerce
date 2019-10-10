import instruments from '../shop/instruments.js';
import { renderCart } from './render-cart.js';
import { toUsd, calcOrderTotal } from '../common/utils.js';


const cart = JSON.parse(localStorage.getItem('cart'));
const orderButton = document.getElementById('order-button')

const cartTb = document.getElementById('tbody');

if (!cart){
    orderButton.style.cssText = 'display: none;';
} else {
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
}

orderButton.addEventListener('click', () => {
    let itemsOrdered = '';
    cart.forEach(item => {
        itemsOrdered += item.quantity + ' ' + item.id + '\n';
    });
    alert(`You are ordering: \n ${itemsOrdered} Thank you for shopping with us!`);
    localStorage.removeItem('cart');
    window.location.href = '../home/index.html';
});