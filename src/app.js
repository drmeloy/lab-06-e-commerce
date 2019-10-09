import instruments from './instruments.js';
import renderInstrument from './render-instrument.js';

const list = document.getElementById('instruments-ul');

for (let i = 0; i < instruments.length; i++){
    const instrument = instruments[i];
    const dom = renderInstrument(instrument);
    list.appendChild(dom);
}