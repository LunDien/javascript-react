import html from "../module/core.js"
import { connect } from "../module/store.js"
import Navbar from "./Navbar.js"
import Search from "./Search.js"


function Header() {
    return html `
        <header class="home-header">
            <div class="grid wide">
                
                ${Navbar()}
                ${Search()}
                
            </div>
        </header>   
    `
}

export default Header