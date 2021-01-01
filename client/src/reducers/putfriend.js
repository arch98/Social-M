const putfriend = (state =" ",action) =>{
    switch(action.type){
        case "CURR_NAME":
            state = action.post;
            console.log(state);
            return state;
        default:
            state = "";
            return state;
    }
}

export default putfriend;