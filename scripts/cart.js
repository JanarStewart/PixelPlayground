class Cart {
    constructor() {
      this.items = [];
    }
  
    addItem(item, quantity = 1) {
      const cartItem = {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity
      };
  
      const existingItemIndex = this.items.findIndex(
        (i) => i.id === item.id
      );
  
      if (existingItemIndex !== -1) {
        this.items[existingItemIndex].quantity += quantity;
      } else {
        this.items.push(cartItem);
      }
    }
  
    removeItem(itemId, quantity = 1) {
      const existingItemIndex = this.items.findIndex(
        (item) => item.id === itemId
      );
  
      if (existingItemIndex !== -1) {
        const existingItem = this.items[existingItemIndex];
  
        if (existingItem.quantity > quantity) {
          existingItem.quantity -= quantity;
        } else {
          this.items.splice(existingItemIndex, 1);
        }
      }
    }
  
    updateItemQuantity(itemId, quantity) {
      const existingItemIndex = this.items.findIndex(
        (item) => item.id === itemId
      );
  
      if (existingItemIndex !== -1) {
        this.items[existingItemIndex].quantity = quantity;
      }
    }
  }
  const cart = new Cart();

const item = itemsController.items[0];
cart.addItem(item);

console.log(cart.items); // should log the Modern Warfare 2 item added to the cart
