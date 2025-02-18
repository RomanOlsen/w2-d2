console.log("hi")

let total = 0

function addToCart(newOrderCost) {
  total = total + newOrderCost
  console.log(total)

  document.getElementById("totalScreen")
  totalScreen.innerText = total
}

let iceCream = [
  // Regular icecream (cheap)
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
