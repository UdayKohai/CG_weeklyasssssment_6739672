class home{
    exploreReels:any;
    homeBtn:any;
    searchBtn:any;
    reelBtn:any;
    cartBtn:any;
    orderBtn:any;
    profileBtn:any;

    constructor(page){
        this.exploreReels = page.locator('//a[contains(@class,"home")]');
        this.homeBtn = page.locator('//a[contains(@class,"bottom-nav__item ")]').first();
        this.searchBtn = page.locator('//a[contains(@class,"bottom-nav__item ")]').nth(1);
        this.reelBtn = page.locator('//a[contains(@class,"bottom-nav__item ")]').nth(2);
        this.cartBtn = page.locator('//a[contains(@class,"bottom-nav__item ")]').nth(3);
        this.orderBtn = page.locator('//a[contains(@class,"bottom-nav__item ")]').nth(4);
        this.profileBtn = page.locator('//a[contains(@class,"bottom-nav__item ")]').last();
    }
}

export default home;