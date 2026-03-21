class payment{
    deliveryAddress:any;
    cardRadio:any;
    upiRadio:any;
    codRadio:any;
    placeOrderBtn:any;

    constructor(page){
        this.deliveryAddress = page.locator('//p[@class="address"]');
        this.cardRadio = page.locator('//input[@value="card"]');
        this.upiRadio = page.locator('//input[@value="upi"]'); 
        this.codRadio = page.locator('//input[@value="cash_on_delivery"]');
        this.placeOrderBtn = page.locator('//button[@class="pay-btn"]');
    }

    async checkAddress(a,expect){
        await expect(this.deliveryAddress).toContainText(a);
    };

    async selectPayment(m:string,expect){
        if (m === 'COD') {
            await this.codRadio.click();
            await expect(this.codRadio).toBeChecked();
        } 
        else if (m === 'Card') {
            await this.cardRadio.click();
            await expect(this.cardRadio).toBeChecked();
        } 
        else if (m === 'UPI') {
            await this.upiRadio.click();
            await expect(this.upiRadio).toBeChecked();
        } 
        else{
            console.log("Invalid Method");
        }
    };

}

export default payment;