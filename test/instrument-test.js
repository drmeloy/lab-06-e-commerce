import renderInstrument from '../shop/render-instrument.js';
import renderTableRow from '../shopping-cart/render-table-row.js';

const test = QUnit.test;

QUnit.module('Render Instrument');

test('renderInstrument correctly renders an instrument', assert => {
    // arrange
    const guitar = {
        id: 'guitar',
        brand: 'Guild',
        image: '../img/guild.jpg',
        description: 'A good guitar',
        category: 'stringed',
        price: 500,
    };
    const expected = '<li class="stringed" title="Brand: Guild"><h3>A good guitar</h3><img src="../img/guild.jpg" alt="A good guitar image"><p class="price">$500<button value="guitar">Add</button></p></li>';
    
    // act
    const dom = renderInstrument(guitar);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});

test('renderTableRow correctly renders table row', assert => {
    // arrange
    const guitar = {
        id: 'guitar',
        brand: 'Guild',
        image: '../img/guild.jpg',
        description: 'A good guitar',
        category: 'stringed',
        price: 500,
    };

    const cart = {
        code: 'apple',
        quantity: 4
    };

    const expected = '<tr><td>apple</td><td>4</td><td>$1.00</td><td>$4.00</td></tr>';
    
    // act
    const fruitElementTr = renderTableRow(apple, appleOrder);
    const html = fruitElementTr.outerHTML;
    
    // assert
    assert.equal(html, expected);
});