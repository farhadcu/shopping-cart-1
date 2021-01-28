// grabbing the element
// for phone
const phonePlusBtn = document.getElementById('phonePlus');
const phoneMinusBtn = document.getElementById('phoneMinus');
const phoneQuantity = document.getElementById('phoneQuantity');
const phonePrice = document.getElementById('phonePrice');
// for case
const casePlusBtn = document.getElementById('casePlus');
const caseMinusBtn = document.getElementById('caseMinus');
const caseQuantity = document.getElementById('caseQuantity');
const casePrice = document.getElementById('casePrice');
// for total price
const total = document.getElementById('total');
const subTotal = document.getElementById('subTotal');

// phone plus button
phonePlusBtn.addEventListener('click', function() {
    plusBtn('phoneQuantity', 'phonePrice', 1219);
    subTotalPrice();
});

// phone minus button
phoneMinusBtn.addEventListener('click', function() {
    if (phoneQuantity.value == 0) {
        phoneQuantity.classList.add('disabled');
    } else {
        minusBtn('phoneQuantity', 'phonePrice', 1219);
        subTotalPrice();
    }
});

// case plus button
casePlusBtn.addEventListener('click', function() {
    plusBtn('caseQuantity', 'casePrice', 59);
    subTotalPrice();
});

// case minus button
caseMinusBtn.addEventListener('click', function() {
    if (caseQuantity.value == 0) {
        caseQuantity.classList.add('disabled');
    } else {
        minusBtn('caseQuantity', 'casePrice', 59);
        subTotalPrice();
    }

});

// function for plus button
function plusBtn(quantityId, priceId, price) {
    const quantity = document.getElementById(quantityId);
    const itemPrice = document.getElementById(priceId);
    quantity.value++;
    itemPrice.innerText = quantity.value * price;
}
// function for minus button
function minusBtn(quantityId, priceId, price) {
    const quantity = document.getElementById(quantityId);
    const itemPrice = document.getElementById(priceId);
    quantity.value--;
    itemPrice.innerText = quantity.value * price;
}

// function for total price
function subTotalPrice() {
    total.innerText = parseInt(phonePrice.innerText) + parseInt(casePrice.innerText);
    subTotal.innerText = parseInt(total.innerText);
}