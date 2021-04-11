const bouquetSrc = ['assets/img/bouquet.png', 'assets/img/bouquet.png', 'assets/img/bouquet.png', 'assets/img/bouquet.png', 'assets/img/bouquet.png', 'assets/img/bouquet.png'];
const orchidsSrc = ['assets/img/orchid.png', 'assets/img/orchid.png', 'assets/img/orchid.png', 'assets/img/orchid.png', 'assets/img/orchid.png', 'assets/img/orchid.png'];
let imgs = document.querySelectorAll('.shop-visualizer img');

const bouquetNames = ['Bouquet Name 1', 'Bouquet Name 2', 'Bouquet Name 3', 'Bouquet Name 4', 'Bouquet Name 5', 'Bouquet Name 6'];
const orchidNames = ['Orchid Name 1', 'Orchid Name 2', 'Orchid Name 3', 'Orchid Name 4', 'Orchid Name 5', 'Orchid Name 6'];
let flowerNamesH4 = document.querySelectorAll('.shop-img-wrapper h4');

const bouquetPrices = ['$30.00', '$25.00', '$30.00', '$10.00', '$20.00', '$15.00'];
const orchidPrices = ['$20.00', '$30.00', '$25.00', '$10.00', '$20.00', '$30.00',];
let pricesP = document.querySelectorAll('.shop-visualizer p');

function showBouquets () {
	imgs.forEach((img, i) => {
		img.src = bouquetSrc[i];
	});
	flowerNamesH4.forEach((name, i) => {
		name.innerText = bouquetNames[i];
	});
	pricesP.forEach((price, i) => {
		price.innerText = bouquetPrices[i];
	})
}

function showOrchids () {
	imgs.forEach((img, i) => {
		img.src = orchidsSrc[i];
	});
	flowerNamesH4.forEach((name, i) => {
		name.innerText = orchidNames[i];
	});
	pricesP.forEach((price, i) => {
		price.innerText = orchidPrices[i];
	})
}
