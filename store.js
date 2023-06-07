// Function to save the cart to local storage
function saveCartToStorage() {
    var cartItems = document.getElementsByClassName('cart-items')[0].innerHTML;
    localStorage.setItem('cart', cartItems);
  }
  
  // Function to remove an item from the cart
  function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
    saveCartToStorage();
  }
  
  // Function to handle quantity change
  function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updateCartTotal();
    saveCartToStorage();
  }
  
  // Function to initialize the store page
  function initStorePage() {
    var addToCartButtons = document.getElementsByClassName('shop-item-button');
    for (var i = 0; i < addToCartButtons.length; i++) {
      var button = addToCartButtons[i];
      button.addEventListener('click', addToCartClicked);
    }
  
    var savedCart = localStorage.getItem('cart');
    if (savedCart) {
      document.getElementsByClassName('cart-items')[0].innerHTML = savedCart;
      updateCartTotal();
    }
  }
  
  // Function to initialize the home page
  function initHomePage() {
    // Add your code for the home page here
    displaySavedCart();
  }
  
  // Function to initialize the about page
  function initAboutPage() {
    // Add your code for the about page here
    displaySavedCart();
  }
  
  // Function to display the saved cart items
  function displaySavedCart() {
    var savedCart = localStorage.getItem('cart');
    if (savedCart) {
      document.getElementsByClassName('cart-items')[0].innerHTML = savedCart;
      updateCartTotal();
    }
  }
  
  // Call the appropriate initialization function based on the current page
  if (window.location.pathname.includes('store.html')) {
    initStorePage();
  } else if (window.location.pathname.includes('index.html')) {
    initHomePage();
  } else if (window.location.pathname.includes('about.html')) {
    initAboutPage();
  }
  
  // Add event listeners to the "ADD TO CART" buttons
  var addToCartButtons = document.getElementsByClassName('shop-item-button');
  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener('click', addToCartClicked);
  }
  
  // Add event listener to the "PURCHASE" button
  document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);
  
  // Function to handle adding items to the cart
  function addToCartClicked(event) {
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
    addItemToCart(title, price, imageSrc);
    updateCartTotal();
    saveCartToStorage();
  }
  
  // Function to add items to the cart
  function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title');
    for (var i = 0; i < cartItemNames.length; i++) {
      if (cartItemNames[i].innerText === title) {
        alert('This item is already added to the cart');
        return;
      }
    }
    var cartRowContents = `
      <div class="cart-item cart-column">
          <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
          <span class="cart-item-title">${title}</span>
      </div>
      <span class="cart-price cart-column">${price}</span>
      <div class="cart-quantity cart-column">
          <input class="cart-quantity-input" type="number" value="1">
          <button class="btn btn-danger" type="button">REMOVE</button>
      </div>`;
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
    saveCartToStorage();
  }
  
  // Function to update the cart total
  function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
      var cartRow = cartRows[i];
      var priceElement = cartRow.getElementsByClassName('cart-price')[0];
      var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
      var price = parseFloat(priceElement.innerText.replace('$', ''));
      var quantity = quantityElement.value;
      total += price * quantity;
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
  }
  
  // Function to handle the purchase button click
  function purchaseClicked() {
    alert('Thank you for your purchase!');
    var cartItems = document.getElementsByClassName('cart-items')[0];
    while (cartItems.hasChildNodes()) {
      cartItems.removeChild(cartItems.firstChild);
    }
    updateCartTotal();
    localStorage.removeItem('cart');
  }
  