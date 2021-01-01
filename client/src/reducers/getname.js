const getname = (state =" ",action) =>{
    switch(action.type){
        case "ADD_NAME":
            state = action.post;
            return state;
        case "LOG_OUT":
            state = " ";
            return state;
        default:
            return state;
    }
}

export default getname;