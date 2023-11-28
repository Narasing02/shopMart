
function navSlide(){
    const nav =document.querySelector('.navbar');
    const Hamburger =document.querySelector('.Hamburger');
    const navLinks =document.querySelector('.nav-links');
    Hamburger.addEventListener('click',()=>{

        navLinks.classList.toggle('nav-active');
        Hamburger.classList.toggle('toggle');
       })
}
navSlide()



// ---------------------------- user details-----------------------------
let fullName=document.querySelector('#fullName')
let email=document.querySelector('#email')
let phone=document.querySelector('#phone')
let location1=document.querySelector('#location')
let date=document.querySelector('#date')
let submitBtn = document.createElement('button');
submitBtn.textContent="Submit";
// submitBtn.classList.add("")
submitContainer.appendChild(submitBtn);


// ----------------------------Get user details-----------------------------
let bill = document.querySelector('.Bill')
let getFullName =document.getElementById('getFullName');
let getEmail =document.getElementById('getEmail');
let getPhone =document.getElementById('getPhone');
let getLocation =document.getElementById('getLocation');
let getDate =document.getElementById('getDate');

// -----------------------------items---------------------------------------
// ---------------fruits &veg--------------------
let freshVeg =document.querySelector('#freshvegetables')
let freshFruits =document.querySelector('#freshfruits')
let premiumFruits =document.querySelector('#premium')
let Herbs  =document.querySelector('#herbs')

//----------Dairy & Bakery-----------

let cakes =document.querySelector('#cakes')
let Milk =document.querySelector('#Milk')
let Batter =document.querySelector('#Batter')
let dryFruits=document.querySelector('#dryFruits')

//------------------snacks & Beverages--------------

let fruitjuices =document.querySelector('#fruitjuices')
let pasta =document.querySelector('#pasta')
let chocolates =document.querySelector('#chocolates')
let manchuria =document.querySelector('#manchuria')

// ----------------------Payment---------------------------------------
let TotalPayment = document.querySelector('#TotalPayment')
let customerName= document.querySelector('#customerName')
let customerPhone = document.querySelector('#customerPhone')
let totalFruits = document.querySelector('#totalFruits')
let totalBakery = document.querySelector('#totalBakery')
let totalSnacks = document.querySelector('#totalSnacks')
let GST = document.querySelector('#GST')
let totalAmount = document.querySelector('#total-amount')
// -----------------------------Get items---------------------------------------
// ---------------get fruits &veg--------------------
let items = document.getElementById("items")
let getFruits =document.getElementById('getFruits')
let getPremium =document.getElementById('getPremium')
let getHerbs =document.getElementById('getHerbs')
let getVeg =document.getElementById('getVeg')

//---------- Get Dairy & Bakery-----------

let getBakery = document.getElementById("getBakery")
let getCakes =document.getElementById('getCakes')
let getBatter =document.getElementById('getBatter')
let getMilk =document.getElementById('getMilk')
let getDryFruits =document.getElementById('getDryFruits')

//-------------get snacks & Beverages 
let getSnacks=document.getElementById('getSnacks');
let getJuices = document.getElementById('getJuice');
let getPasta = document.getElementById('getPasta');
let getChocolates =document.getElementById('getChocolates');
let getManchuria =document.getElementById('getManchuria');


//payment-page-section

let paymentBtn = document.querySelector('.payment-container');
submitBtn.classList.add('button1');
submitBtn.addEventListener('click',()=>{

    paymentBtn.classList.add('payment-container1');
    bill.textContent="Bill Details";
    getFullName.textContent=fullName.value;
    getEmail.textContent=email.value;
    getPhone.textContent=phone.value;
    getLocation.textContent=location1.value;
    getDate.textContent=date.value;

    // ----------------------items-----------------------------

    items.textContent="Fruits & vegetables "
    getVeg.textContent=freshVeg.value;
    getFruits.textContent=freshFruits.value;
    getPremium.textContent=premiumFruits.value;
    getHerbs.textContent=Herbs.value;

    getBakery.textContent="Bakery"
    getCakes.textContent=cakes.value;
    getMilk.textContent=Milk.value;
    getBatter.textContent=Batter.value;
    getDryFruits.textContent=dryFruits.value

    getSnacks.textContent="Snacks ";
    getJuices.textContent=fruitjuices.value;
    getPasta.textContent =pasta.value;
    getChocolates.textContent=chocolates.value;
    getManchuria.textContent=manchuria.value;

    // ---------------------Payments---------------------------
    TotalPayment.textContent="PAYMENT";
    customerName.textContent=fullName.value;
    customerPhone.textContent=phone.value;
   let amountOfFruits =parseInt(freshVeg.value)+parseInt(freshFruits.value)+parseInt(premiumFruits.value)+parseInt(Herbs.value)
   let amountOfBakery=parseInt(cakes.value)+parseInt(Milk.value)+parseInt(Batter.value)+parseInt(dryFruits.value)
   let amountOfSnacks =parseInt(fruitjuices.value)+parseInt(pasta.value)+parseInt(chocolates.value)+parseInt(manchuria.value)
   let gstCal =(amountOfBakery+amountOfFruits+amountOfSnacks)*18/100
   totalFruits.textContent="Amount Of Fruits : " + amountOfFruits;
   totalBakery.textContent="Amount Of Dairy & Bakery :" +amountOfBakery;
   totalSnacks.textContent="Amount Of Snacks & Beverages :" +amountOfSnacks;

   GST.textContent = "GST : 18% : " +(gstCal);
   totalAmount.textContent="Total Amount : " + (amountOfBakery+amountOfFruits+amountOfSnacks+gstCal)




  


})