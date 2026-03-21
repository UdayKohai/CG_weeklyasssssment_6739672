class following{
    followingAccounts:any;
    viewFollowingAccBtn:any;

    constructor(page){
        this.followingAccounts = page.locator('//div[contains(@style,"margin-bottom: 4px;")]');
        this.viewFollowingAccBtn = page.getByRole('button',{name:'View'});
    }

    async checkFollowingName(f,expect){
        await expect(this.followingAccounts).toContainText(f);
    }
}

export default following;