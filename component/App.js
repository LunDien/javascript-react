import html from "../module/core.js"
import { connect } from "../module/store.js"
import Header from "./Header.js"
import Container from "./Container.js"
import Footer from "./Footer.js"
import AddNewCar from "./AddNewCar.js"
import AddCarInfo from "./AddCarInfo.js"
import FormModal from "./FormModal.js"

function App() {
    return html `
        <div class="app">
        ${Header()}
        ${Container()}
        ${Footer()}
        ${FormModal()}
        </div>
    `
}

export default connect()(App)