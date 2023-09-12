const menuEmail = document.querySelector('.navbar-email');
const burgerMenu = document.querySelector('.menu');
const cartMenu = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.productDetail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('.product-detail2');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
cartMenu.addEventListener('click', toggleCartAside);
productDetailContainer.addEventListener('click', closeProductDetail);


//COMPORTAMIENTO DE LOS MENUES
function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }

  closeProductDetail();

  mobileMenu.classList.toggle('inactive');
}

function toggleCartAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }

  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive');
  }

  shoppingCartContainer.classList.toggle('inactive'); 
}

function openProductDetail() {
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}

function closeProductDetail() {
  productDetailContainer.classList.add('inactive');
}


//LISTA DE PRODUCTOS
const productsList = [];

productsList.push({
  name: 'Camera',
  image: './public/images/assets/camera.jpeg',
  price: '$99,00'
});

productsList.push({
  name: 'Flowerpot',
  image: './public/images/assets/flowerpot.jpeg',
  price: '$40,00'
});

productsList.push({
  name: 'Japanese lucky cat',
  image: './public/images/assets/luckycat.webp',
  price: '$69,50'
});

productsList.push({
  name: 'Bike',
  image: './public/images/assets/bike-photo.jpeg',
  price: '$120,00'
});

productsList.push({
  name: 'Mirror',
  image: './public/images/assets/mirror.webp',
  price: '$65,00'
});

productsList.push({
  name: 'Cup',
  image: './public/images/assets/cup.webp',
  price: '$32,00'
});

productsList.push({
  name: 'Book: "Take the risk"',
  image: './public/images/assets/book.jpeg',
  price: '$49,99'
});

productsList.push({
  name: 'Jersey',
  image: './public/images/assets/jersey.webp',
  price: '$75,00'
});

productsList.push({
  name: 'Cat figure',
  image: './public/images/assets/cat.webp',
  price: '$25,00'
});

productsList.push({
  name: 'Incandescent light bulb',
  image: './public/images/assets/bulb.webp',
  price: '$20,00'
});

productsList.push({
  name: 'Black men shoes',
  image: './public/images/assets/shoes.jpeg',
  price: '$100,00'
});           

productsList.push({
  name: 'Notebook',
  image: './public/images/assets/notebook.webp',
  price: '$15,00'
});

productsList.push({
  name: 'Scissors',
  image: './public/images/assets/scisors.jpeg',
  price: '$10,00'
});

productsList.push({
  name: 'Chess game',
  image: './public/images/assets/chess.webp',
  price: '$85,00'
});

productsList.push({
  name: 'Watch',
  image: './public/images/assets/watch.jpeg',
  price: '$70,00'
});

//CREACIÓN DE LAS TARJETAS DE PRODUCTOS EN EL HTML
function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetail);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './public/images/icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productsList);