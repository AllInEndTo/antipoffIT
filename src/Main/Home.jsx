import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../redux/userSlice";
import React, {useEffect} from 'react';
import './Home.css'
import avatar from '../images/avatar.png'
import {Link} from "react-router-dom";

export default function Home() {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div>
            <div className={'header'}>
                <button className={'header-button'}>Выход</button>
                <h1 className={'header-title'}>Наша команда</h1>
                <p className={'header-text'}>Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций. </p>
            </div>
            <div className={'cardplace'}>
                {user.loading && <div>Loading...</div>}
                {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
                {!user.loading && user.users.length ? (
                    <div>
                        {
                            user.users.map((user) => (
                                <div className={'card'} >
                                    <img src={avatar}/>
                                    <ul key={user.id}>
                                        <Link to={`/${user.id}`}>{user.name}</Link>
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                ) : null}
            </div>
        </div>
    );
};