function renderInstrument(instrument){

    const li = document.createElement('li');
    li.className = instrument.category;
    li.title = 'Brand: ' + instrument.brand;
    
    const h3 = document.createElement('h3');
    h3.textContent = instrument.description;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = instrument.image;
    img.alt = instrument.description + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';
    p.textContent = '$' + instrument.price;

    const button = document.createElement('button');
    button.value = instrument.id;
    button.textContent = 'Add';

    p.appendChild(button);
    li.appendChild(p);

    return li;
}

export default renderInstrument;