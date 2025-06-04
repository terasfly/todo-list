const input = document.getElementById('text')
const add = document.getElementById('addBtn')

let div = document.querySelector('.tasks')


// console.log('labas')7
add.addEventListener('click', () => {

    const newDiv = document.createElement('div')

    if (input.value.length > 0) {
        // alert('ss')
        newDiv.textContent = input.value
        div.append(newDiv)
    }

})
