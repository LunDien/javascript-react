import html from "../module/core.js"
import { connect } from "../module/store.js"
import Category from "./Category.js"
import FilterBar from "./FilterBar.js"
import ItemList from "./ItemList.js"
import Pagination from "./Pagination.js"

function Container() {
    return html`
        <div class="product-container">
            <div class="grid wide">
                <div class="row">

                    <div class="col l-3 m-0 c-0">
                        ${Category()}
                    </div>
                    <div class="col l-9 m-12 c-12">

                        ${FilterBar()}

                        ${ItemList()}
                        
                        ${Pagination()}
                    </div>
                </div>
            </div>
         </div>
    `
}

export default Container