import {test,expect} from '@playwright/test'
import login from '../PageObjectModel/login.page';
import home  from '../PageObjectModel/home.page';
import reel from '../PageObjectModel/reel.page';
import comment from '../PageObjectModel/commentReel.page';
import cart from '../PageObjectModel/cart.page';
import checkout from '../PageObjectModel/checkout.page';
import payment from '../PageObjectModel/payment.page';
import orderSuccess from '../PageObjectModel/order-success.page';


import fs from 'fs'
import path from 'path';

let datafile = fs.readFileSync(path.join(__dirname,'../uitility/integration.json')); 
let data = JSON.parse(datafile); 

test("Integration Test1 ",async({page,browserName})=>{
    let url = data.url;
    let fname = data.fname;
    let email = data.email;
    let password = data.password;
    let commenttxt = data.commentTxt;
    let address = data.address;
    let delivery = data.deliveryInst;
    let paymentMethod = data.payment; 

    await page.goto(url);


    let loginp = new login(page);
    let homePage = new home(page);
    let reelPage = new reel(page);
    let commentReel = new comment(page);
    let cartPage = new cart(page);
    let checkoutPage = new checkout(page);
    let paymentPage = new payment(page);
    let orderSuccessPage = new orderSuccess(page);


    await loginp.emailInp.fill(email);
    await loginp.passwordInp.fill(password);
    await loginp.signInBtn.click();

    await homePage.exploreReels.click();

    await reelPage.likeReel(1);
    await reelPage.bookmarkReel(1);
     await reelPage.addComment(1);
    await commentReel.commentInp.fill(commenttxt);
    await commentReel.postBtn.click();
    await commentReel.closeBtn.click();

    await reelPage.addItem(1);
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


    await page.screenshot({path:`Screenshot/integration1${browserName}.png`});

    

})