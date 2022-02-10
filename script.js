function activateNav() {
    let menuBtn = document.getElementById("menu-btn");
    let sideNav = document.getElementById("side-nav");
  
    menuBtn.addEventListener("click", () => {
      sideNav.classList.toggle("nav-active");
    });
  }
  
  activateNav();
  
  let shoppingProducts = [
    {
      id: 1,
      price: 290,
      name: "Apple 7656",
      description:
        "The all-in-one for all. if you can dream it, you can do it with Imac",
      img: "applee.jpeg",
    },
    {
      id: 2,
      price: 250,
      name: "Apple pro",
      description:
        "The all-in-one for all. if you can dream it, you can do it with Imac",
      img: "iphone 13.jpeg",
    },
    {
      id: 3,
      price: 200,
      name: "Xiomi Redmi 10",
      description:
        "The all-in-one for all. if you can dream it, you can do it with Imac",
      img: "xiomi redmi.jpeg",
    },
    {
      id: 4,
      price: 150,
      name: "vivo x70",
      description:
        "The all-in-one for all. if you can dream it, you can do it with Imac",
      img: "vivo x70.jpeg",
    },
    {
      id: 5,
      price: 150,
      name: "vivo x50",
      description:
        "The all-in-one for all. if you can dream it, you can do it with Imac",
      img: "vivo x50.jpeg",
    },
    {
      id: 6,
      price: 150,
      name: "apple-iphone-se",
      description:
        "The all-in-one for all. if you can dream it, you can do it with Imac",
      img: "iphone 1.jpeg",
    },
    {
      id: 7,
      price: 150,
      name: "Redmi Note 10",
      description:
        "The all-in-one for all. if you can dream it, you can do it with Imac",
      img: "redmi note 10.jpeg",
    },
    {
      id: 8,
      price: 150,
      name: "vivo x70 pro",
      description:
        "The all-in-one for all. if you can dream it, you can do it with Imac",
      img: "vivo x70 pro.jpeg",
    },
    {
      id: 9,
      price: 150,
      name: "vivo v21",
      description:
        "The all-in-one for all. if you can dream it, you can do it with Imac",
      img: "vivo v21.jpeg",
    },
    {
      id: 10,
      price: 150,
      name: "Vivo-y1s-2",
      description:
        "The all-in-one for all. if you can dream it, you can do it with Imac",
      img: "apple.jpeg",
    },
  ];
  
  function createProductCard(product) {
    return `
    <div class="card" style="width: 15rem;">
        <img src="images/${product.img}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">
          ${product.description}
          </p>
          <span class="btn btn-success fw-bold">$&nbsp;&nbsp;${product.price}</span>
          <button class="btn btn-primary" onClick="addToCart(${product.id})">Add to Cart</button>
        </div>
      </div>
    `;
  }
  
  function populateProducts() {
    let productsElement = document.getElementById("products-container");
  
    let productCards = shoppingProducts.map((item) => createProductCard(item));
  
    productsElement.innerHTML = productCards;
  }
  
  populateProducts();
  
  /**Day 3 */
  let cart = [];
  
  function createCartItem(product) {
    return `
     <div class="selected-item">
        <img src="images/${product.img}" alt="">
        <p>${product.name}</p>
        <p>Price: $. ${product.price}</p>
        <button class="btn btn-success onClick="remove(${product.id})">Remove</button>
      </div>
    `;
  }
  
  function populateCart() {
    let cartBody = document.getElementById("selected-items");
    let selectedProducts;
  
    let cartCount = document.getElementById("total-items");
    let numOfItems = 0;
  
    let totalPrice = document.getElementById("total-price");
    let total = 0;
  
    if (cart.length) {
      /**Display selected products */
      selectedProducts = cart.map((product) => createCartItem(product));
      numOfItems = cart.length;
  
      let productPrices = cart.map((product) => product.price);
  
      for (x = 0; x < productPrices.length; x++) {
        total = total + productPrices[x];
      }
    } else {
      selectedProducts = `<p>No PRODUCTS HERE</p>`;
      numOfItems = 0;
      total = 0;
    }
  
    cartBody.innerHTML = selectedProducts;
    cartCount.innerText = numOfItems;
    totalPrice.innerText = `Total: $. ${total}`;
  }
  
  populateCart();
  
  function addToCart(id) {
    let product = shoppingProducts.find((product) => product.id == id);
  
    if (cart.includes(product)) {
      return;
    } else {
      cart.push(product);
    }
  
    populateCart();
  }


  function remove(id) {
    let product = shoppingProducts.find((product) => product.id == id);
  
    if (cart.includes(product)) {
      return;
    } else {
      cart.delete(product);
    }
  
    remove();
  }