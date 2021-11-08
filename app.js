    'use strict'

// import { addCarItem, postCarItem, carsApi } from "./module/carAPI.js"    
    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)
    const roots = $('#root')
    

    function showModalForm(event) {
        const idBtn = event.target.getAttribute('id')
        const modalLogin = $('.modal--login')
        const modalRegister = $('.modal--register')
        
        return idBtn === "register-form-btn" ? (modalLogin.classList.remove('show') & modalRegister.classList.add('show'))
                                             : (modalRegister.classList.remove('show') & modalLogin.classList.add('show'))
    }

    function hideModalForm(event) {
        const modal = event.target.parentElement
        modal.classList.remove('show')
    }

    //Notify-form

    // const notifyItems = $$('.notify-item')
    // const notifyList = $('.navbar__notify')

    // for(const notifyItem of notifyItems) {
    //     notifyItem.addEventListener('click', function() {
    //         notifyList.classList.add('show')
    //     })
    //     notifyItem.addEventListener('click', function() {
    //         notifyItem.classList.add('seen-notify')
    //     })
    // }

    //Categories

    function toggleHeader() {
        const category = $('.category-navbar-header')
        category.classList.toggle('toggle-header')
        
    }

    setInterval(() => toggleHeader(), 1000)
    

    function maskMoney(value) {
        const arr = value.toString()
        const length = arr.length
        const newArr = []
        let output = ""
        for(var i = 0; i < length; i++) {
            if(i < 3 && length % 3 !== 0 && (i - 1) % 3 === 0) {
                newArr.push(arr.substring(0, length % 3), '.')
            }
            (length - i) % 3 === 0 && newArr.push(arr.substring(i,i + 3), '.')
        }
        output = newArr.map((value,i) => i < newArr.length - 1 && value || '').join('')
        return output
    }   

    // product-item-reaction

    function tapHeart(event) {
        const likedItem = event.target.nextElementSibling
        const noLikeItem = event.target.previousElementSibling
        likedItem && (likedItem.style.display = 'block') || (noLikeItem.style.display = 'block')
        event.target.style.display = 'none'
    }

    function voteStar(event) {
        const voteStar = event.target
        const itemStars = event.target.parentElement.querySelectorAll('.product-item-reaction-star')
        const starIndex = [...itemStars].indexOf(voteStar)
        for(let i = 0; i < itemStars.length; i++) {
            if(i <= starIndex) {
                itemStars[i].classList.add('product-item-reaction-star-gold')
            }
            else if(i > starIndex) {
                itemStars[i].classList.remove('product-item-reaction-star-gold')
            }
        }
    }

    

    //get parent element

    function getParent(element, selector) {
        while(element.parentElement) {
            if(element.parentElement.matches(selector)) {
                return element.parentElement
            }
            element = element.parentElement
        }
    }

    //add Car Info
    function addCar() {
        const addCarBtn = roots.querySelector('#addCarBtn')
        const parentForm = getParent(addCarBtn, ".form-add-car")
        const addCarInfo = roots.querySelector('.form-car-info')
        parentForm.style.display = "none"
        addCarInfo.style.display = "flex"
    }

    function addOtherForm(event) {

        if(event.target.value === "Other") {
            event.target.style.display = "none"
            event.target.nextElementSibling.style.display = "block"
        }
    }

    //find Car Info
    const arr1 = [10, 10, 22, 9, 33, 21, 50, 41, 60, 80];
    function findNumber(arr) {
        var output = 0
        var newArr = []
        var length = arr.length
        for(var i = 1; i < length; ++i) {
            if(arr[i] > arr[0]) {
                newArr.push(arr[0])
                arr[0] = arr[i]
            } 
            else if (arr[i] == arr[0]) {
                arr[0] = arr[i]
            } 
            else if(arr[i] < arr[0]) {
                newArr.push(arr[i])
            }
        }
        var length2 = newArr.length
        for(var i = 1; i < length2; i++) {
            if(newArr[i] > newArr[0]) {
                output = newArr[i]
            }
            else {
                output = newArr[0]
            }
        }
        return output
    }
    
    const arr2 = [10, 10, 22, 9, 33, 21, 50, 41, 60, 80];

    function sortArray(arr) {
        var output = [arr[0]]
        var length = arr.length
        for(var i = 1; i < length; ++i) {
            if(arr[i] > arr[0]) {
                output.push(arr[i])
                arr[0] = arr[i]
            } 
            else if (arr[i] == arr[0]) {
                arr[0] = arr[i]
            } 
        }
        
        return output
    }

    
