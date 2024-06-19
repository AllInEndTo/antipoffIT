import avatar from "../images/avatar.png";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../redux/userSlice";
import {Link} from "react-router-dom";

export default function Users() {

    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div className={'aboutUser'}>
            <div className={'hat'}>
                <img src={avatar}/>
                <p>{
                    user.users.map((user) => (
                            <ul key={user.id}>
                                <p>{user.id}, {user.name}</p>
                            </ul>
                    ))
                }</p>
            </div>
        </div>
    )
}