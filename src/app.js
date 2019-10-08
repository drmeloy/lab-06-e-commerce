

function Product(id, name, image, description, category, price){
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = description;
    this.category = category;
    this.price = price;
}

const guitar = new Product('guitar', 'Guild', '../img/guild.jpg', 'A good guitar', 'stringed', 500);
const saxophone = new Product('saxophone', 'Yamaha', '../img/saxophone.jpg', 'A good saxophone', 'horn', 800);
const cello = new Product('cello', 'Etude', '../img/cello.jpg', 'A good cello', 'stringed', 400);
const piano = new Product('piano', 'Kawai', '../img/piano.jpg', 'A good piano', 'percussion', 1500);
const harmonica = new Product('harmonica', 'Hoener', '../img/harmonica.jpg', 'A good harmonica', 'wind', 50);
const ukelele = new Product('ukelele', 'Kala', '../img/ukelele.jpg', 'A good ukelele', 'stringed', 100);
const drums = new Product('drums', 'ATV', '../img/drums.jpg', 'Some good drums', 'percussion', 1300);
const trumpet = new Product('trumpet', 'Jupiter', '../img/trumpet.jpg', 'A good trumpet', 'brass', 180);

const instruments = [
    guitar,
    saxophone,
    cello,
    piano,
    harmonica,
    ukelele,
    drums,
    trumpet
];

export default instruments;