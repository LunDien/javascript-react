import html from "../module/core.js"
import { connect } from "../module/store.js"

function FilterBar({ cars }) {
    const firstPage = cars[cars.length - 1].currentPage
    const carChild = cars.filter(car => car.newCars)
    const {newCars} = carChild[0] ? carChild[0] : {}
    const quantityCars = (newCars ? newCars : cars).filter(car => car.id !== "").length
    const lastPage = quantityCars % 12 === 0 ? quantityCars / 12 : Math.floor(quantityCars / 12) + 1
        return html`
        <div class="filter-bar-tablet" onclick="dispatch('filterCar', event)">
            <button class="filter-bar-tablet__btn btn btn-size-s col l-0 m-3 c-3">Trending</button>
            <button class="filter-bar-tablet__btn btn btn-size-s col l-0 m-3 c-3">New Item</button>
            <button class="filter-bar-tablet__btn btn btn-size-s col l-0 m-3 c-3">Best Seller</button>
            <label for="filter-bar-tablet__select" class="filter-bar-tablet__btn btn btn-size-s col l-0 m-3 c-3">
                Price
                <i class="fas fa-sort filter-bar-tablet-icon"></i>
            </label>
            <input type="checkbox" hidden id="filter-bar-tablet__select">
            <div class="filter-bar-tablet__select-item-list" >
                <a class="filter-bar-tablet__select-item">
                    Low to High
                    <i class="filter-bar-tablet__select-icon fas fa-check"></i>
                </a>
                <a class="filter-bar-tablet__select-item">
                    High to Low
                    <i class="filter-bar-tablet__select-icon fas fa-check"></i>
                </a>
            </div>
        </div>

        <div class="filter-bar">
            <div class="filter-container" onclick="dispatch('filterCar', event)">
                <span class="filter-bar__text">Sort by: </span>
                <button class="filter-bar__btn btn">Trending</button>
                <button class="filter-bar__btn btn primary-btn">New Item</button>
                <button class="filter-bar__btn btn">Best Seller</button>
                <div class="filter-bar__select">
                    <div class="filter-bar__select-heading">
                        Price
                        <i class="filter-bar__select-icon fas fa-chevron-down"></i>
                    </div>
                    <div class="filter-bar__select-item-list">
                        <a class="filter-bar__select-item">
                            Low to High
                            <i class="filter-bar__select-icon fas fa-check"></i>
                        </a>
                        <a class="filter-bar__select-item">
                            High to Low
                            <i class="filter-bar__select-icon fas fa-check"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="filter-bar__page pagination-list-js">
                <span class="filter-bar__page-current">${firstPage ? firstPage : (lastPage === 0 ? 0 : 1 )}</span>/
                <span class="filter-bar__page-last">${lastPage}</span>
                <div class="filter-bar__page-control" onclick="dispatch('renderFilterBarPage', event)">
                    <a class="filter-bar__page-btn ${(firstPage ? firstPage === 1 : 1) && `filter-bar__page-disable`}">
                        <i class="fas fa-chevron-left"></i>
                    </a>
                    <a class="filter-bar__page-btn ${((firstPage ? firstPage : (lastPage === 0 ? 0 : 1)) === lastPage) && `filter-bar__page-disable`}">
                        <i class="fas fa-chevron-right"></i>
                    </a>
                </div>
            </div>
        </div>
    `
}

export default connect()(FilterBar)