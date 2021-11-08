import render from "./carAPI.js"
import {addCarItem, addCarInfo, postCarItems} from "./carAPI.js"
import {getPage, getFilterBarPage} from "./pagination.js"


let init = await render
const carsApi = 'http://localhost:3000/cars'
var carData = {}


const actions = {

    addCar({cars}) {
        carData = addCarItem()
        cars.push(carData)
    },
    
    addCarInfo() {
        postCarItems(carsApi, addCarInfo(carData))
    },

    renderPage({cars}, event) {
        cars.push({
            id:"",
            currentPage: getPage(event)
        })
    },
    renderFilterBarPage({cars}, event) {
        cars.push({
            id:"",
            currentPage: getFilterBarPage(event)
        })
    },
    findCarInfo({cars}, event) {
        const inputValue = $('[name="header__search-box"]').value
        const infoCar = (event ? (event.target.value || event.target.innerText) : inputValue).toLowerCase().trim()
        const newCars = cars.filter(car => Object.keys(car)
        .filter(key => (key !== 'id' && key === 'info' && Object.keys(car['info'])
        .map(key2 => key2 !== 'img' && key2 !== 'description' && key2 !== 'youtube-link' && key2 !== 'isSale' 
                                    && car['info'][key2]) || car[key]).toString()
        .toLowerCase().includes(infoCar)).join(''))
        const index = cars.map((car, index) => car.newCars && index)

        cars.splice(index.join('') ? Number(index.join('')) : 0, index.join('') ? 1 : 0)
        newCars.unshift(cars[0])
        infoCar && cars.push({newCars})
    },
    filterCar({cars}, event) {
        const modeFilter = (event.target.innerText ? event.target.innerText : event.target.parentElement.innerText).toLowerCase().trim()
        let newCars = []
        let temp = {}
        const index = cars.map((car, index) => car.newCars && index).join('')
        cars.splice(index ? Number(index) : 0, index ? 1 : 0)
        switch(modeFilter) {
            case 'trending': newCars = cars.filter(car => car.id !== "" && car.info.year >= 2014)
                break
            case 'new item': newCars = cars.filter(car => car)
                for(var i = 1; i < newCars.length; i++) {
                    for(var j = i + 1; j < newCars.length; j++) {
                        if(newCars[i].info.year < newCars[j].info.year) {
                            temp = newCars[i]
                            newCars[i] = newCars[j]
                            newCars[j] = temp
                        }
                    }
                }
                break
            case 'best seller': newCars = cars.filter(car => car.id !== "" && car.sold >= 7)
                break
            case 'price': return
            case 'low to high': newCars = cars.filter(car => car.id !== "")
                for(var i = 0; i < newCars.length; i++) {
                    for(var j = i + 1; j < newCars.length; j++) {
                        const iPrice = newCars[i].info.price * (1 - newCars[i].info.discount / 100)
                        const jPrice = newCars[j].info.price * (1 - newCars[j].info.discount / 100)
                        if(iPrice > jPrice) {
                            temp = newCars[i]
                            newCars[i] = newCars[j]
                            newCars[j] = temp
                        }
                    }
                }
                break
            case 'high to low': newCars = cars.filter(car => car.id !== "")
                for(var i = 0; i < newCars.length; i++) {
                    for(var j = i + 1; j < newCars.length; j++) {
                        const iPrice = newCars[i].info.price * (1 - newCars[i].info.discount / 100)
                        const jPrice = newCars[j].info.price * (1 - newCars[j].info.discount / 100)
                        if(iPrice < jPrice) {
                            temp = newCars[i]
                            newCars[i] = newCars[j]
                            newCars[j] = temp
                        }
                    }
                }
                break
            default: return
        }
        newCars.unshift(cars[0])
        cars.push({newCars})

    }

}


export default function reducer(state = init, action, args) {
    const _this = this
    actions[action] && actions[action](state, ...args)
    return state
}