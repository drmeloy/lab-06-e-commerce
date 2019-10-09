import { calcLineTotal, toUsd } from '../common/utils.js';

const makeTd = (content) => {
    const td = document.createElement('td');
    td.textContent = content;
    return td;
};

const append = (tr, td) => {
    tr.appendChild(td);
};

const renderCart = (cartData, instrument) => {
    const tableRow = document.createElement('tr');
    
    const itemTotal = calcLineTotal(cartData.quantity, instrument.price);

    [instrument.id, cartData.quantity, toUsd(instrument.price), toUsd(itemTotal)].forEach(data => {
        const td = makeTd(data);
        append(tableRow, td);
    });

    return tableRow;

   // const colOne = makeTd(instrument.id);
    // const colTwo = makeTd(cartData.quantity);
    // const colThree = makeTd(instrument.price);
    // const colFour = makeTd(itemTotal);

    // append(tableRow, colOne);
    // append(tableRow, colTwo);
    // append(tableRow, colThree);
    // append(tableRow, colFour);

    // [colOne, colTwo, colThree, colFour].forEach(col => {
    //     append(tableRow, col);
    // });
};

export const cart = [{
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

export default renderCart;