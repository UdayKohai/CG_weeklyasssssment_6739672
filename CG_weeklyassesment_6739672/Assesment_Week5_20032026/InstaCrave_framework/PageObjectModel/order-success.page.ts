class orderSuccess{
    successTxt:any;

    constructor(page){
        this.successTxt = page.locator('//h1');
    }

    async checkSuccess(expect){
        await expect(this.successTxt).toContainText("Order Placed Successfully!");
    }
}

export default orderSuccess;
