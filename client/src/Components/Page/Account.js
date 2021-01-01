import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import Head from './Head';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import {img} from '../../actions/img';
import {fullname} from '../../actions/fullname';
import {about} from '../../actions/about';
import {notif} from '../../actions/notif';
import {mess} from '../../actions/mess';
import Post from './Post';

function Account(){

        const user = useSelector(state=>state.name);
        const [im,setIm] = useState("chat.png");
        const [ab,setAb] = useState(" ");
        const [full,setFull] = useState(" ");
        const [un,setUn] = useState(0);
        const [mes,setMes] = useState(0);
        const dispatch = useDispatch();

        useEffect(()=>{

            const payload ={
                "user":user
            }

            axios({
                url:"http://localhost:9000/img",
                method:"POST",
                data:payload
            }).then((response)=>{
                    setIm(response.data.Img);
                    setAb(response.data.About);
                    setFull(response.data.Fullname);
                    dispatch(img(im));
                    dispatch(about(ab));
                    dispatch(fullname(full));
            }).catch(()=>{
                console.log("Error!");
            });
            

            axios({
                url : "http://localhost:9000/count",
                method:"POST",
                data:payload
            }).then((response) =>{
                setUn(response.data.value);
                dispatch(notif(un));
            }).catch(()=>{
                console.log("error!");
            });
            
        });
        
       
        return(
            
            <div>
                <Navigation />
                <Head name = {user} pic = {im} full = {full}/>
                <Post  name = {user} pic = {im}/>
            </div>
        )
    
}

export default Account;