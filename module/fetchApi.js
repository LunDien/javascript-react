const carsList = document.querySelector('#cars-list')

const carsApi = 'https://demo2521647.mockable.io/cars'


function start() {
    getCarItems(handleRenderCarItems)
 
    handleCreateCarItems()

}
 
// REST API

function getCarItems(callback) {
    fetch(carsApi)
        .then((response) => {
            return response.json()
        })
        .then(callback)
}

function postCarItems(data, callback) {
    fetch(carsApi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(function(response) {
        return response.json()
    })
    .then(callback)
}

function putCarItems(id, data, callback) {
    fetch(carsApi + '/' + id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(function(response) {
        return response.json()
    })
    .then(callback)
}

function deleteCarItems(id, callback) {
    fetch(carsApi + '/' + id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
    })
    .then(callback)
}


// Handler


function handleRenderCarItems(carItems) {
    const HTML = carItems.map((carItem) => {
        return `
            <li class="car-item-${carItem.id} car-item" id="${carItem.id}">
                <h2 class="heading-item">${carItem.name}</h2>
                <p class="des-item">${carItem.description}</p>
                <button onclick="handleDeleteCarItems(${carItem.id})">Delete</button>
                <button onclick="handleEditCarItems(${carItem.id})">Edit</button>
            </li>
        `
    })
    carsList.innerHTML = HTML
}


function handleCreateCarItems() {
    const createBtn = document.querySelector('#createBtn')
    createBtn.onclick = function() {
        const name = document.querySelector('input[name="name"]').value
        const description = document.querySelector('input[name="description"]').value
        const formData = {
            name,
            description
        }
        postCarItems(formData, () => getCarItems(handleRenderCarItems))
    }
}


function handleEditCarItems(id) {
    const carItem = document.querySelector('.car-item-' + id)
    const carItemName = carItem.querySelector('.heading-item')
    const carItemDes = carItem.querySelector('.des-item')
    const inputName = document.querySelector('input[name="name"]')
    const inputDescription = document.querySelector('input[name="description"]')
    const createBtn = document.querySelector('#createBtn')
    const saveBtn = document.querySelector('#saveBtn')
    getCarItems((carItems) => {
        carItems.map((carItem) => {
            inputName.value = carItemName.innerText
            inputDescription.value = carItemDes.innerText
            createBtn.style.display = "none"
            saveBtn.style.display = "block"
            saveBtn.onclick = function() {
                const formData = {
                    name: inputName.value,
                    description: inputDescription.value
                }
                putCarItems(carItem.id, formData, () => getCarItems(renderCarsItem))
            }
        })
    })
}

function handleDeleteCarItems(id) {
    deleteCarItems(id, () => {
        const carItem = document.querySelector('.car-item-' + id)
        if(carItem) {
            carItem.remove()
        }
    })
}