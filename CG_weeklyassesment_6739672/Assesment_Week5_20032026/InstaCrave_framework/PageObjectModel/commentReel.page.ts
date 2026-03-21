class comment{
    commentInp:any;
    postBtn:any;
    closeBtn:any;
    commentName:any;
    commentText:any;

    constructor(page){
        this.commentInp = page.locator('//input[@class="comments-input"]');
        this.postBtn = page.getByRole('button',{name:'Post'});
        this.closeBtn = page.locator('//button[@aria-label="Close"]');
    }

    async findComment(expect,page,fname,c){
        this.commentName = page.locator(`//div[contains(text(),"${fname}")]`);
        await this.commentName.scrollIntoViewIfNeeded();
        this.commentText = page.locator(`//div[contains(text(),"${fname}")]/following-sibling::div`);
        await expect(this.commentText).toContainText(c);

    }
}
export default comment;