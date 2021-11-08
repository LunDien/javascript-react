import html from "../module/core.js"
import { connect } from "../module/store.js"
import FormAddInfoCar from "./FormAddInfoCar.js"


function AddCarInfo({ cars }) {
    return html`
    <form class="form-horizontal form-car-info">    
        <h3 class="form-heading">ADD CAR INFORMATION</h3>
        ${Object.keys(cars[0]).map(key => FormAddInfoCar({cars}, key))}
        <div class="form-btn-list">
        <div class="form-btn">
            <button id="skipBtn" name="skipBtn" class="btn">Skip</button>
        </div>
        <div class="form-btn">
            <button id="addInfoBtn" name="addInfoBtn" onclick="dispatch('addCarInfo')" class="btn primary-btn">Add Info</button>
        </div>
        </div>
    </form>
    `              
}

export default connect()(AddCarInfo)