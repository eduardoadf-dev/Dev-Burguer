# 🍔 DevClub Burguer

Cardápio interativo de uma hamburgueria desenvolvido com **HTML**, **CSS** e **JavaScript puro**, com foco na prática dos principais métodos de array do JS.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 🚀 Demonstração

Link do projeto: https://eduardoadf-dev.github.io/Dev-Burguer/

---

## 📋 Sobre o projeto

O **DevClub Burguer** é um cardápio digital interativo onde o usuário pode visualizar os produtos de uma hamburgueria e interagir com eles através de botões que demonstram na prática o funcionamento dos métodos de array do JavaScript.

---

## ✨ Funcionalidades

| Botão | Método JS | O que faz |
|---|---|---|
| **Mostrar tudo** | `forEach` | Exibe todos os produtos do cardápio |
| **Mapear** | `map` | Mostra todos os produtos com **10% de desconto** |
| **Somar tudo** | `reduce` | Calcula e exibe o **valor total** do cardápio |
| **Filtrar** | `filter` | Exibe apenas os produtos **veganos** |

---

## 🧠 Métodos JavaScript praticados

### 🔁 forEach
Percorre todos os itens do array e renderiza cada produto como um elemento `<li>` na tela.
```js
productsArray.forEach(product => {
    myLi += `<li>...</li>`
})
```

---

### 🗺️ map
Cria um **novo array** com os preços reduzidos em 10%, sem modificar o array original.
```js
const newPrices = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9,
}))
```

---

### ➕ reduce
Acumula os preços de todos os produtos em um único valor total.
```js
const totalPrice = menuOptions.reduce((acc, current) => acc + current.price, 0)
```

---

### 🌿 filter
Retorna apenas os produtos cuja propriedade `vegan` é `true`.
```js
const veganProducts = menuOptions.filter(product => product.vegan)
```

---

## 📁 Estrutura do projeto

```
devclub-burguer/
├── assets/
│   ├── xsalada.jpeg
│   ├── xbacon.png
│   ├── bacon-egg.png
│   ├── monstruoso.png
│   ├── xvegan.png
│   └── monstruoso-vegan.png
├── index.html
├── styles.css
├── products.js
└── script.js
```

---

## 🖥️ Como rodar o projeto

1. Clone o repositório:
```bash
git clone https://github.com/eduardoadf-dev/Dev-Burguer.git
```

2. Acesse a pasta do projeto:
```bash
cd devclub-burguer
```

3. Abra o arquivo `index.html` no navegador — ou use a extensão **Live Server** no VS Code.

---

## 📱 Responsividade

O projeto é responsivo e se adapta a diferentes tamanhos de tela:

- **Desktop** → 3 colunas
- **Tablet** (até 900px) → 2 colunas
- **Mobile** (até 600px) → 1 coluna + menu hamburguer recolhível

---

## 🛠️ Tecnologias utilizadas

- **HTML5** — estrutura da página
- **CSS3** — estilização, Grid Layout e Media Queries
- **JavaScript (ES6+)** — manipulação do DOM e métodos de array
