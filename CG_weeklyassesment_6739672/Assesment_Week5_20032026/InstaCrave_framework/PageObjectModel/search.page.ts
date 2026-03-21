class search{
    searchBox:any;
    searchInp:any;
    allBtn:any;
    foodItemBtn:any;
    foodPartnerBtn:any;
    searchResult:any;


    constructor(page){
        this.searchBox = page.locator('//span[text()="Search..."]');
        this.searchInp = page.getByPlaceholder('Search...');
        this.allBtn = page.getByRole("button",{name:"All"});
        this.foodItemBtn = page.getByRole("button",{name:"Food Items"});
        this.foodPartnerBtn = page.getByRole("button",{name:"Food Partners"})
    }

    async selectFilter(f){
        if(f=='All'){
            await this.allBtn.click();
        }
        else if(f == 'Food Items'){
            await this.foodItemBtn.click();
        }
        else if(f== 'Food Partners'){
            await this.foodPartnerBtn.click();
        }
    }
    async clickResult(p,page){
        this.searchResult = await page.locator(`//div[text()="${p}"]`);
        await this.searchResult.click();
    }
}

export default search;