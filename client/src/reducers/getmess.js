const getmess = (state =0,action) =>{
    switch(action.type){
        case "MESS":
            state = action.post;
            return state;
        default:
            state = 0;
            return state;
    }
}

export default getmess;