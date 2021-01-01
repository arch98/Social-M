import {combineReducers} from 'redux';
import getname from './getname';
import loggedReducer from './isLogged';
import getimg from './getimg';
import getfullname from './getfullname';
import getabout from './getabout';
import putfriend from './putfriend';
import getnoti from './getnoti';
import getmess from './getmess';

const allReducers = combineReducers({
    name : getname,
    fullname: getfullname,
    about:getabout,
    img : getimg,
    isLogged : loggedReducer,
    friend : putfriend,
    notif : getnoti,
    mess : getmess
});

export default allReducers;