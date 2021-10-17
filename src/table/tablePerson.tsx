import {useEffect} from 'react'
import { User } from '../interfaces/respPerson';
import { useUsers } from '../hooks/useUsers';

export const TablePerson = () => {

    const{users,getUsers,nextButton,previousButton}=useUsers();

    useEffect(() => {
        getUsers()
    },[]);

    const renderUser=(x:User)=>{
        return( 
            <tr key={x.id.toString()} >
                <td> 
                <img 
                    src={x.avatar} 
                    alt={x.first_name} 
                    style={{
                        width:65, 
                        borderRadius:100
                    }}
                />
                </td>
                <td>{x.first_name } {x.last_name }</td>
                <td>{x.email}</td>
            </tr>
        )
    }

    return (
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                    {
                        users  && users.map((x:any)=>{ return renderUser(x)})
                    }
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={ ()=>{ previousButton() }}>'Back</button>
            <button className="btn btn-primary" onClick={ ()=>{nextButton() }} >'Next</button>
            
        </div>
    )
}
