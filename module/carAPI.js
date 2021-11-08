export const carsApi = 'http://localhost:3000/cars'
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

async function getCarItems(url) {
    let response = await fetch(url)
    let data = await response.json()
    return data
}

async function postCarItems(url, data) {
    let response = await fetch(url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    let newData = await response.json()
    return newData
}

async function render() {
    const cars = await getCarItems(carsApi)
    return {cars}
}

function getParent(element, selector) {
    while(element.parentElement) {
        if(element.parentElement.matches(selector)) {
            return element.parentElement
        }
        element = element.parentElement
    }
}

var carForm = {}

function addCarItem() {
    const addCarBtn = $('#addCarBtn')
    const parentForm = getParent(addCarBtn, '.form-add-car')
    const inputData = parentForm.querySelectorAll('input')
    const optionData = parentForm.querySelectorAll('select[name="car-info"]')
    const data = [...optionData].map(data => data.value).concat([...inputData].map(data => data.value))
    const [ brand, name, newBrand  ] = data
    const formData = {
        name,
        brand: brand === "Other" ? newBrand : brand
    }
    return formData
}

function addCarInfo(carData) {
    const addInfoBtn = $('#addInfoBtn')
    const parentForm = getParent(addInfoBtn, '.form-car-info')
    const inputData = parentForm.querySelectorAll('input')
    const optionData = parentForm.querySelectorAll('select[name="car-info"]')
    const data = [...optionData].map(data => data.value).concat([...inputData].map(data => data.value))
    const [country, engine, description, newCountry, year, img, type, price, newEngine, weight, topSpeed, increaseSpeed, youtubeLink  ] = data
    const formData = {
        ...carData,
        info: {
            description,
            country: country === "Other" ? newCountry : country,
            year: Number(year),
            img: "../assets/img/items/" + img.split(/(\\|\/)/g).pop(),
            type,
            price: Number(price),
            engine: engine === "Other" ? newEngine : engine,
            weight,
            "top-speed": topSpeed,
            "increase-speed": increaseSpeed,
            "youtube-link": youtubeLink
        }
    }
    return formData
}

function addInfoCarItem() {

}


export default render()
export { addCarItem, addCarInfo, postCarItems }