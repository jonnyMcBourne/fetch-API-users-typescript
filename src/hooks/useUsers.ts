import { useRef, useState } from 'react';
import { User, UsersApi } from '../interfaces/respPerson';
import { reqResUsers } from '../api/reqResApi';



export const useUsers =() => {
    const [users,setUsers]=useState<User[]>([]);
   const pageRef = useRef(1);
    console.log("useRef",pageRef.current);
    const getUsers=async()=>{
        const respUsers = await reqResUsers.get<UsersApi>('/users',
        {
            params:{page:pageRef.current}
        });
        if(respUsers.data.data.length > 0 ){
            setUsers(respUsers.data.data);
        }else{
            window.alert("NO MORE DATA")
            pageRef.current --;    
        }
    }
    const nextButton=()=>{
        pageRef.current ++;
        getUsers();
    }
    const previousButton=()=>{
        if(pageRef.current <= 1)
        return
        pageRef.current --;
        getUsers()
    }

    return {users,getUsers,nextButton,previousButton}
}
