const myFunc =async () => {
    let myLink = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');

    let documents = await myLink.json();
   console.log(documents.data[0].phone_name);

}


myFunc();