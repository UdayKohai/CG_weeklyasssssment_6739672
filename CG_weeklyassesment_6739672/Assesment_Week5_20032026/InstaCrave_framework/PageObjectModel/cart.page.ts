class cart{
    ckeckoutBtn:any;
    constructor(page){
        this.ckeckoutBtn = page.getByRole("button",{name:"Proceed to Checkout"});
    }
}

export default cart;