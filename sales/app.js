import instruments from '../shop/instruments.js';
import { renderSales } from './render-sales.js';
import { toUsd, calcOrderTotal } from '../common/utils.js';

const sales = JSON.parse(localStorage.getItem('sales'));
const salesTb = document.getElementById('tbody');
const salesButton = document.getElementById('sales-clear-button');

const hideSalesButton = () => {
    salesButton.style.cssText = 'display: none;';
};

const buildSales = () => {
    sales.forEach(salesItem => {
        instruments.forEach(instrument => {
            if (instrument.id === salesItem.id){
                const salesTr = renderSales(salesItem, instrument);
                salesTb.appendChild(salesTr);
            }
        });
    });
    const salesTotalDisplay = document.getElementById('sales-total-cell');
    let salesTotal = calcOrderTotal(sales, instruments);
    salesTotalDisplay.textContent = toUsd(salesTotal);
};

if (!sales){
    hideSalesButton();
} else {
    buildSales();
}

salesButton.addEventListener('click', () => {
    localStorage.removeItem('sales');
    window.location.href = '../home/index.html';
});