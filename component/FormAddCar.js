import html from "../module/core.js"

function FromAddCar({cars}, key) {
    const lengthKey = Object.keys(cars[0][key]).length
    return (key !== "info" && key !== "id") && html`
        <div class="form-group">
        <label class="control-label" for="car-${key}">Car ${key==="id" && key.toUpperCase() || key[0].toUpperCase() + key.slice(1)}</label>  
        <div class="form-item">
        ${lengthKey > 0 && html `
                <select name="car-info" id="car-info" onchange="addOtherForm(event)">
                ${cars[0][key].map(value => html `
                    <option class="car-${key}" value="${value}">${value}</option>
                    
                `)}
                <option class="car-${key}-other"  value="Other">Other...</option>
                </select>
                <input id="car-${key}-new" name="car-${key}" placeholder="Other..." class="form-control form-input" type="text">
            ` || html `
            <input id="car-${key}" name="car-${key}" placeholder="Car ${key==="id" && key.toUpperCase() || key[0].toUpperCase() + key.slice(1)}" class="form-control form-input" required type="text">
        `}
        </div>
        </div>
    `
}

export default FromAddCar