function pagination(c, m) {
    var current = c,
        last = m,
        delta = 2,
        left = current - delta,
        right = current + delta + 1,
        range = [],
        rangeWithDots = [],
        l;

    for (let i = 1; i <= last; i++) {
        if (i == 1 || i == last || i >= left && i < right) {
            range.push(i);
        }
    }

    for (let i of range) {
        if (l) {
            if (i - l === 2) {
                rangeWithDots.push(l + 1);
            } else if (i - l !== 1) {
                rangeWithDots.push('...');
            }
        }
        rangeWithDots.push(i);
        l = i;
    }

    return rangeWithDots
}

function getPage(event) {
    const pagination = getParent(event.target, '.pagination-list-js')
    const currentPage = pagination.querySelector('.pagination-current-page')
    const prevBtn = pagination.firstElementChild.firstElementChild
    const nextBtn = pagination.lastElementChild.firstElementChild
    const lastPage = pagination.lastElementChild.previousElementSibling
    const element = event.target.parentElement
    if(element === prevBtn) {
        if(currentPage.innerText === "1") {
            return
        }
        
        return Number(currentPage.innerText) - 1
    }
    else if(element === nextBtn) {
        if(currentPage.innerText === lastPage.innerText) {
            return
        }
        
        return Number(currentPage.innerText) + 1
    }
    else if (element.innerText === "...") {
        return
    }
    else {
        return Number(element.innerText)
    }
}

function getFilterBarPage(event) {
    console.log(event.target)
    const pagination = getParent(event.target, '.pagination-list-js')
    const currentPage = pagination.querySelector('.filter-bar__page-current')
    const lastPage = pagination.querySelector('.filter-bar__page-last')
    const prevBtn = pagination.querySelector('.filter-bar__page-control').firstElementChild
    const nextBtn = pagination.querySelector('.filter-bar__page-control').lastElementChild
    const element = event.target.parentElement
    if(element === prevBtn) {
        if(currentPage.innerText === "1") {
            return
        }
        return Number(currentPage.innerText) - 1
    }
    else if(element === nextBtn) {
        if(currentPage.innerText === lastPage.innerText) {
            return
        }
        return Number(currentPage.innerText) + 1
    }
}

export {pagination, getPage, getFilterBarPage}