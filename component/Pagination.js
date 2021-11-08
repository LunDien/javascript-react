import html from "../module/core.js"
import { connect } from "../module/store.js"
import {pagination} from "../module/pagination.js"

function Pagination({ cars }) {
    const firstPage = cars[cars.length - 1].currentPage
    const carChild = cars.filter(car => car.newCars)
    const {newCars} = carChild[0] ? carChild[0] : {}
    const quantityCars = (newCars ? newCars : cars).filter(car => car.id !== "").length
    const lastPage = quantityCars % 12 === 0 ? quantityCars / 12 : Math.floor(quantityCars / 12) + 1
    return lastPage !== 0 && html`
        <div class="pagination">
            <ul class="pagination-list pagination-list-js" onclick="dispatch('renderPage', event)">
                <li class="pagination-item">
                    <a  class="pagination-link ${firstPage > 1 ? `` : `pagination-disabled`}">
                        <i class="fas fa-chevron-left"></i>
                    </a>
                </li>
                
                ${Array.from(pagination(firstPage ? firstPage : 1, lastPage)).map(page => html `
                    <li class="pagination-item ">
                        <a class="pagination-link ${(firstPage ? page === firstPage : page === 1) && `pagination-current-page`}">${page}</a>
                    </li>
                `)}

                <li class="pagination-item">
                    <a class="pagination-link ${((firstPage ? firstPage : 1) === lastPage) && `pagination-disabled`}">
                        <i class="fas fa-chevron-right"></i>
                    </a>
                </li>
            </ul>
        </div>
    ` || html ` <div class="pagination"> 
                    <ul class="pagination-list">
                        <li class="pagination-item">
                            <h3>No Cars Displayed</h3>
                        </li>
                    </ul>  
                </div>`
}

export default connect()(Pagination)