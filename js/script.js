let form = document.querySelector('form')
let date = new Date
let time = date.getHours() + ':' + date.getMinutes()
let input = document.querySelector('input')
let img
let remove
let list

function reload_task(params) {
    // creat 
    let todo_list_flex_box = document.querySelector('.todo_list_flex_box')
    let todo_list_item = document.createElement('div')
    let todo_list_elem_one = document.createElement('div')
    let todo_list_elem_two = document.createElement('div')
    let task = document.createElement('h2')
    let hours = document.createElement('span')
    let minuts = document.createElement('span')
    remove = document.createElement('div')
    img = document.createElement('img')
    // stayling
    todo_list_item.classList.add('todo_list_item')
    todo_list_elem_one.classList.add('todo_list_elem_one')
    todo_list_elem_two.classList.add('todo_list_elem_two')
    hours.classList.add('hours')
    minuts.classList.add('minuts')
    remove.classList.add('remove')
    img.src = 'img/Group 14.svg'


    hours.innerHTML = date.getHours()
    minuts.innerHTML = ':' + (date.getMinutes())
    task.innerHTML = input.value

    // app

    todo_list_flex_box.append(todo_list_item)
    todo_list_item.append(todo_list_elem_one, todo_list_elem_two)
    todo_list_elem_one.append(task, hours)
    hours.append(minuts)
    todo_list_elem_two.append(remove)
    remove.append(img)

    // funct 

    
}

let err = false

form.onsubmit = (event) => {
    event.preventDefault();
    if (input.value.length === 0) {
        err = true
    }
    if (err === false) {
        submit()        
    }
}

function submit(params) {
    reload_task()
    list = {
        id: Math.random(),
        isDone: false,
        time: time,
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        list[key] = value
    })

    console.log(list);

}

