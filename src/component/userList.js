import React,{useEffect,useState} from 'react';
import axios from'axios';
import Grid from "@material-ui/core/Grid";
import {Box, makeStyles} from "@material-ui/core";
import UserItem from'./userItem';
import { shadows } from '@material-ui/system';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop:20,
        padding:10,
        flexDirection:'row'


    },

}));
const UserList=()=>{

    const classes = useStyles();
    const [users,setUsers]=useState("");
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
          .then(res=>setUsers(res.data))
          .catch(err=>console.log(err));

    }, []);
    console.log(users)


return(
    <Box component={Grid} container className={classes.root} spacing={2} boxShadow={1} >
    {
        Object.entries(users).map(user=>
            <UserItem user={user} key={user[1].id}/>
        )
    }

    </Box>

)
};

export default UserList;
