let products = null;
      fetch('Productdetails.json')
      .then(response => response.json())
      .then(data => {
        products = data;
        showDetail();
      })

      function showDetail(){
        
        let detail = document.querySelector('.Pdetails');
        let productId = new URLSearchParams(window.location.search).get('id');
        let ThisProduct = products.filter(value => {
          return value.id == productId
        })[0];

        if(!ThisProduct){
          window.location.href = "/";
        }

        detail.querySelector('.image img').src = ThisProduct.image;
        detail.querySelector('.name').innertext =  ThisProduct.name;
        detail.querySelector('.price').innerText =  ThisProduct.price;
        detail.querySelector('.details').innerText =  ThisProduct.details;

        let productlist = document.querySelector('.productlist');
        (products.filter(value => value.id != productId))
        .forEach(product => {
            let newProduct = document.createElement('a');
            newProduct.href = '/productDetails.html?id=' + product.id;
            newProduct.classList.add('item');
            newProduct.innerHTML = 
            `<img src="${product.image}">
            <h3>${product.name}</h3>
            <div class="price">${product.price}</div>
            `;
            productlist.appendChild(newProduct);
        });
      }