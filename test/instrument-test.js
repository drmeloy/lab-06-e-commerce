import renderInstrument from '../shop/render-instrument.js';
import { renderCart } from '../cart/render-cart.js';
import { findProduct, calcLineTotal, calcOrderTotal } from '../common/utils.js';
import instrumentArray, { guitar as rootGuitar } from '../shop/instruments.js';

const test = QUnit.test;

QUnit.module('Shopping site tests');

test('renderInstrument correctly renders an instrument', assert => {
    const guitar = {
        id: 'guitar',
        brand: 'Guild',
        image: '../img/guild.jpg',
        description: 'A good guitar',
        category: 'stringed',
        price: 500,
    };
    
    const expected = '<li class="stringed" title="Brand: Guild"><h3>A good guitar</h3><img src="../img/guild.jpg" alt="A good guitar image"><p class="price">$500<input type="number" id="input"><button value="guitar">Add to cart</button></p></li>';
    
    const dom = renderInstrument(guitar);
    const html = dom.outerHTML;
    
    assert.equal(html, expected);
});

test('renderCart correctly renders table row', assert => {
    const guitar = {
        id: 'guitar',
        brand: 'Guild',
        image: '../img/guild.jpg',
        description: 'A good guitar',
        category: 'stringed',
        price: 500,
    };

    const guitarOrder = {
        id: 'guitar',
        quantity: 4
    };

    const expected = '<tr><td>guitar</td><td>4</td><td>$500.00</td><td>$2,000.00</td></tr>';
    
    const cartTr = renderCart(guitarOrder, guitar);
    const html = cartTr.outerHTML;
    
    assert.equal(html, expected);
});

test('findProduct returns the instrument with the id that matches the cart item id ', assert => {
    const instruments = instrumentArray;

    const cartID = 'guitar';

    const expected = rootGuitar;
    
    const product = findProduct(instruments, cartID);
    
    assert.deepEqual(product, expected);
});

test('calcLineTotal returns the correct line price ', assert => {
    const quantity = 4;

    const price = 50;

    const expected = 200.00;

    const total = calcLineTotal(quantity, price);
    
    assert.equal(total, expected);
});

test('calcOrderTotal returns the correct order total ', assert => {

    const expected = 3900.00;

    const cart = [{
        id: 'guitar',
        quantity: 2
    }, {
        id: 'trumpet',
        quantity: 5
    }, {
        id: 'piano',
        quantity: 1
    }, {
        id: 'harmonica',
        quantity: 10
    }];

    const total = calcOrderTotal(cart, instrumentArray);
    
    assert.equal(total, expected);
});