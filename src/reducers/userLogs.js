const INITIAL_USER={
    username:null,
    email:null,
    token:null
}

export const userLogs = (state = INITIAL_USER,action)=>{
    switch(action.type){
        case 'LOGGING_IN':
            return{
                ...state,
                username:action.payload.name,
                email:action.payload.email,
                token:action.payload.token
            }
    }
    return state;
}