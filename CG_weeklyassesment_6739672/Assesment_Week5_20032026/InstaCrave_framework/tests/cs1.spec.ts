import {test,expect} from '@playwright/test'
import createAccount from '../PageObjectModel/createaccount.page';
import login from '../PageObjectModel/login.page';
import home  from '../PageObjectModel/home.page';
import reel from '../PageObjectModel/reel.page';
import comment from '../PageObjectModel/commentReel.page';



import fs from 'fs'
import path from 'path';

let datafile = fs.readFileSync(path.join(__dirname,'../uitility/cs1.json')); 
let data = JSON.parse(datafile); 


test("Common Senario 1 Comments ", async({page,browserName})=>{
    let url = data.url;
    let fname = data.fname;
    let email = data.email;
    let password = data.password;
    let commenttxt = data.comment;


    await page.goto(url);


    let loginp = new login(page);
    let homePage = new home(page);
    let reelPage = new reel(page);
    let commentReel = new comment(page);

    await loginp.emailInp.fill(email);
    await loginp.passwordInp.fill(password);
    await loginp.signInBtn.click();

    await homePage.reelBtn.click();

    await reelPage.addComment(1);
    await commentReel.commentInp.fill(commenttxt);
    await commentReel.postBtn.click();
    await commentReel.findComment(expect,page,fname,commenttxt);
    await page.screenshot({path:`Screenshot/cs1${browserName}.png`});
    
    await commentReel.closeBtn.click();

})