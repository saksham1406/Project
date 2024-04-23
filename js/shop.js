let products = null;
fetch('Productdetails.json')
.then(response => response.json())
.then(data => {
  products = data;
  console.log(products);
  addDataToHTML();
})

let Productlist = document.querySelector('.productlist');
function addDataToHTML(){
  products.forEach(product => {
    let newProduct = document.createElement('a');
    newProduct.href = '/shop.html?id=' + product.id;
    newProduct.classList.add('item');
    newProduct.innerHTML = `
      <img src="${product.image}">
      <h3>${product.name}</h3>
      <div class="price">${product.price}</div>
     
    `;
    Productlist.appendChild(newProduct);
  })
}