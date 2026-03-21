class reel{
    addCartBtn:any;
    cartCount:any;
    commentBtn:any;
    likeBtn:any;
    bookmarkBtn:any;

    constructor(page){
        this.addCartBtn = page.getByRole('button',{name:"Add"});
        this.cartCount = page.locator('//span[@class="cart-badge"]');
        this.commentBtn = page.locator('//button[@aria-label="Comments"]');
        this.likeBtn = page.locator('//button[@aria-label="Like"]');
        this.bookmarkBtn = page.locator('//button[@aria-label="Bookmark"]');

    }
    async addItem(n:number){
        if(n==1){
            await this.addCartBtn.first().click();
        }
        else{
            await this.addCartBtn.nth(n-1).click();
        }
    }
    async checkCart(expect){
        const count = await this.cartCount.textContent();
        await expect(Number(count)).toBeGreaterThan(0);
    }


    async addComment(n){
        if(n==1){
            await this.commentBtn.first().click();
        }
        else{
            await this.commentBtn.nth(n-1).click();
        }
    }

    async likeReel(n){
        if(n==1){
            await this.likeBtn.first().click();
        }
        else{
            await this.likeBtn.nth(n-1).click();
        }
    }
    async bookmarkReel(n){
        if(n==1){
            await this.bookmarkBtn.first().click();
        }
        else{
            await this.bookmarkBtn.nth(n-1).click();
        }
    }
}

export default reel;