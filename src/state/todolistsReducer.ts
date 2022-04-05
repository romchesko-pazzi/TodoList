import {TodolistType} from "../App";
import {v1} from "uuid";

type ActionType = RemoveTodolistType | AddTodolistType | RenameTodolistType;
export type RemoveTodolistType = ReturnType<typeof removeTodolistAC>
export type AddTodolistType = ReturnType<typeof addTodolistAC>
type RenameTodolistType = ReturnType<typeof renameTodolistAC>

export const todolistsReducer = (state: Array<TodolistType>, action: ActionType) => {
    switch (action.type) {
        case "REMOVE-TODOLIST": {
            return state.filter(f => f.id !== action.payload.todolistID)
        }
        case "ADD-TODOLIST": {
            return [{id: action.payload.todolistID, title: action.payload.newTitle, filter: "all"}, ...state]
        }
        case "RENAME-TODOLIST": {
            return state.map(m => m.id === action.payload.todolistID ? {...m, title: action.payload.newTitle} : m);
        }
        default:
            return state
    }
}

export const removeTodolistAC = (todolistID: string) => {
    return {
        type: "REMOVE-TODOLIST",
        payload: {todolistID}
    } as const
}

export const addTodolistAC = (newTitle: string) => {
    return {
        type: "ADD-TODOLIST",
        payload: {newTitle, todolistID: v1()}
    } as const
}

export const renameTodolistAC = (todolistID: string, newTitle: string) => {
    return {
        type: "RENAME-TODOLIST",
        payload: {todolistID, newTitle}
    } as const
}