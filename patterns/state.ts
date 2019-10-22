//Example: Online store process

interface State {

    order: Order;

    cancelOrder(): void;
    verifyPayment(): void;
    shipOrder(): void;
}

class Order {
    private currentState: State
    public paymentPendingState: State;
    public cancelOrderState: State;
    public orderBeingPreparedState: State;
    public orderShippedState: State;

    constructor(){
        this.paymentPendingState = new PaymentPendingState(this);
        this.cancelOrderState = new CancelOrderState(this);
        this.orderBeingPreparedState = new OrderBeingPreparedState(this);
        this.orderShippedState = new OrderShippedState(this);

        this.currentState = this.paymentPendingState;
    }

    public setState(state: State) {
        this.currentState = state;
    }

    public getState(): State {
        return this.currentState;
    }

}

class PaymentPendingState implements State {

    public order: Order

    constructor(order: Order) {
        this.order = order;
    }

    cancelOrder(): void {
        console.log('Cancelling your unpaid order...');
        this.order.setState(this.order.cancelOrderState);
    }
    verifyPayment(): void {
        console.log('Payment verified! Shipping soon...');
        this.order.setState(this.order.orderBeingPreparedState);
    }
    shipOrder(): void {
        console.log('Cannot ship the order when payment is pending.');
    }

}

class CancelOrderState implements State {

    public order: Order;

    constructor(order: Order) {
        this.order = order;
    }

    cancelOrder(): void {
        console.log('Cancelling your order...');
        this.order.setState(this.order.cancelOrderState);
    }

    verifyPayment(): void {
        console.log('Order is cancelled and payment cannot be verified.');
    }

    shipOrder(): void {
        console.log('Order is cancelled and cannot ship.');
    }

}

class OrderBeingPreparedState implements State {
     
    public order: Order;

    constructor(order: Order) {
        this.order = order;
    }

    cancelOrder(): void {
        console.log('Cancelling your order...');
        this.order.setState(this.order.cancelOrderState);
    }
    verifyPayment(): void {
        console.log('Payment has already been verified');
    }
    shipOrder(): void {
        console.log('Shipping your order now!')
        this.order.setState(this.order.orderShippedState);
    }

}

class OrderShippedState implements State {
     
    public order: Order

    constructor(order: Order) {
        this.order = order;
    }

    cancelOrder(): void {
        console.log('Cannot cancel! Already shipped.');
    }
    verifyPayment(): void {
        console.log('Cannot verify payment! Already shipped.');
    }
    shipOrder(): void {
        console.log('Cannot ship again! Already shipped.');
    }

}

const order = new Order();

order.getState().shipOrder();
order.getState().verifyPayment();
order.getState().verifyPayment();
order.getState().shipOrder();
order.getState().cancelOrder();
order.getState().shipOrder();