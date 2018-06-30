var productElement = document.getElementById('product');

productElement.addEventListener('keyup', function(e) {
  console.log(e);
})

var items = [
  {
    id: 1,
    name: "rufles",
    price: 45.00
  },
  {
    id: 2,
    name: "agua embotellada",
    price: 10.00
  },
  {
    id: 3,
    name: "cafe",
    price: 15.00
  },
  {
    id: 4,
    name: "pepsi",
    price: 20.00
  },
  {
    id: 5,
    name: "kitkat",
    price: 60.00
  }
];
