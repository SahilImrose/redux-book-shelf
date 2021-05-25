import allBook from '../../fakeData/books.json';

const initialState = {
    discover : allBook,
    reading:[ ],
    finish:[]
}

export const bookReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'READING_LIST': {
            const newState ={
                ...state,
                reading:[...state.reading, action.payLoad]
            }
            return newState
        } 
        case 'REMOVE_READING_LIST':{
            const newState = {
                ...state,
                reading: state.reading.filter((book) => book.id!== action.payLoad)
            }
            return newState
        }
        case 'FINISH_LIST':{
            const newState = {
                ...state,
                finish:[...state.finish, action.payLoad]
            }
            return newState
        }
        default: {
            return  state
        }
    }
}