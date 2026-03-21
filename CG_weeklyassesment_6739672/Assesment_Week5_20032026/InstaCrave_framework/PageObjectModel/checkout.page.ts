class checkout{
    addressInp:any;
    deliveryInsInp:any;
    paymentBtn:any;

    constructor(page){
        this.addressInp = page.getByLabel("Address *");
        this.deliveryInsInp = page.getByLabel("Delivery Instructions (Optional)");
        this.paymentBtn = page.getByRole("button",{name:"Proceed to Payment"});
    }
}
export default checkout;