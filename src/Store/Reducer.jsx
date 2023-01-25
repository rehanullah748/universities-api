const Reducer = (state, action) => {
const {type,payload} = action;
switch(type){
    case "START_LOADER":
        return {...state, Loading: payload}
        break;
        case "CLOSE_LOADER":
        return {...state, Loading: payload}
        break;
        case "UNIVERSITIES":
        return {...state, universities: payload}
        break;
    default: 
    return state;
}
}
export default Reducer;