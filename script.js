let searchForm = document.querySelector('.search-form');

document.querySelector('.search').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
} 

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('.cart').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
}

let navMenu = document.querySelector('.nav-menu');

document.querySelector('.hamburger').onclick = () => {
    navMenu.classList.toggle('active');














    
}
// let hamburger = document.querySelector('.hamburger');
// hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle('fa-xmark');
// })

shoppingCart.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-trash')) {
        e.target.parentElement.remove();
    }
})