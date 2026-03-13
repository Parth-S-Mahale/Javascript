function orderTea(teaType) {
    function confirmOrder() {
        return "Order confirmed for chai";
    }
    return confirmOrder();
}

let orderConfirmation = orderTea("chai")
console.log(orderConfirmation);
