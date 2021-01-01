const getimg = (state =" ",action) =>{
    switch(action.type){
        case "ADD_IMG":
            state = action.post;
            return state;
        case "REMOVE_IMG":
            state = "chat.png";
            return state;
        default:
            return state;
    }
}

export default getimg;