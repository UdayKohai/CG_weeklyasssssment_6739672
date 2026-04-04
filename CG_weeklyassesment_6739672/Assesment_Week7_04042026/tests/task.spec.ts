import {test} from '@playwright/test'

test('Assesment weekly',async({request})=>{
    let base_url = 'https://restful-booker.herokuapp.com';

    // Create Token
    let r1 = await request.post(`${base_url}/auth`,{
        data:{
            username:"admin",
            password:"password123"
        },
        ignoreHTTPSErrors:true
    })

    let resp1 = await r1.json();
    let token = resp1.token;
    console.log(resp1);
    console.log(token);
    
    // Get Booking Id
    let r2 = await request.get(`${base_url}/booking`,{
        headers:{
            Authentication:`Bearer ${token}`
        },
        ignoreHTTPSErrors:true
    })
    let resp2 = await r2.json();
    let bookingid = await resp2[7].bookingid;
    console.log(resp2);
    
    console.log(bookingid);

    
    // Get Booking
    let r3 = await request.get(`${base_url}/booking/${bookingid}`,{
        ignoreHTTPSErrors:true,
        headers:{
            Authentication:`Bearer ${token}`
        }
    })

    let resp3 = await r3.json();
    console.log(resp3);
    
    // Create Booking
    let r4 = await request.post(`${base_url}/booking`,{
        ignoreHTTPSErrors:true,
        data:{
    firstname : "Jim",
    lastname: "Brown",
    totalprice : 111,
    depositpaid : true,
    bookingdates : {
        checkin : "2018-01-01",
        checkout : "2019-01-01"
    },
    additionalneeds : "Breakfast"
},
headers:{
    Authentication : `Bearer ${token}`
}
    })

    let resp4 = await r4.json();
    let bid = resp4.bookingid;
    console.log(bid);
    console.log(resp4);

    // Update Booking
    let r5 = await request.put(`${base_url}/booking/${bid}`,{
        ignoreHTTPSErrors:true,
        data:{
    firstname : "Jim",
    lastname: "Test",
    totalprice : 111,
    depositpaid : true,
    bookingdates : {
        checkin : "2018-01-01",
        checkout : "2019-01-01"
    },
    additionalneeds : "Breakfast"
},
headers:{
    Cookie : `token=${token}`
}
    })
    let resp5 = await r5.text();
    console.log(resp5);


    // Partial Update Booking

    let r6 = await request.patch(`${base_url}/booking/${bid}`,{
        ignoreHTTPSErrors:true,
        data:{
    firstname : "Jim Test",
    lastname: "Test",
},
headers:{
    Cookie : `token=${token}`
}
    })
    let resp6 = await r6.text();
    console.log(resp6);

    // Delete booking
    let r7 = await request.delete(`${base_url}/booking/${bid}`,{
        ignoreHTTPSErrors:true,
        headers:{
            Cookie:`token=${token}`
        }
    })
    let resp7 = await r7.text();
    console.log(resp7);

    
})