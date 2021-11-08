import html from "../module/core.js"
import { connect } from "../module/store.js"
import FormAddCar from "./FormAddCar.js"
import AddCarInfo from "./AddCarInfo.js"


function AddNewCar({ cars }) {
    return html`
        <div class="form-horizontal form-add-car">          
            <h3 class="form-heading">ADD NEW CAR</h3>
            ${Object.keys(cars[0]).map(key => FormAddCar({cars}, key))}
            <div class="form-btn-list">
            <div class="form-btn">
                <button id="addCarBtn" onclick="dispatch('addCar'); addCar()" class="btn primary-btn">Add Car</button>
            </div>
            </div>
        </div>
    `              
}

export default connect()(AddNewCar)