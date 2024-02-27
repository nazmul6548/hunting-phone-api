const myFunc = async () => {
  let myLink = await fetch(
    "https://openapi.programming-hero.com/api/phones?search=iphone"
  );

  let documents = await myLink.json();
  //    console.log(documents.data);
  const phones = documents.data;
  displyCard(phones);
};

const displyCard = (phones) => {

    const phoneContainer = document.getElementById('amarid');
  phones.forEach((element) => {
    console.log(element);
    const phoneCards =document.createElement("div");
    phoneCards.className = `card p-4 bg-base-100 shadow-xl`;
    phoneCards.innerHTML =`
    <figure><img src="${element.image}" alt="Shoes" /></figure>
    <div class="card-body">
    <h1 class=text-4xl>${element.brand}</h1>
      <h2 class="card-title">${element.phone_name}</h2>
      <p>${element.slug}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
    `

    phoneContainer.appendChild(phoneCards)
  });
};

myFunc();
