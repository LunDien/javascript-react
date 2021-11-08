import html from "../module/core.js"



function FormAddInfoCar({cars}, key) {
    return key === "info" && Object.keys(cars[0][key]).map(keyInfo => {
        const lengthKey = cars[0][key][keyInfo].length
        return html `
            <div class="form-group">
                <label class="control-label" for="car-${keyInfo}">Car 
                    ${keyInfo.includes("-") && 
                    keyInfo.split('-').map(keyInfo2 => 
                        keyInfo2[0].toUpperCase() + keyInfo2.slice(1)).join(' ')  || 
                        keyInfo[0].toUpperCase() + keyInfo.slice(1)}
                </label>  
                <div class="form-item">
                ${lengthKey > 0 && html `
                        <select name="car-${key}" id="car-${key}" onchange="addOtherForm(event)">
                        ${cars[0][key][keyInfo].map(value => html `
                            <option class="car-${keyInfo}" value="${value}"}>${value}</option>
                        `)}
                        <option class="car-${keyInfo}-new" value="Other">Other...</option>
                        </select>
                        <input id="car-${keyInfo}-new" name="car-${keyInfo}" placeholder="Other..." class="form-control form-input" type="text">
                    ` || html `
                            <input id="car-${keyInfo}" name="car-${keyInfo}" placeholder=
                            "Car ${keyInfo.includes("-") && keyInfo.split('-').map(keyInfo2 => 
                                keyInfo2[0].toUpperCase() + keyInfo2.slice(1)).join(' ') || 
                                keyInfo[0].toUpperCase() + keyInfo.slice(1)}" class="form-control form-input" required 
                                ${(keyInfo == "img") && 'type="file"' || 'type="text"'}
                            >
                        `
                }
                </div>
            </div>
        `
    }).join('')
}



export default FormAddInfoCar