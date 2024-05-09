

export default function reducer(state={value:0}, action){

        switch (action.type) {
            case "increment":
                return{value:state.value+1}
                
            case "decrement":
                return{value:state.value-1}
            
            case "incrementby":
                return{value:state.value+action.payload}
            default:
                return state
        }
}