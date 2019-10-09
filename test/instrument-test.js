import renderInstrument from '../shop/render-instrument.js';
import renderCart from '../cart/render-cart.js';

const test = QUnit.test;

QUnit.module('Render Instrument');

test('renderInstrument correctly renders an instrument', assert => {
    const guitar = {
        id: 'guitar',
        brand: 'Guild',
        image: '../img/guild.jpg',
        description: 'A good guitar',
        category: 'stringed',
        price: 500,
    };
    
    const expected = '<li class="stringed" title="Brand: Guild"><h3>A good guitar</h3><img src="../img/guild.jpg" alt="A good guitar image"><p class="price">$500<button value="guitar">Add</button></p></li>';
    
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