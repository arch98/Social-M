const getfullname = (state =" ",action) =>{
    switch(action.type){
        case "FULL_NAME":
            state = action.post;
            return state;
        default:
            state = " ";
            return state;
    }
}

export default getfullname;