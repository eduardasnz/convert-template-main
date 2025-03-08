// Cotação de moedas
const USD = 5.79;
const EUR = 6.27;
const GBP = 7.48;

// Getting elements
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result")



// Manipulating input value to push only numbers
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

// Getting form event
form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
};

// Function to convert currenty
function convertCurrency(amount, price, symbol) {
  try {
    // show cotation of currency
    description.textContent = `${symbol}1 = ${formatCurrencyBRL(price)}`;

    let total = amount * price
    total = formatCurrencyBRL(total).replace("R$", "")
    result.textContent = `${total} Reais`

    // show class result
    footer.classList.add("show-result");
  } catch (error) {
    footer.classList.remove("show-result");

    console.log(error);
    alert("não foi possível converter...");
  }
}


// format currency to real brazilian
function formatCurrencyBRL(value){
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}

function formatTotalUSA(value){
  return Number(value).toLocaleString("en", {
    style: "currency",
    currency: "USD"
  })
}