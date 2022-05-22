
// const userDriving = true;

// const userTired = false;

// const userPassport = false;

// if (userDriving || userTired && userPassport) {

//   console.log("Assalomu alaykum");

// } else {
//   console.log("Hech qisi yo'q")
// }

// Class activity

// const userIELTS = Number(prompt("IELTS balingizni kiriting:"));

// const userMath = Number(prompt("Matimatika balingizni kiriting:"));

// const userTank = Number(prompt("Tankangiz bormi? Agar bo'lsa 1 raqamini qoldiring!", 0));


// if ((userIELTS >= 7.5) && (userMath >= 80)) {
//   console.log("O'qishga Grant asosida qabul qilindingiz! Tabriklaymiz!");
// } else if ((userIELTS >= 5.5) && (userMath >= 40 && userMath < 80) || userTank) {
//   if ((userIELTS >= 5.5) && (userMath >= 40 && userMath < 80)) {
//     console.log("O'qishga kirdingiz, ammo kontraktga! Tabriklaymiz!");
//   } else{
//     console.log("Tanka asosida o'qishga qabul qilindingiz! Tabriklaymiz!");
//   }
// } else {
//   console.log("O'qishga kirolmadingiz! Afsus!");
// };


// Hometask


const elHeaderButton = document.querySelector(".enter__btn");

const elEnterBox = document.querySelector(".enter");

const elCurrencyBox = document.querySelector(".currency");

const elCurrencyInput = document.querySelector("#currency__input");

const elCurrencyChange = document.querySelector(".currency__select");

const elResult = document.querySelector(".currency__result");

const elCurrencyBtn = document.querySelector(".currencyBtn");

// const userCurrency = elCurrencyChange.value;

// const userMoney = elCurrencyInput.value;

// console.log(userMoney);


// Assalom alaykum ustoz boshqacha qilmoqchi edim lekin o'xshamadi



elHeaderButton.addEventListener ("click", () => {

  elEnterBox.classList.toggle("d-none");

  elCurrencyBox.classList.remove("d-none");


});

elCurrencyBtn.addEventListener ( 'click', function (evt){
  evt.preventDefault();

  const userCurrency = elCurrencyChange.value;

  const userMoney = elCurrencyInput.value;

  const resultCurrency = Number(userMoney);


  if ( userCurrency == "uzsTousd" ) {
    let exchangeCurrency = Math.round(resultCurrency / 11092.5);

    elResult.textContent = `${exchangeCurrency}  $`;

  } else if ( userCurrency ==  "uzsToeur") {
    let exchangeCurrency = Math.round(resultCurrency / 11735.6);

    elResult.textContent = `${exchangeCurrency} EUR`;

  } else if ( userCurrency ==  "uzsTocny") {
    let exchangeCurrency = Math.round(resultCurrency / 1660.11 );

    elResult.textContent = `${exchangeCurrency} Yuan`;

  } else if ( userCurrency ==  "uzsTorub") {
    let exchangeCurrency = Math.round(resultCurrency / 84.11 );

    elResult.textContent = `${exchangeCurrency} Rubl`;

  } else if ( userCurrency ==  "uzsTokwd") {
    let exchangeCurrency = Math.round(resultCurrency / 36277.62 );

    elResult.textContent = `${exchangeCurrency} Dinor (Quvayt)`;

  } else if ( userCurrency ==  "uzsToaed") {
    let exchangeCurrency = Math.round(resultCurrency / 3025 );

    elResult.textContent = `${exchangeCurrency} Dinor (BAA)`;

  } else if ( userCurrency ==  "uzsTogbp") {
    let exchangeCurrency = Math.round(resultCurrency / 13876.67 );

    elResult.textContent = `${exchangeCurrency} Funt`;

  } else if ( userCurrency ==  "usdTouzs") {
    let exchangeCurrency = Math.round(resultCurrency * 11092.5);

    elResult.textContent = `${exchangeCurrency} so'm`;

  } else if ( userCurrency ==  "usdToeur") {
    let exchangeCurrency = Math.round(resultCurrency * 1.0562);

    elResult.textContent = `${exchangeCurrency} EUR`;

  } else if ( userCurrency ==  "eurTouzs") {
    let exchangeCurrency = Math.round(resultCurrency * 11735.6);

    elResult.textContent = `${exchangeCurrency} so'm`;

  } else if ( userCurrency ==  "eurTousd") {
    let exchangeCurrency = Math.round(resultCurrency * 0.9468);

    elResult.textContent = `${exchangeCurrency} $`;

  }


})

// elCurrencyBtn.addEventListener ( 'click', function (evt) {
//   evt.preventDefault();

//   if ( userCurrency == "uzsTousd" ) {
//     elResult.textContent = "Assalom so'm";
//   };
// })

// console.log(userMoney);