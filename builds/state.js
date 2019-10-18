//Example: Online store process
var Order = /** @class */ (function () {
    function Order() {
        this.paymentPendingState = new PaymentPendingState(this);
        this.cancelOrderState = new CancelOrderState(this);
        this.orderBeingPreparedState = new OrderBeingPreparedState(this);
        this.orderShippedState = new OrderShippedState(this);
        this.currentState = this.paymentPendingState;
    }
    Order.prototype.setState = function (state) {
        this.currentState = state;
    };
    Order.prototype.getState = function () {
        return this.currentState;
    };
    return Order;
}());
var PaymentPendingState = /** @class */ (function () {
    function PaymentPendingState(order) {
        this.order = order;
    }
    PaymentPendingState.prototype.cancelOrder = function () {
        console.log('Cancelling your unpaid order...');
        this.order.setState(this.order.cancelOrderState);
    };
    PaymentPendingState.prototype.verifyPayment = function () {
        console.log('Payment verified! Shipping soon...');
        this.order.setState(this.order.orderBeingPreparedState);
    };
    PaymentPendingState.prototype.shipOrder = function () {
        console.log('Cannot ship the order when payment is pending.');
    };
    return PaymentPendingState;
}());
var CancelOrderState = /** @class */ (function () {
    function CancelOrderState(order) {
        this.order = order;
    }
    CancelOrderState.prototype.cancelOrder = function () {
        console.log('Cancelling your order...');
        this.order.setState(this.order.cancelOrderState);
    };
    CancelOrderState.prototype.verifyPayment = function () {
        console.log('Order is cancelled and payment cannot be verified.');
    };
    CancelOrderState.prototype.shipOrder = function () {
        console.log('Order is cancelled and cannot ship.');
    };
    return CancelOrderState;
}());
var OrderBeingPreparedState = /** @class */ (function () {
    function OrderBeingPreparedState(order) {
        this.order = order;
    }
    OrderBeingPreparedState.prototype.cancelOrder = function () {
        console.log('Cancelling your order...');
        this.order.setState(this.order.cancelOrderState);
    };
    OrderBeingPreparedState.prototype.verifyPayment = function () {
        console.log('Payment has already been verified');
    };
    OrderBeingPreparedState.prototype.shipOrder = function () {
        console.log('Shipping your order now!');
        this.order.setState(this.order.orderShippedState);
    };
    return OrderBeingPreparedState;
}());
var OrderShippedState = /** @class */ (function () {
    function OrderShippedState(order) {
        this.order = order;
    }
    OrderShippedState.prototype.cancelOrder = function () {
        console.log('Cannot cancel! Already shipped.');
    };
    OrderShippedState.prototype.verifyPayment = function () {
        console.log('Cannot verify payment! Already shipped.');
    };
    OrderShippedState.prototype.shipOrder = function () {
        console.log('Cannot ship again! Already shipped.');
    };
    return OrderShippedState;
}());
var order = new Order();
order.getState().shipOrder();
order.getState().verifyPayment();
order.getState().verifyPayment();
order.getState().shipOrder();
order.getState().cancelOrder();
order.getState().shipOrder();
