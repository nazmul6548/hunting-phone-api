const myFunc = async (searchText=13,isshowall) => {
  let myLink = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );

  let documents = await myLink.json();
  //    console.log(documents.data);
  const phones = documents.data;
  displyCard(phones,isshowall);
};

const displyCard = (phones,isshowall) => {

    const phoneContainer = document.getElementById('amarid');
    phoneContainer.textContent="";
    // 
     const viewAllBtn = document.getElementById("viewall")
    if (phones.length > 12 && !isshowall) {
        viewAllBtn.classList.remove("hidden");
    }else{
        viewAllBtn.classList.add("hidden");
    }
    
    if (!isshowall) {
        phones=phones.slice(0,12);
    }
  phones.forEach((element) => {
    console.log(element);
    const phoneCards =document.createElement("div");
  
    phoneCards.className = `card p-4 bg-base-100 shadow-xl`;
    phoneCards.innerHTML =`
    <figure><img src="${element.image}" alt="Shoes" /></figure>
    <div class="card-body flex justify-center items-center">
    <h1 class=text-4xl text-center"> Brand : ${element.brand}</h1>
      <h2 class="card-title">${element.phone_name}</h2>
      <p class="text-center">${element.slug}</p>
      <div class="card-actions justify-center">
        <button onclick="handleshowdetails('${element.slug}'); my_modal_5.showModal()"  class="btn btn-primary">Show Details</button>
      </div>
    </div>
    `

    phoneContainer.appendChild(phoneCards)
  });
  loadingSpineName(false);
};


const handleshowdetails = async (id) => {
const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
const data = await res.json();
console.log(data);
showPhoneDetails(data)
}

const showPhoneDetails = (phone) => {
  my_modal_5.showModal()
};











// handle button click
const buttonhandeler = (isshowall) => {
    // console.log("search");
    loadingSpineName(true);
    const search = document.getElementById('myinput');
    const searchText = search.value;
    search.value="";
    
    // console.log(searchText);
    myFunc(searchText,isshowall);
};

const loadingSpineName = (loading) => {
  const loaderid = document.getElementById('lodingspine');
  if (loading) {
    loaderid.classList.remove("hidden");
  }else{
    loaderid.classList.add("hidden");
  }
  
}
const showallelement = () => {
  buttonhandeler(true)
};
myFunc();
