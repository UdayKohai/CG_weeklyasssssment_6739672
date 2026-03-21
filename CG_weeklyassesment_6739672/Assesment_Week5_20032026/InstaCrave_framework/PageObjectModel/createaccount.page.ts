class createAccount{
    fnameInp:any;
    lnameInp:any;
    emailInp:any;
    password:any;
    signUpBtn:any;

    constructor(page){
        this.fnameInp = page.locator('//input[@id="firstName"]');
        this.lnameInp = page.locator('//input[@id="lastName"]');
        this.emailInp = page.locator('//input[@id="email"]');
        this.password = page.locator('//input[@id="password"]');
        this.signUpBtn = page.getByRole('button',{name:'Sign Up'});
    }

}

export default createAccount;