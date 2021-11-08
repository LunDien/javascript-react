import html from "../module/core.js"
import { connect } from "../module/store.js"

function Category({ cars }) {
    return html`
        <div class="category-navbar">
            <h4 class="category-navbar-header">
                <i class="fas fa-angle-double-right"></i>
                Brand Car
                <i class="fas fa-angle-double-left"></i>
            </h4>
            <ul class="category-navbar-list">

                
                ${cars[0].brand.map((brand, index) => index < 8 && html`
                    <li class="category-navbar-item" onclick="dispatch('findCarInfo', event)">
                        <a href="#" class="category-navbar-link">${brand}</a>
                    </li>
                `)}
                
            </ul>
        </div>
    `
}

export default connect()(Category)