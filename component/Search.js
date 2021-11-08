import html from "../module/core.js"
import { connect } from "../module/store.js"

function Search() {
    return html`
        <div class="header-search">
            <div class="header__logo">
                <a href="">
                    <img src="./assets/img/logo-shop.svg" alt="supercar-logo" class="header__logo-img">
                </a>
            </div>
            <div class="header__search">
                <div class="header__search-box--wrap">
                    <input type="checkbox" hidden id="header__search-history">
                    <input type="text" onkeyup="event.keyCode === 13 && dispatch('findCarInfo', event)" name="header__search-box" class="header__search-box" placeholder="Search in V8-SuperCars">
                    <ul class="header__search-history-list">
                        <h3 class="heading__search-history-list">Search History</h3>
                        <li class="header__search-history-item">
                            <a href="">Aventador</a>
                        </li>
                        <li class="header__search-history-item">
                            <a href="">McLaren</a>
                        </li>
                    </ul>
                </div>
                <label for="header__search-history" onclick="dispatch('findCarInfo')" class="fas fa-search header__search-icon"></label>
            </div>
            <div class="header__cart">
                <div class="header__cart-wrap">
                    <label for="header-cart-list" class="fas fa-shopping-cart header__cart-icon"></label>
                    <span class="header__cart-quantity">3</span>
                    <input type="checkbox" hidden id="header-cart-list">
                    <div class="header__cart-list">

                        <!-- no-cart -->

                        <div class="header__no-cart">
                            <img src="./assets/img/no-cart.png" alt="no-cart" class="header__no-cart-img">
                            <span class="header--no-cart-msg">No cars in the cart</span>
                        </div>

                        <!-- Cart list -->
                        <div class="header__cart--fill">
                            <h5 class="heading-cart-item-list">Shopping Cart</h5>
                            <div class="header__cart-item-list">
                                <div class="header__cart-item">
                                    <img src="./assets/img/items/2012_Lamborghini_AventadorLP7004.jpeg" alt=""
                                        class="cart-item-img">
                                    <div class="cart-item-info">
                                        <div class="cart-item-header">
                                            <span class="cart-item-name">Lamborghini Aventador LP700-4</span>
                                            <div class="cart-item-bill">
                                                <span class="cart-item-price">2.700.000$</span>
                                                <span class="cart-item-multiply">x</span>
                                                <span class="cart-item-quantity">3</span>
                                            </div>
                                        </div>
                                        <div class="cart-item-footer">
                                            <div class="cart-item-des">Brand: Lamborghini</div>
                                            <span class="cart-item-remove">Remove</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="header__cart-item">
                                    <img src="./assets/img/items/2002_Ferrari_Enzo.jpeg" alt=""
                                        class="cart-item-img">
                                    <div class="cart-item-info">
                                        <div class="cart-item-header">
                                            <span class="cart-item-name">Ferrari Enzo 2002</span>
                                            <div class="cart-item-bill">
                                                <span class="cart-item-price">6.000.000$</span>
                                                <span class="cart-item-multiply">x</span>
                                                <span class="cart-item-quantity">1</span>
                                            </div>
                                        </div>
                                        <div class="cart-item-footer">
                                            <div class="cart-item-des">Brand: Ferrari</div>
                                            <span class="cart-item-remove">Remove</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="header__cart-item">
                                    <img src="./assets/img/items/2005_Maybach_ExeleroConcept1.jpeg" alt=""
                                        class="cart-item-img">
                                    <div class="cart-item-info">
                                        <div class="cart-item-header">
                                            <span class="cart-item-name">Maybach Exelero 2005</span>
                                            <div class="cart-item-bill">
                                                <span class="cart-item-price">7.000.000$</span>
                                                <span class="cart-item-multiply">x</span>
                                                <span class="cart-item-quantity">1</span>
                                            </div>
                                        </div>
                                        <div class="cart-item-footer">
                                            <div class="cart-item-des">Brand: Mercedes-Benz</div>
                                            <span class="cart-item-remove">Remove</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <class class="header__cart-btn">
                                <a href="" class="btn btn-size-s primary-btn">View Cart</a>
                            </class>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}

export default Search