import { calcLineTotal, toUsd } from '../common/utils.js';

const makeTd = (content) => {
    const td = document.createElement('td');
    td.textContent = content;
    return td;
};

const append = (tr, td) => {
    tr.appendChild(td);
};

export const renderCart = (cart, instrument) => {
    const tableRow = document.createElement('tr');
    
    const itemTotal = calcLineTotal(cart.quantity, instrument.price);

    [instrument.id, cart.quantity, toUsd(instrument.price), toUsd(itemTotal)].forEach(data => {
        const td = makeTd(data);
        append(tableRow, td);
    });

    return tableRow;
};

