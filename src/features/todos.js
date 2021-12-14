import { combineReducers } from "redux"
import { makeFetchingReducer, makeSetReducer, reduceReducers, makeCrudReducer } from "./utils"

export const setPending= () => {
    return {
        type: "todos/pending"
    }
}

export const setFulfilled = payload => ({ type: "todos/fulfilled", payload})

export const setError = e => ({ type: "todos/error", error: e.message }) 

export const setComplete = (payload) => ({ type: "todo/complete", payload})

export const setFilter = payload => ({type: "filter/set", payload})

export const fetchThunk = () => async dispatch => {
    dispatch(setPending())
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")
        const data = await response.json()
        const todos = data.slice(0, 10) //slice sirve para generar copias de un arreglo, el primer numero indica desde donde cortar y el segundo indica cuanto cortar, usamos slice debido a que la api trae demaciados todos
        dispatch(setFulfilled(todos))
    } catch (e) {
        dispatch(setError())    
    }
}

export const filterReducer = makeSetReducer(["filter/set"])

export const fetchingReducer = makeFetchingReducer([
    "todos/pending",
    "todos/fulfilled",
    "todos/rejected"
])



const fulfilledReducer = makeSetReducer(["todos/fulfilled"])

const crudReducer = makeCrudReducer(["todo/add", "todo/complete"])

export const todosReducer = reduceReducers(crudReducer, fulfilledReducer) 

export const reducer = combineReducers({ //combina todos los reducers de nuestra aplicacion
    todos: combineReducers({
        entities: todosReducer,
        status: fetchingReducer
    }),
    filter: filterReducer
})


export const selectTodos = state => {
    const { todos: { entities }, filter } = state

    if ( filter === "complete") {
        return entities.filter(todo => todo.completed)
    }

    if ( filter === "incomplete") {
        return entities.filter(todo => !todo.completed)
    }

    return entities
}

export const selectStatus = state => state.todos.status