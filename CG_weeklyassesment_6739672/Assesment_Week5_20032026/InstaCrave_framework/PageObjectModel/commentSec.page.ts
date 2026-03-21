class commentSec{
    commentTxt:any;
    deleteBtn:any;
    constructor(page){
        // this.deleteBtn = page.getByRole('button',{name:'Delete'});
    }

    async checkComment(c,page){
        this.commentTxt = page.locator(`//div[text()="${c}"]`).first();
        this.deleteBtn = page.locator(`//div[text()="${c}"]/ancestor::div[@style="flex: 1 1 0%;"]/following-sibling::button`).first();
    }
}
export default commentSec;