const calculateTotal = (price, quantity) => {
    return price * quantity;
}

let totalCost = calculateTotal(100, 5);
console.log("Total bill:", totalCost);
