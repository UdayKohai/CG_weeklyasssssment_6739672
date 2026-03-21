class profile{
    name:any;
    aboutSec:any;
    savedSec:any;
    commentSec:any;
    followingSec:any;
    likedSec:any;

    constructor(page){
        this.name = page.locator('//div[contains(@style,"font-size: 1.08rem;")]');
        this.aboutSec = page.locator('//span[text()="About"]');
        this.savedSec = page.locator('//span[text()="Saved"]');
        this.commentSec = page.locator('//span[text()="Comments"]');
        this.followingSec = page.locator('//span[text()="Following"]');
        this.likedSec = page.locator('//span[text()="Liked"]');
        
    }

    async checkName(n,expect){
        await expect(this.name).toContainText(n);
    }
}

export default profile;