import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import './Header.css'
import { useDispatch, useSelector } from 'react-redux'
import { getcategory } from '../store/slices/CategorySlice'
import { Link, useSearchParams } from 'react-router-dom'
import { searchUser, signOut } from '../store/slices/CurrentUser'

function Header({ setOpenPopup }) {
    const [searchParams, setSearchParams] = useSearchParams("")
    const [IsSignIn, setIsSignIn] = useState(true)
    const [currentUser, setCurrentUser] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [category, setCategory] = useSearchParams("")
    const currentCategory = category.get('categoryId')


    const userIdPassword = {
        email: email,
        password: password
    }

    const dispatch = useDispatch()


    const { data, CurrentUser } = useSelector((store) => {
        return {
            data: store.category.data,
            CurrentUser: store.currentUser.CurrentUser,
        }
    })

    useEffect(() => {
        dispatch(getcategory())
        setCurrentUser(CurrentUser)

    }, [dispatch, CurrentUser])

    const signIn = () => {
        if (email && password) {
            dispatch(searchUser(userIdPassword))
        }
        setIsSignIn(false)
    }

    const signUp = () => {
        setOpenPopup(true)
    }


    const UsersignOut = () => {
        dispatch(signOut(userIdPassword))
        setCurrentUser("")
        setEmail("")
        setPassword("")
        setIsSignIn(true)
    }



    return (
        <div id='header'>
            <div className='top-header'>
                <div className="container">
                    <div className="row d-flex justify-content-between p-3">
                        <Link to={"/"} className="col-6 d-flex justify-content-start align-items-center header-logo">
                            <img className='h-100' src={logo} alt="" />
                        </Link>
                        {
                            !currentUser ? <div className='col-6 row align-items-center justify-content-end'>
                                {
                                    !IsSignIn ?
                                        <div className='col-8 d-flex gap-3 '>
                                            <input onChange={(e) => setEmail(e.target.value)} type="text" value={email} className="form-control" placeholder='Email' />
                                            <input onChange={(e) => setPassword(e.target.value)} type="text" value={password} className="form-control" placeholder='Password' />
                                        </div>
                                        : ""
                                }
                                <div className='col-2 d-flex '>
                                    <div onClick={signIn} className="btn btn-primary">Sign In</div>
                                </div>
                                {
                                    IsSignIn ?
                                        <div className='col-3 d-flex '>
                                            <div onClick={signUp} className="btn btn-primary">Sign Up</div>
                                        </div>
                                        : <div style={{ cursor: "pointer" }} className='col-2' onClick={() => setIsSignIn(true)}>Back</div>
                                }
                            </div> : <div className='col-6 row align-items-center justify-content-end'>
                                <Link to={"my-order"} style={{ textDecoration: "none", cursor: "pointer" }} className='col-3 text-dark'> Hoşgeldin {(CurrentUser.name).toUpperCase()}</Link>
                                <div onClick={UsersignOut} className='btn btn-primary col-2'>Sign Out</div>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className='bottom-header'>
                <div className="container ">
                    <div className="row justify-content-center">
                        <div className="col-12 d-flex justify-content-center align-items-center">
                            <div onClick={() => setSearchParams()} className='btn'>All Category</div>
                            {data && data.map((item, index) => (
                                index < 6 && <Link to={`../?categoryId=${item.id}`} onClick={() => setSearchParams({ categoryId: item.id })} className='btn' key={index}>{item.name}</Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header