const getabout = (state =" ",action) =>{
    switch(action.type){
        case "ABOUT":
            state = action.post;
            return state;
        default:
            return state;
    }
}

export default getabout;