


export default function authReducer(state, action) {
    switch(action.type) {
        case "TOGGLE_USER":
            const user = state.user ? false : {name:"ebubekir",id:1}
            localStorage.setItem('user',user)
            return{
                ...state,
                user:state.user ? false : {name:"ebubekir",id:1}
            }
    }
}