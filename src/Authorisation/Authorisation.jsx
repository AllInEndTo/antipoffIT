import React, {useState, useEffect} from 'react';
import './Authorisation.css'
import {Link, Navigate, Route, Routes, useHref} from "react-router-dom";
import Home from "../Main/Home";
import SuccessAuth from "./SuccessAuth";

export default function Authorisation() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nameDirty, setNameDirty] = useState(false)
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [nameError, setNameError] = useState('имя не может быть пустым')
    const [emailError, setEmailError] = useState('email не может быть пустым')
    const [passwordError, setPasswordError] = useState('пароль не может быть пустым')
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (nameError || emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [nameError, emailError, passwordError])

    const nameHandler = (e) => {
      setName(e.target.value)
        if (e.target.value.length <= 3) {
            setNameError('имя должно быть длиннее')
            if(!e.target.value) {
                setNameError('имя не может быть пустым')
            }
        } else {
            setNameError('')
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('неправильный email')
        } else {
            setEmailError('')
        }

    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if(e.target.value.length <= 3) {
            setPasswordError('пароль должен быть длиннее')
            if(!e.target.value) {
                setPasswordError('пароль не может быть пустым')
            }
        } else {
            setPasswordError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
            case 'name':
                setNameDirty(true)
                break
        }
    }

        return(
        <div className={'container'}>
            <h3>Регистрация</h3>
            <label htmlFor="uname"><b>Имя</b></label>
            {(nameDirty && nameError) && <div style={{color: 'red'}}>{nameError}</div>}
            <input onChange={e => nameHandler(e)} value={name} onBlur={e => blurHandler(e)} name='name' type="text" placeholder="Артур"/>
            <label htmlFor="email"><b>Электронная почта</b></label>
            {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
            <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name='email' type="email" placeholder="example@mail.ru"/>
            <label htmlFor="psw"><b>Пароль</b></label>
            {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
            <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name='password' type="password" placeholder="*****"/>
            <button type="submit">Зарегистрироваться</button>
            <SuccessAuth/>
        </div>
    );
};