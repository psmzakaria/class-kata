class Waiter {
  constructor(name) {
    this.name = name;
    this.orders = [];
  }
  welcomeGuests() {
    return "welcome! what can i do for you today?";
  }
  takeOrder(orders) {
    this.orders = orders;
    return orders;
  }
  repeatOrder() {
    return console.log("This is your order", this.orders);
  }
}

console.log(waiter1.name);
const waiter1 = new Waiter("Moshi");
console.log(
  waiter1.takeOrder(["Chicken Rice", "Chilli Sauce", "Ice Lemon Tea"])
);
waiter1.repeatOrder();
// This is another way to excecute.
// const order1 = ["Chicken Rice", "Chilli Sauce", "Ice Lemon Tea"];
