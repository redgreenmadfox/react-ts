import axios from "axios";
import React, { useEffect, useState } from "react";
import { FC } from "react";
import { IUser } from "../types/types";
import { useParams, useHistory } from "react-router-dom";

interface UserItemPageParams {
    id: string;
}

const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams<UserItemPageParams>()
    const history = useHistory()
    
    useEffect(() => {
        fetchUser()
    }, [])

    async function fetchUser() {
        try{
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
            setUser(response.data)
        } catch(e){
            console.log(e)
        }
    }

    return (
        <div>
            <button onClick={() => history.push('/users')}>Back</button>
            <h1>Страница пользователя {user?.email}</h1>
        </div>
    )
}

export default UserItemPage