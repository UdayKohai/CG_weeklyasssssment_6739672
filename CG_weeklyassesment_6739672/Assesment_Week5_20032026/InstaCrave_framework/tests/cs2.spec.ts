import {test,expect} from '@playwright/test'
import createAccount from '../PageObjectModel/createaccount.page';
import login from '../PageObjectModel/login.page.ts';
import home  from '../PageObjectModel/home.page.ts';
import profile from '../PageObjectModel/profile.page.ts';
import commentSec from '../PageObjectModel/commentSec.page.ts';



import fs from 'fs'
import path from 'path';

let datafile = fs.readFileSync(path.join(__dirname,'../uitility/cs2.json')); 
let data = JSON.parse(datafile); 

test("Common Senario 2 deleteing comment",async({page,browserName})=>{
    let url = data.url;
    let fname = data.fname;
    let email = data.email;
    let password = data.password;
    let commenttxt = data.comment;


    await page.goto(url);


    let loginp = new login(page);
    let homePage = new home(page);
    let profilePage = new profile(page)
    let commentSecPage = new commentSec(page);

    await loginp.emailInp.fill(email);
    await loginp.passwordInp.fill(password);
    await loginp.signInBtn.click();

    await homePage.profileBtn.click();

    await profilePage.commentSec.click();
    await commentSecPage.checkComment(commenttxt,page);
    await commentSecPage.deleteBtn.click();

    await page.waitForTimeout(5000);

    await page.screenshot({path:`Screenshot/cs2${browserName}.png`});


})