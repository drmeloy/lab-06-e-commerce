import instruments from '../shop/instruments.js';
import { cart } from './render-cart.js';
import findProduct from '../common/utils.js';
import renderCart from './render-table-row.js.js';

const tbody = document.getElementById('tbody');

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const instrument = findProduct(instruments, cart.id);
    const dom = renderCart(lineItem, instrument);

    tbody.appendChild(dom);
}