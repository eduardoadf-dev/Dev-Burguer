const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".show-all")
const buttonMapAll = document.querySelector(".map-all")
const buttonSumAll = document.querySelector(".sum-all")
const buttonFilterVegan = document.querySelector(".filter-vegan")

function formatCurrency(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function showAll(productsArray) {
    let myLi = ''
    productsArray.forEach(product => {
        myLi += `
    <li>
        <img src=${product.src}>
        <p>${product.name}</p>
        <p class="item-price"> ${formatCurrency(product.price)} </p>
    </li>
    `
    })
    list.innerHTML = myLi
}

function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: (product.price * 0.9), // 10% de desconto
    }))

    showAll(newPrices)
}

function sumAllPrices() {
    const totalPrice = menuOptions.reduce((acc, current) => acc + current.price, 0);

    const sumLi = `
    <li class="sum-item">
      A soma total é: ${formatCurrency(totalPrice)}
    </li>
  `;

    list.innerHTML = sumLi;
}

function filterVegan() {
    const veganProducts = menuOptions.filter(product => product.vegan); // Product são posição por posição do array menuOptions, e o filter retorna somente os produtos onde a propriedade vegan é true
    showAll(veganProducts);
}

buttonShowAll.addEventListener("click", () => showAll(menuOptions)) // Usando uma função anônima para passar o array menuOptions diretamente para showAll
buttonMapAll.addEventListener("click", mapAllItems)
buttonSumAll.addEventListener("click", sumAllPrices)
buttonFilterVegan.addEventListener("click", filterVegan)

// Criar botão hamburguer dinamicamente (ou pode colocar direto no HTML)
const containerButtons = document.querySelector('.container-buttons');

const btnToggle = document.createElement('button');
btnToggle.textContent = 'Menu ☰';
btnToggle.style.display = 'none'; // inicialmente escondido
btnToggle.style.margin = '0 auto 20px auto';
btnToggle.style.padding = '10px';
btnToggle.style.background = '#79cb15';
btnToggle.style.border = 'none';
btnToggle.style.borderRadius = '5px';
btnToggle.style.color = '#000';
btnToggle.style.fontWeight = 'bold';
btnToggle.style.cursor = 'pointer';

containerButtons.parentNode.insertBefore(btnToggle, containerButtons);

// Função para mostrar/ocultar os botões
btnToggle.addEventListener('click', () => {
  if (containerButtons.style.display === 'none' || containerButtons.style.display === '') {
    containerButtons.style.display = 'flex';
  } else {
    containerButtons.style.display = 'none';
  }
});

// Detectar largura da tela e ajustar
function checkScreenWidth() {
  if (window.innerWidth <= 600) {
    btnToggle.style.display = 'block';
    containerButtons.style.display = 'none'; // esconder inicialmente no celular
  } else {
    btnToggle.style.display = 'none';
    containerButtons.style.display = 'flex'; // mostrar no desktop
  }
}

// Rodar no carregamento e no resize
window.addEventListener('resize', checkScreenWidth);
window.addEventListener('load', checkScreenWidth);