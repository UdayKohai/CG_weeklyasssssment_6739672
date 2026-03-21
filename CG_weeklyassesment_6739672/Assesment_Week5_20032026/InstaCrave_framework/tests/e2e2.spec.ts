import {test,expect} from '@playwright/test'
import login from '../PageObjectModel/login.page';
import home  from '../PageObjectModel/home.page';
import search from '../PageObjectModel/search.page';
import foodPartner from '../PageObjectModel/foodPartner.page';
import profile from '../PageObjectModel/profile.page';
import following from '../PageObjectModel/profilefollowing.page';


import fs from 'fs'
import path from 'path';

let datafile = fs.readFileSync(path.join(__dirname,'../uitility/e2e2.json')); 
let data = JSON.parse(datafile); 

test("end to end 2", async({page,browserName})=>{
    let url = data.url;
    let fname = data.fname;
    let email = data.email;
    let password = data.password;
    let searchAccount = data.SearchAccount;
    let filter = data.filter;


    await page.goto(url);


    let loginp = new login(page);
    let homePage = new home(page);
    let searchPage = new search(page);
    let foodPartnerPage = new foodPartner(page);
    let profilePage = new profile(page);
    let followingPage = new following(page);

    await loginp.emailInp.fill(email);
    await loginp.passwordInp.fill(password);
    await loginp.signInBtn.click();

    await homePage.searchBtn.click();

    await searchPage.searchBox.click();
    await searchPage.searchInp.fill(searchAccount);
    await searchPage.selectFilter(filter);
    await searchPage.clickResult(searchAccount,page);

    await foodPartnerPage.checkPartnerName(searchAccount,expect);
    await foodPartnerPage.followBtn.click();
    await foodPartnerPage.checkFollowing(expect);

    await homePage.profileBtn.click();

    await profilePage.checkName(fname,expect);
    await profilePage.followingSec.click();

    await followingPage.checkFollowingName(searchAccount,expect);
    await followingPage.viewFollowingAccBtn.click();

    await foodPartnerPage.checkFollowing(expect);
    await foodPartnerPage.followingBtn.click();

    await foodPartnerPage.checkFollow(expect);

    await page.screenshot({path:`Screenshot/e2e2${browserName}.png`})

    await page.waitForTimeout(5000);
    


})