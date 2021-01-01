import React from 'react';
import Navigation from './Navigation';
import {useSelector} from 'react-redux';
import Noti from './Noti';

function Notifications(){
        const user = useSelector(state=>state.name);
        return(
            
            <div>
                <Navigation />
                <Noti name = {user}/>
            </div>
        )
    
}

export default Notifications;