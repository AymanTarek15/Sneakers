const img1 = document.getElementById('img1')
const img2 = document.getElementById('img2')
const img3 = document.getElementById('img3')
const img4 = document.querySelector('#img4')
const mainImg = document.querySelector('#main-img')

mainImg.src = 'ecommerce-product-page-main/images/image-product-1.jpg'

img1.addEventListener('click', function (e) {
    mainImg.src = 'ecommerce-product-page-main/images/image-product-1.jpg'
    e.preventDefault();
})

img2.addEventListener('click', function (e) {
    mainImg.src = 'ecommerce-product-page-main/images/image-product-2.jpg'
    e.preventDefault();
})

img3.addEventListener('click', function (e) {
    mainImg.src = 'ecommerce-product-page-main/images/image-product-3.jpg'
    e.preventDefault();
})

img4.addEventListener('click', function (e) {
    mainImg.src = 'ecommerce-product-page-main/images/image-product-4.jpg'
    e.preventDefault();
})