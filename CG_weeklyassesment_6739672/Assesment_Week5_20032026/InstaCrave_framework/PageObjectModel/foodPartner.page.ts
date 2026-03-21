class foodPartner{
    fPartnerName:any;
    followBtn:any;
    contactBtn:any;
    followingBtn:any;


    constructor(page){
        this.fPartnerName = page.locator('//span[contains(@style,"letter-spacing: -0.5px;")]');
        this.followBtn = page.getByRole('button',{name:'Follow',exact: true});
        this.contactBtn = page.getByRole('button',{name:'Contact'});
        this.followingBtn = page.getByRole('button',{name:'Following'});
    }

    async checkPartnerName(p,expect){
        await expect(this.fPartnerName).toContainText(p);
    }

    async checkFollow(expect){
        await expect(this.followBtn).toBeVisible();
    }


    async checkFollowing(expect){
        await expect(this.followingBtn).toBeVisible();
    }
}
export default foodPartner;