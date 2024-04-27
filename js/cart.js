// import products from "js\Productdetail.js";
// const cart = () => {
    let iconcart = document.querySelector('.icons .iconcart');
    let closebtn = document.querySelector('.carttab .close');
    let body = document.querySelector('body');

    iconcart.addEventListener('click', () => {
        body.classList.toggle('activeTabcart');
    })
    closebtn.addEventListener('click', () => {
        body.classList.toggle('activeTabcart');
    })
// }
// export default cart;
