function products (products) {
    const db = [...products]

    function printProducts() {
        const productsDOM = document.querySelector('.products__container')
        let htmlProduct = ''

        for (let product of db) {
            htmlProduct += `
            <article class="products">
                <div class="products__image">
                    <img src=${product.image} alt="${product.name}">
                </div>
                <div class="products__content">
                <button type="button" class="products__btn add--to--cart" data-id="${product.id}">
                <i class='bx bx-cart-add'></i>
                </button>
                <span class="products__price">$ ${product.price}</span>
                <span class="products__stock">Disponibles: ${product.quantity}</span>
                <h3 class="products__title">"${product.name}"</h3>
                </div>
            </article>
            `
            }
        productsDOM.innerHTML = htmlProduct
    }
    printProducts()

    return {
        db,
        printProducts
    }
}
export default products