let products = [["Apple", 2.4], ["Banana", 1.8], ["Cherry", 3], ["Peach", 1.2], ["Watermelon", 0.7], ["Melon", 1], ["Plum", 3.2]]


let lowHigh = document.querySelector('.lowHigh')
lowHigh.addEventListener('click', () => {
    document.querySelector('.container').innerHTML = null;
    products.sort((a, b) => {
        return a[1] - b[1]
    })
    createBoxes()
})

let low = document.querySelector('.low')
low.addEventListener('click', () => {
    document.querySelector('.container').innerHTML = null;
    products.sort((a, b) => {
        return b[1] - a[1]
    })
    createBoxes()
})
let az = document.querySelector('.az')
az.addEventListener('click', () => {
    document.querySelector('.container').innerHTML = null;
    products.sort();
    createBoxes()
})
let za = document.querySelector('.za')
za.addEventListener('click', () => {
    document.querySelector('.container').innerHTML = null;
    products.sort();
    products.reverse();
    createBoxes()
})


function createBoxes() {
    products.map((item) => {
        let box = document.createElement('div')
        document.querySelector('.container').appendChild(box)
        box.classList.add('box')
        box.style.display = 'flex'
        box.style.justifyContent = 'space-between'
        box.style.width = '400px'
        box.style.backgroundColor = 'pink'
        box.style.margin = '5px'
        let saxeli = document.createElement('p')
        saxeli.innerText = "Product Name: " + item[0]
        box.appendChild(saxeli)
        let price = document.createElement('p')
        price.innerText = "product Price: " + item[1] + " $"
        box.appendChild(price)
    })
}
createBoxes()

let userFirst = document.getElementById('first')
let secondFirst = document.getElementById('scecond')
let filtri = document.querySelector('.filtri')
//document.querySelector('.container').innerHTML = null;
filtri.addEventListener("click", function () {
    document.querySelector('.container').innerHTML = null
    let f = []
    products.map((item) => {
        if (item[1] > userFirst.value && item[1] < secondFirst.value) {
            f.push(item)
        }
        f.map((arg) => {
            let box = document.createElement('div')
            document.querySelector('.container').appendChild(box)
            box.classList.add('box')
            box.style.display = 'flex'
            box.style.justifyContent = 'space-between'
            box.style.width = '400px'
            box.style.backgroundColor = 'pink'
            box.style.margin = '5px'
            let saxeli = document.createElement('p')
            saxeli.innerText = "Product Name: " + item[0]
            box.appendChild(saxeli)
            let price = document.createElement('p')
            price.innerText = "product Price: " + item[1] + " $"
            box.appendChild(price)

        })
    })
})


