class ItemsController {
    constructor(currentId = 0) {
      this.currentId = currentId;
      this.items = [];
    }
  
    addItem(name, description, img, price, quantity, createdAt) {
        this.currentId++;
      
        const item = {
          id: this.currentId,
          name,
          description,
          img,
          price,
          quantity,
          createdAt
        };
      
        this.items.push(item);
      }
}
// Create a new instance of ItemsController
const itemsController = new ItemsController();


// Call the addItem method with information for destiny 2
itemsController.addItem(

    "Call Of Duty: Modern Warfare 2", // name
    "Experience the ultimate online playground with classic multiplayer, or squad-up and play cooperatively in a collection of elite operations accessible to all skill levels.", // description
    "https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/mw2/meta-images/reveal/mw2-reveal-meta-share.jpg", // img
    69.99, // price
    10, // quantity
    "2023-05-01" // createdAt
  );
  
