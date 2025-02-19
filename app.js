console.log("hi")

let total = 0

//  function addToCart(newOrderCost) {
//   total = total + newOrderCost
//   console.log(total)

//   document.getElementById("totalScreen")
//   totalScreen.innerText = total
// }





let iceCreams = [
  // Regular icecream (cheap) | ARRAY STARTS AT 0
  {
    flavor: 'Chocolate',
    isRegular: true,
    quantity: 0,
    price: 4
  },
  {
    flavor: 'Vanilla',
    isRegular: true,
    quantity: 0,
    price: 4
  },
  {
    flavor: 'Mint Chocolate',
    isRegular: true,
    quantity: 0,
    price: 4
  },
  //DAIRY FREE below
  {
    flavor: 'Chocolate',
    isRegular: false,
    quantity: 0,
    price: 8
  },
  {
    flavor: 'Vanilla',
    isRegular: false,
    quantity: 0,
    price: 8
  },
  {
    flavor: 'Mint Chocolate',
    isRegular: false,
    quantity: 0,
    price: 8
  },
]

// hi 
// sadiasd 

// new test

function addToCart(arrayNumber) {

  const iceCream = iceCreams[arrayNumber]
  iceCream.quantity++

  // updateText()

}

function updateText() {

  let html = ``
  document.getElementById('flavorText')
  flavorText.innerText = flavor
  document.getElementById('dairyFreeText')
  dairyFreeText.innerText = isRegular
  document.getElementById('priceText')
  priceText.innerText = price
  document.getElementById('qtyText')
  qtyText.innerText = qty
  console.log('log')

}