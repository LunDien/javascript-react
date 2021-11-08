import html from "../module/core.js"
import { connect } from "../module/store.js"

function ItemList({ cars }) {
    const currentPage = cars[cars.length - 1].currentPage
    const carsChild = cars.filter(car => car.newCars)
    const {newCars} = carsChild[0] ? carsChild[0] : {}
    return html`
        <div class="row product-list">
            ${(newCars ? newCars : cars).map((car,index) => car.id !== "" 
             && index > (12 * ((currentPage ? currentPage : 0) - 1))
             && index <  (12 * (currentPage ? currentPage : 1) + 1) 
             && html`   
                <div class="col l-4 m-6 c-12">
                    <div class="product-item">
                        <a href="#">
                            <div class="product-item-img"
                                style="background-image: url(${car.info.img});">
                            </div>
                        </a>
                        <div class="product-item-info">
                            <a href="#">
                                <h3 class="product-item-name">${car.name + ' ' + car.info.engine}</h3>
                            </a>
                            ${car.info.isSale === true && `
                                <div class="product-item-price">
                                    <span class="product-item-price-old">${maskMoney(car.info.price) + '$'}</span>
                                    <span class="product-item-price-new">
                                    ${ maskMoney(car.info.price * (1 - car.info.discount / 100))
                                    + '$'}</span>
                                </div>`
                                || `
                                    <div class="product-item-price">
                                        <span class="product-item-price-new">${maskMoney(car.info.price) + '$'}</span>
                                    </div>
                                `
                            }
                            <div class="product-item-reaction">
                                <div class="product-item-reaction__like" onclick="tapHeart(event)">
                                <i class="far fa-heart product-item-reaction--no-like"></i>
                                <i class="fas fa-heart product-item-reaction--liked"></i>
                                </div>
                                <div class="product-item-reaction__vote" onclick="voteStar(event)">
                                    <i class="fas fa-star product-item-reaction-star"></i>
                                    <i class="fas fa-star product-item-reaction-star"></i>
                                    <i class="fas fa-star product-item-reaction-star"></i>
                                    <i class="fas fa-star product-item-reaction-star"></i>
                                    <i class="fas fa-star product-item-reaction-star"></i>
                                </div>
                                <span class="product-item-reaction-sold">${car.sold} Sold</span>
                            </div>
                            <div class="product-item-origin">
                                <span class="product-item-origin__brand">${car.brand}</span>
                                <span class="product-item-origin__country">${car.info.country}</span>
                            </div>
                            ${(car.sold >= 7) && `
                                <span class="product-item-best-seller">
                                    <i class="fas fa-check"></i>
                                    Best Saller
                                </span>
                            ` || ''}
                            ${car.info.discount !== 0 && `
                                <div class="product-item-discount">
                                    <span class="product-item-discount-text">Sale</span>
                                    <span class="product-item-percent">${car.info.discount}%</span>
                                </div>
                            `}
                        </div>
                    </div>
                </div>
            `)}
            
        </div>
    `
}

export default connect()(ItemList)