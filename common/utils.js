export const toUsd = (number) => {
    return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

export const calcLineTotal = (quantity, price) => {
    return Number((quantity * price).toFixed(2));
};

export const findProduct = (instruments, cartID) => {
    for (let i = 0; i < instruments.length; i++) {
        const instrument = instruments[i];
        if (instrument.id === cartID) {
            return instrument;
        }
    }
    return null;
};

export const calcOrderTotal = (cart, instruments) => {
    let orderTotal = 0;
    for (let i = 0; i < cart.length; i++){
        const cartID = cart[i].id;
        const instrument = findProduct(instruments, cartID);
        const lineTotal = calcLineTotal(cart[i].quantity, instrument.price);
        orderTotal = orderTotal + lineTotal;
    }
    return orderTotal;
};