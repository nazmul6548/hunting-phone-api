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
    phoneCards.className = `card w-96 bg-base-100 shadow-xl`;
    phoneCards.innerHTML =`
    <figure><img src="${element.image}" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
    `

    phoneContainer.appendChild(phoneCards)
  });
};

myFunc();
