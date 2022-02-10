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
      name: "IMAC",
      description:
        "The all-in-one for all. if you can dream it, you can do it with Imac",
      img: "apple1.jpg",
    },
    {
      id: 2,
      price: 250,
      name: "Imac Exclusive",
      description:
        "The all-in-one for all. if you can dream it, you can do it with Imac",
      img: "apple2.jpg",
    },
    {
      id: 3,
      price: 200,
      name: "Imac Pro",
      description:
        "The all-in-one for all. if you can dream it, you can do it with Imac",
      img: "apple3.jpg",
    },
    {
      id: 4,
      price: 150,
      name: "Imac Pro Lite",
      description:
        "The all-in-one for all. if you can dream it, you can do it with Imac",
      img: "apple4.png",
    },
    {
      id: 5,
      price: 150,
      name: "Imac Pro Lite",
      description:
        "The all-in-one for all. if you can dream it, you can do it with Imac",
      img: "iphone.png",
    },
    {
      id: 6,
      price: 150,
      name: "apple-iphone-se",
      description:
        "The all-in-one for all. if you can dream it, you can do it with Imac",
      img: "silver.jpg",
    },
    {
      id: 7,
      price: 150,
      name: "Imac Pro Lite",
      description:
        "The all-in-one for all. if you can dream it, you can do it with Imac",
      img: "Vivo v20.jpeg",
    },
    {
      id: 8,
      price: 150,
      name: "Imac Pro Lite",
      description:
        "The all-in-one for all. if you can dream it, you can do it with Imac",
      img: "apple4.png",
    },
    {
      id: 9,
      price: 150,
      name: "Imac Pro Lite",
      description:
        "The all-in-one for all. if you can dream it, you can do it with Imac",
      img: "apple4.png",
    },
    {
      id: 10,
      price: 150,
      name: "Imac Pro Lite",
      description:
        "The all-in-one for all. if you can dream it, you can do it with Imac",
      img: "Vivo-Y1s-2.jpg",
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
          <span class="btn btn-warning fw-bold">$&nbsp;&nbsp;${product.price}</span>
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