
const main = document.querySelector('.main')   
const todo = document.querySelector('.todo')   
const form = document.querySelector('#form')


const todoList = [
    { id: 1, title: 'title', date: '5/28/20', text: 'text' },
    { id: 2, title: 'title', date: '5/28/20', text: 'text' },
    { id: 3, title: 'title', date: '5/28/20', text: 'text' },
]


const addTodo = () => {
    const newTodoTitle = document.querySelector('#newTodoTitle').value
    const newTodoText = document.querySelector('#newTodoText').value
        
    const date = new Date 
    const today = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()  

    var newId = todoList.length + 1
    
    todoList.push({
        id: newId, 
        title: newTodoTitle, 
        date: today, 
        text: newTodoText
    })
    console.log(todoList);
    todoDisplay()
}

const todoDisplay = () => {
    for(i = 0; i < todoList.length; i++){
        
        const todo = document.createElement('div')
        todo.classList.add('todo')
        todo.innerHTML = ``

        ///////////////////////////////////////////////
        const titleTodo = document.createElement('h4')
        titleTodo.classList.add('titleTodo')

        titleTodo.innerHTML = `
            ${todoList[i].title}
        `

        //////////////////////

        const dateTodo = document.createElement('p')
        dateTodo.classList.add('dateTodo')

        dateTodo.innerHTML = `
            ${todoList[i].date}
        `

        /////////////////////////////////////////////
        const textTodo = document.createElement('span')
        textTodo.classList.add('textTodo')

        textTodo.innerHTML = `
             ${todoList[i].text}
        `
        ////////////////////////////////////////////////

        todo.append(titleTodo, dateTodo, textTodo)
        main.append(todo)
    }
}


const handleFormSubmit = event => {   
    event.preventDefault()
    
    addTodo(newTodoText, newTodoTitle, today)
    init()
        

}
const init = () => {
    todo.innerHTML = ``
    todoDisplay()
}
init()

form.addEventListener('submit', handleFormSubmit) 