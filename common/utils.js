export const toUsd = (number) => {
    number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

export const calcLineTotal = (quantity, price) => {
    return Number((quantity * price).toFixed(2));
};