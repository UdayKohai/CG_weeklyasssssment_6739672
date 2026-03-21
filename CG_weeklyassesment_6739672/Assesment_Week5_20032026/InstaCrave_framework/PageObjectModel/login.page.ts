class login{
    emailInp:any;
    passwordInp:any;
    signInBtn:any;
    createAccLnk:any;


    constructor(page){
        this.emailInp = page.getByPlaceholder('you@example.com');
        this.passwordInp = page.locator('//input[@id="password"]');
        this.signInBtn = page.getByRole('button',{name:'Sign In'});
        this.createAccLnk = page.locator('//a[contains(text(),"Create")]');
    }
}

export default login;