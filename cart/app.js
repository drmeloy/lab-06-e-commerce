import instruments from '../shop/instruments.js';
import { renderCart, cart } from './render-cart.js';
import { toUsd, calcLineTotal, calcOrderTotal } from '../common/utils.js';

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