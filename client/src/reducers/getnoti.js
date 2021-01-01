const getnoti = (state =0,action) =>{
    switch(action.type){
        case "NOTIFICATIONS":
            state = action.post;
            return state;
        default:
            state = 0;
            return state;
    }
}

export default getnoti;