import renderInstrument from '../src/render-instrument.js';

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