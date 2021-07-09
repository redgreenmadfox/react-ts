import axios from "axios";
import React, { useEffect, useState } from "react";
import { FC } from "react";
import { IUser } from "../types/types";
import List from "./List";
import UserItem from "./UserItem";
import { useHistory } from "react-router-dom";

const UserPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const history = useHistory()
    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        try{
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch(e){
            console.log(e)
        }
    }
    return (
        <List 
            items={users} 
            renderItem={(user: IUser) => <UserItem onClick={(user) => history.push('/users/' + user.id)} user={user} key={user.id}/>}
        />
    )
}

export default UserPage