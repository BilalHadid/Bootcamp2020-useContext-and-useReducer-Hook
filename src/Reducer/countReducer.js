export const countReducer = (state,action) => {
    switch(action){
        case "INCREMENT":
            return state + 1
        default:
            return state
            
    }
}