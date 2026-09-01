
let product = {
    productId: 101,
    productName: "Laptop",
    price: 50000,
    quantity: 2,
    calculateTotal: function() {
        return product.price * product.quantity;
    },
    updateQuantity: function(newQuantity) {
        product.quantity = newQuantity;
    },
    displayDetails: function() {
        document.getElementById("output").innerHTML =
            "Product ID: " + product.productId + "<br>" +
            "Product Name: " + product.productName + "<br>" +
            "Price: " + product.price + "<br>" +
            "Quantity: " + product.quantity + "<br>" +
            "Total Price: " + product.calculateTotal();
    }
};
product.displayDetails();


