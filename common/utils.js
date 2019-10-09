export const toUsd = (number) => {
    return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

export const calcLineTotal = (quantity, price) => {
    return Number((quantity * price).toFixed(2));
};

export const findProduct = (instrument, cartID) => {
    for (let i = 0; i < instrument.length; i++) {
        const instrument = instrument[i];
        if (instrument.id === cartID) {
            return instrument;
        }
    }
    return null;
};