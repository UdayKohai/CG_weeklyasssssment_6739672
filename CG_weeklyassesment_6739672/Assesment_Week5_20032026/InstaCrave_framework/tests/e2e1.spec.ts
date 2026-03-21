import {test,expect} from '@playwright/test'
import createAccount from '../PageObjectModel/createaccount.page';
import login from '../PageObjectModel/login.page';
import home  from '../PageObjectModel/home.page';
import reel from '../PageObjectModel/reel.page';
import cart from '../PageObjectModel/cart.page';
import checkout from '../PageObjectModel/checkout.page';
import payment from '../PageObjectModel/payment.page';
import orderSuccess from '../PageObjectModel/order-success.page';




import fs from 'fs'
import path from 'path';

let datafile = fs.readFileSync(path.join(__dirname,'../uitility/e2e1.json')); 
let data = JSON.parse(datafile); 

test('end to end 1st', async({page,browserName})=>{
    let url = data.url;
    let fname = data.fname;
    let lname = data.lname;
    let email = data.email;
    let password = data.password;
    let address = data.address;
    let delivery = data.deliveryInst;
    let paymentMethod = data.payment; 

    await page.goto(url);
    let loginp = new login(page);
    let createAccPage = new createAccount(page);
    let homePage = new home(page);
    let reelPage = new reel(page);
    let cartPage = new cart(page);
    let checkoutPage = new checkout(page);
    let paymentPage = new payment(page);
    let orderSuccessPage = new orderSuccess(page);

    await loginp.createAccLnk.click();
    await createAccPage.fnameInp.fill(fname);
    await createAccPage.lnameInp.fill(lname);
    await createAccPage.emailInp.fill(email);
    await createAccPage.password.fill(password);
    await createAccPage.signUpBtn.click();

    await homePage.exploreReels.click();
    await reelPage.addItem(1);
    await reelPage.addItem(2);
    await reelPage.checkCart(expect);

    await homePage.cartBtn.click();

    await cartPage.ckeckoutBtn.click();
    await checkoutPage.addressInp.fill(address);
    await checkoutPage.deliveryInsInp.fill(delivery);
    await checkoutPage.paymentBtn.click();
    await paymentPage.checkAddress(address,expect);
    await paymentPage.selectPayment(paymentMethod,expect);
    await paymentPage.placeOrderBtn.click();

    await orderSuccessPage.checkSuccess(expect);


    await page.screenshot({path:`Screenshot/e2e1${browserName}.png`});
})